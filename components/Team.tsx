import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const points = [
  "Cómo está diseñada la operación y qué la respalda.",
  "Cómo se evalúan objetivos, riesgo y perfil patrimonial.",
  "Espacio para resolver tus dudas en vivo.",
];

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="ponentes" className="relative bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Quiénes te acompañan</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-cream-50 text-balance sm:text-4xl">
              Un equipo que conoce el modelo por dentro
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-14">
          <article className="grid grid-cols-1 items-center gap-10 rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-forest-800/50 to-forest-900/30 p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-citrus-500/15 via-transparent to-gold-400/15 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/assets/ponentes-grupo.webp"
                  alt="Equipo de Cosecha Capital: Marcus Dantus, Jorge Sonsino y Yermi Sutton"
                  width={1024}
                  height={1280}
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-extrabold uppercase leading-tight text-cream-50 sm:text-3xl">
                Marcus Dantus, Jorge Sonsino y Yermi Sutton
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-citrus-400">
                Con la participación del CEO de Cosecha Capital
              </p>
              <div className="mt-5 h-px w-16 gold-rule" />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/75">
                La sesión reúne visión emprendedora, experiencia patrimonial y la
                voz de la dirección de Cosecha Capital. Juntos explican cómo
                funciona el modelo, qué variables conviene analizar y qué
                preguntas deberías resolver antes de tomar una decisión. Yermi
                Sutton, CEO de Cosecha Capital, participa con la apertura y el
                cierre de la sesión.
              </p>
              <ul className="mt-6 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-citrus-500 text-forest-950">
                      <Check />
                    </span>
                    <span className="text-[15px] leading-relaxed text-cream-100/85">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
