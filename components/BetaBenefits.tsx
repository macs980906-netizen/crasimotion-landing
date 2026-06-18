import Reveal from "./Reveal";
import { IconGift, IconBolt, IconCommunity, IconInfo } from "./Icons";

const benefits = [
  {
    icon: IconGift,
    title: "1 año de Premium gratis",
    text: "Disfruta un año completo de membresía Premium sin costo por sumarte a la beta privada.",
  },
  {
    icon: IconBolt,
    title: "Acceso anticipado",
    text: "Eres de las primeras personas en usar CresiMotion y en estrenar cada nueva función antes que nadie.",
  },
  {
    icon: IconCommunity,
    title: "Participa en su evolución",
    text: "Tu voz influye directamente en cómo crece el producto y en las mejoras que vienen.",
  },
];

export default function BetaBenefits() {
  return (
    <section id="beneficios-beta" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-cta">
            Beta privada
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Beneficios por participar en la beta
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Sumarte ahora tiene ventajas que no estarán disponibles más adelante.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-cta">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Condición de permanencia del beneficio */}
        <Reveal delay={120}>
          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-brand-green/25 bg-brand-green/5 p-5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-cta text-white">
              <IconInfo className="h-4 w-4" />
            </span>
            <p className="text-sm leading-relaxed text-ink">
              <span className="font-semibold text-brand-navy">
                ¿Cómo conservas estos beneficios?
              </span>{" "}
              Para mantener el año de Premium gratis solo necesitas compartir tus
              observaciones y comentarios sobre tu experiencia de uso. Tu
              retroalimentación es parte esencial de la beta.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
