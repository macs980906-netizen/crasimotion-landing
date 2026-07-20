import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import CTAButton from "./ui/CTAButton";

const pillars = [
  {
    group: "Estructura fiduciaria",
    title: "Fideicomiso de Tierra",
    desc: "La tierra se integra a una estructura fiduciaria que forma parte del respaldo patrimonial del proyecto.",
  },
  {
    group: "Estructura fiduciaria",
    title: "Fideicomiso de Operación",
    desc: "La operación agrícola se administra bajo reglas y procesos establecidos para su funcionamiento.",
  },
  {
    group: "Estructura fiduciaria",
    title: "Fideicomiso de Dispersión",
    desc: "La distribución de recursos se realiza mediante un mecanismo fiduciario diseñado para ordenar y transparentar el proceso.",
  },
  {
    group: "Cobertura",
    title: "Seguro de Plantación",
    desc: "La plantación contempla coberturas frente a determinados eventos que pueden afectar el cultivo, conforme a los términos aplicables.",
  },
  {
    group: "Cobertura",
    title: "Cobertura de Producción",
    desc: "El modelo contempla mecanismos de cobertura relacionados con determinados niveles de producción, sujetos a condiciones y alcances específicos.",
  },
];

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 3 4 6.2v5c0 4.6 3.3 7.9 8 9.6 4.7-1.7 8-5 8-9.6v-5L12 3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}

export default function SecurityBacking() {
  return (
    <section className="relative bg-cream-100 py-20 text-forest-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel tone="light">Estructura del modelo</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
              Conoce qué función cumple cada mecanismo de respaldo
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-forest-800/70">
              Durante la clase explicaremos cómo se organiza cada componente y
              cuáles son sus alcances dentro del modelo.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-forest-900/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-[0_24px_50px_-30px_rgba(12,20,16,0.4)]">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-citrus-500 transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-gold-300">
                    <ShieldIcon />
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-forest-800/45">
                    {p.group}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-forest-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-800/70">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <CTAButton href="#registro" size="lg">
            Reservar mi lugar
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
