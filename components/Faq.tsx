"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { IconChevron } from "./Icons";
import { FAQ_ACCOUNT_ANSWER } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type FaqItem = {
  q: string;
  /** Respuesta renderizada (puede incluir enlaces). */
  a: React.ReactNode;
  /** Versión en texto plano para los datos estructurados (SEO). */
  schema: string;
};

const items: FaqItem[] = [
  {
    q: "¿Cómo accedo a la beta privada?",
    a: "El acceso es por invitación. CresiMotion habilita previamente tu correo y te envía la invitación; solo necesitas seguir los pasos de esta página para entrar.",
    schema:
      "El acceso es por invitación. CresiMotion habilita previamente tu correo y te envía la invitación; solo necesitas seguir los pasos de esta página para entrar.",
  },
  {
    q: "¿Por qué necesito Expo Go?",
    a: "Expo Go es una solución temporal de distribución solo durante la beta: es la vía para abrir CresiMotion en tu teléfono. No es CresiMotion y, en la versión final, no necesitarás este paso.",
    schema:
      "Expo Go es una solución temporal de distribución solo durante la beta: es la vía para abrir CresiMotion en tu teléfono. No es CresiMotion y, en la versión final, no necesitarás este paso.",
  },
  {
    q: "¿Tiene costo?",
    a: "No.",
    schema: "No.",
  },
  {
    q: "¿Mis datos están protegidos?",
    a: (
      <>
        Sí. Consulta nuestro{" "}
        <Link
          href="/aviso-privacidad"
          onClick={() =>
            trackEvent("click_aviso_privacidad", { location: "faq" })
          }
          className="font-semibold text-brand-cta underline-offset-2 hover:underline"
        >
          Aviso de Privacidad
        </Link>
        .
      </>
    ),
    schema: "Sí. Consulta nuestro Aviso de Privacidad.",
  },
  {
    q: "¿Necesito crear una cuenta?",
    a: FAQ_ACCOUNT_ANSWER,
    schema: FAQ_ACCOUNT_ANSWER,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.schema },
  })),
};

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-3">
            {items.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-button-${i}`;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                >
                  <h3 className="m-0">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-brand-navy">
                        {item.q}
                      </span>
                      <IconChevron
                        className={`h-5 w-5 shrink-0 text-brand-cta transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="px-6 pb-5 text-base leading-relaxed text-slate-600"
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
