/** Validação do formulário de contato (usada no servidor; espelha as regras do script.js). */

export const CONTACT_LIMITS = { nome: 100, telefone: 20, email: 254, mensagem: 1000 } as const;

export type ContactPayload = {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
};

export type ContactResult =
  | { ok: true; data: ContactPayload; spam: boolean }
  | { ok: false; errors: Partial<Record<keyof ContactPayload, string>> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  // Remove caracteres de controle (exceto \t, \n, \r) antes de aparar os espaços.
  let out = "";
  for (const ch of value) {
    const code = ch.charCodeAt(0);
    if (code >= 32 || code === 9 || code === 10 || code === 13) out += ch;
  }
  return out.trim();
}

export function validateContact(input: unknown): ContactResult {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const data: ContactPayload = {
    nome: clean(raw.nome),
    telefone: clean(raw.telefone),
    email: clean(raw.email),
    mensagem: clean(raw.mensagem),
  };

  const errors: Partial<Record<keyof ContactPayload, string>> = {};
  if (data.nome.length < 3 || data.nome.length > CONTACT_LIMITS.nome) {
    errors.nome = "Informe seu nome completo.";
  }
  const digits = data.telefone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11 || data.telefone.length > CONTACT_LIMITS.telefone) {
    errors.telefone = "Informe um telefone válido com DDD.";
  }
  if (!EMAIL_RE.test(data.email) || data.email.length > CONTACT_LIMITS.email) {
    errors.email = "Informe um e-mail válido.";
  }
  if (data.mensagem.length > CONTACT_LIMITS.mensagem) {
    errors.mensagem = "A mensagem é muito longa.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  // Campo-isca (honeypot): humanos não o veem; bots costumam preenchê-lo.
  return { ok: true, data, spam: clean(raw.website).length > 0 };
}
