import { createFileRoute } from "@tanstack/react-router";

import { validateContact } from "../../lib/contact-validation";

const MAX_BODY_BYTES = 8 * 1024;
const FORWARD_TIMEOUT_MS = 8000;

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

/** O destino (Make.com → Google Sheets) vem de CONTACT_WEBHOOK_URL e nunca chega ao navegador. */
function getWebhookUrl(): URL | null {
  const raw = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!raw) return null;
  try {
    const url = new URL(raw);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    return url.protocol === "https:" || (local && url.protocol === "http:") ? url : null;
  } catch {
    return null;
  }
}

/** Aceita apenas requisições vindas da própria origem (mitiga CSRF/uso por outros sites). */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!isSameOrigin(request)) return json({ ok: false, error: "forbidden" }, 403);
        if (!(request.headers.get("content-type") ?? "").includes("application/json")) {
          return json({ ok: false, error: "unsupported_media_type" }, 415);
        }

        const text = await request.text();
        if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) {
          return json({ ok: false, error: "payload_too_large" }, 413);
        }

        let payload: unknown;
        try {
          payload = JSON.parse(text);
        } catch {
          return json({ ok: false, error: "invalid_json" }, 400);
        }

        const result = validateContact(payload);
        if (!result.ok) return json({ ok: false, error: "validation", fields: result.errors }, 422);
        // Honeypot preenchido: responde como sucesso, mas não encaminha nada.
        if (result.spam) return json({ ok: true });

        const webhook = getWebhookUrl();
        if (!webhook) {
          // Modo demonstração: sem CONTACT_WEBHOOK_URL nenhum dado é enviado ou guardado.
          return json({ ok: true, demo: true });
        }

        try {
          // Mesmo formato (multipart) e mesmos nomes de campo usados antes pelo cenário do Make.
          const form = new FormData();
          for (const [key, value] of Object.entries(result.data)) form.append(key, value);
          const res = await fetch(webhook, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: form,
            signal: AbortSignal.timeout(FORWARD_TIMEOUT_MS),
          });
          if (!res.ok) {
            console.error(`[contact] webhook respondeu ${res.status}`);
            return json({ ok: false, error: "upstream" }, 502);
          }
          return json({ ok: true });
        } catch (error) {
          console.error(
            "[contact] falha ao encaminhar:",
            error instanceof Error ? error.name : error,
          );
          return json({ ok: false, error: "upstream" }, 502);
        }
      },
    },
  },
});
