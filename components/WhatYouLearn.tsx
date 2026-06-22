import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const items = [
  "Cómo funciona el modelo de inversión agrícola.",
  "Por qué algunos inversionistas están incorporando activos agrícolas a su estrategia patrimonial.",
  "Cómo opera la estructura fiduciaria.",
  "Por qué el limón persa es un cultivo relevante para exportación.",
  "Cómo evaluar si esta alternativa es adecuada para tu perfil.",
];

export default function WhatYouLearn() {
  return (
    <section className="relative bg-cream-50 py-20 text-forest-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel tone="light">Contenido del webinar</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            Qué aprenderás
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-forest-900/10 bg-forest-900/10 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal
              key={item}
              delay={(i % 2) * 0.08}
              className={`bg-cream-50 ${i === items.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="flex h-full items-start gap-5 p-7 sm:p-8">
                <span className="font-display text-2xl font-semibold text-citrus-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-[15px] leading-relaxed text-forest-800 sm:text-base">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
