import { siteConfig } from "@/data/site-config";

export function WhatsAppButton() {
  return (
    <a className="whats" href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.4.6-.3.3c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1l2.1 1c.3.1.5.2.5.4.1.1.1.7-.1 1.4Z" />
      </svg>
    </a>
  );
}
