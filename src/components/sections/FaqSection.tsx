import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/site-content";
import { siteConfig } from "@/data/site-config";

function FaqItem({ question, answer, index, isOpen, onToggle }: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`faq__item${isOpen ? " is-open" : ""}`}>
      <h3>
        <button
          className="faq__q"
          aria-expanded={isOpen}
          aria-controls={`faq-a-${index}`}
          id={`faq-q-${index}`}
          onClick={onToggle}
        >
          {question}
          <span aria-hidden="true">+</span>
        </button>
      </h3>
      <div className="faq__a" id={`faq-a-${index}`} role="region" aria-labelledby={`faq-q-${index}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <Reveal as="header" className="head">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p>Respondemos as dúvidas mais comuns dos nossos pacientes.</p>
        </Reveal>

        <div className="faq">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
            />
          ))}
        </div>

        <p className="faq__foot">
          Não encontrou sua resposta?{" "}
          <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            Fale conosco no WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
