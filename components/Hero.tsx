import Reveal from "./Reveal";
import PhoneMockup from "./PhoneMockup";
import { IconPulse, IconRoute, IconCommunity, IconArrowRight } from "./Icons";

const indicators = [
  { icon: IconPulse, label: "Diagnóstico emocional" },
  { icon: IconRoute, label: "Proceso personalizado" },
  { icon: IconCommunity, label: "Acompañamiento y comunidad" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Fondos decorativos suaves */}
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-brand-navy/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        {/* Columna de texto */}
        <div className="animate-slideUp text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green-dark">
            Plataforma de transformación emocional
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl">
            Gestiona lo que sientes{" "}
            <span className="text-brand-green">antes de que te controle</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            Sanación emocional guiada y un sistema estructurado que te acompaña
            paso a paso.
          </p>

          {/* Indicadores */}
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {indicators.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-green shadow-sm ring-1 ring-slate-100">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          {/* CTA hacia la sección de inicio */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#como-comenzar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-green/25 transition-all hover:bg-brand-green-dark hover:shadow-xl"
            >
              Comenzar ahora
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#beneficios"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-brand-navy transition-colors hover:border-brand-green hover:text-brand-green"
            >
              Cómo funciona
            </a>
          </div>
        </div>

        {/* Columna del mockup */}
        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <div className="animate-floatY">
            <PhoneMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
