import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import CTAButton from "./ui/CTAButton";

const factors = [
  {
    title: "Riesgo operativo",
    desc: "Factores propios de la administración y ejecución del proyecto.",
    icon: "gear",
  },
  {
    title: "Riesgo agrícola",
    desc: "Condiciones del cultivo, clima y variables de producción.",
    icon: "sprout",
  },
  {
    title: "Plazo y liquidez",
    desc: "Horizonte del modelo y disponibilidad del capital.",
    icon: "clock",
  },
  {
    title: "Adecuación al perfil",
    desc: "Qué tanto encaja con tus objetivos patrimoniales.",
    icon: "target",
  },
];

function Icon({ name }: { name: string }) {
  const c = "h-5 w-5";
  if (name === "gear")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.2" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-2.87 1.2V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 7 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 2.6 15H2.5a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 7a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 2.6h.09A1.7 1.7 0 0 0 11 1v-.09" />
      </svg>
    );
  if (name === "sprout")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20v-8" />
        <path d="M12 12c0-3 2-6 6-6 0 3-2 6-6 6Z" />
        <path d="M12 14c0-2.5-2-5-5-5 0 2.5 2 5 5 5Z" />
      </svg>
    );
  if (name === "clock")
    return (
      <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    );
  return (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </svg>
  );
}

export default function RiskInfo() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[24rem] w-[24rem] translate-x-1/3 rounded-full bg-gold-400/8 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Decidir con información</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 text-balance sm:text-4xl">
              Toda inversión implica riesgos. La diferencia está en entenderlos.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/75">
              Durante la clase hablaremos de los factores que pueden afectar una
              inversión agrícola, los plazos del modelo, la disponibilidad del
              capital y las preguntas que debes resolver antes de avanzar. El
              objetivo no es eliminar el riesgo mediante promesas, sino ayudarte
              a evaluarlo con mayor claridad.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-forest-800/40 p-6 transition-colors duration-300 hover:border-citrus-500/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-950 text-citrus-400">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-cream-50">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="mt-12 flex justify-center">
          <CTAButton href="#registro" size="lg">
            Quiero aprender a evaluarlo
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
