"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { IconChevron } from "./Icons";
import { FAQ_ACCOUNT_ANSWER } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

const items: FaqItem[] = [
  {
    q: "¿Cómo accedo a la beta privada?",
    a: "El acceso es por invitación. CresiMotion habilita previamente tu correo y te envía la invitación; solo necesitas seguir los pasos de esta página para entrar.",
  },
  {
    q: "¿Por qué necesito Expo Go?",
    a: "Actualmente CresiMotion utiliza Expo Go para facilitar el acceso a nuevas funcionalidades y mejoras continuas.",
  },
  {
    q: "¿Tiene costo?",
    a: "No.",
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
          className="font-semibold text-brand-green underline-offset-2 hover:underline"
        >
          Aviso de Privacidad
        </Link>
        .
      </>
    ),
  },
  {
    q: "¿Necesito crear una cuenta?",
    a: FAQ_ACCOUNT_ANSWER,
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <dl className="mt-10 space-y-3">
            {items.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-button-${i}`;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                >
                  <dt>
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
                        className={`h-5 w-5 shrink-0 text-brand-green transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </dt>
                  <dd
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                    className="px-6 pb-5 text-base leading-relaxed text-slate-600"
                  >
                    {item.a}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
