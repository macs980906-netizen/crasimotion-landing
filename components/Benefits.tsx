import Reveal from "./Reveal";
import { IconCloud, IconRoute, IconBattery, IconLoop } from "./Icons";

const cards = [
  {
    icon: IconCloud,
    text: "Sientes que algo no está bien, pero no sabes exactamente qué.",
  },
  {
    icon: IconRoute,
    text: "Has intentado cambiar, pero no sabes por dónde empezar.",
  },
  {
    icon: IconBattery,
    text: "Te sientes saturado emocionalmente y mentalmente.",
  },
  {
    icon: IconLoop,
    text: "Das vueltas a lo mismo sin encontrar claridad ni soluciones.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-cta">
            ¿Te suena familiar?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Tal vez te está pasando esto...
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, text }, i) => (
            <Reveal as="li" key={text} delay={i * 90}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-base leading-relaxed text-ink">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-lg font-semibold text-brand-cta">
            No necesitas más información. Necesitas claridad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
