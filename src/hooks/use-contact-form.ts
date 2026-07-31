import { useState, type FormEvent } from "react";

export interface ContactFormValues {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
}

type FieldErrors = Partial<Record<"nome" | "telefone" | "email", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initialValues: ContactFormValues = { nome: "", telefone: "", email: "", mensagem: "" };

/** Formats raw digits as a Brazilian phone number: (11) 90000-0000. */
export function formatBrazilianPhone(rawValue: string): string {
  const digits = rawValue.replace(/\D/g, "").slice(0, 11);
  if (digits.length > 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  if (digits.length > 6) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  if (digits.length > 2) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return digits;
}

function validate(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (values.nome.trim().length < 3) errors.nome = "Informe seu nome completo.";
  if (values.telefone.replace(/\D/g, "").length < 10) errors.telefone = "Informe um telefone válido com DDD.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Informe um e-mail válido.";
  return errors;
}

/**
 * Encapsulates the "solicitar horário" form: controlled values, Brazilian
 * phone masking, blur/submit validation and a submission status message.
 *
 * The `onSubmit` callback receives already-validated values, ready to be
 * wired up to a real backend endpoint later without touching this hook.
 */
export function useContactForm(onSubmit?: (values: ContactFormValues) => void | Promise<void>) {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const setField = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const onPhoneChange = (raw: string) => setField("telefone", formatBrazilianPhone(raw));

  const onBlurField = (field: keyof FieldErrors) => {
    setErrors((prev) => ({ ...prev, [field]: validate(values)[field] }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await onSubmit?.(values);
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("idle");
    }
  };

  return { values, errors, status, setField, onPhoneChange, onBlurField, handleSubmit };
}
