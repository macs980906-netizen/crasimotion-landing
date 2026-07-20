import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const jorgePoints = [
  "Explicación clara del modelo.",
  "Evaluación de objetivos y perfil.",
  "Espacio para resolver preguntas en vivo.",
];

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export default function Speakers() {
  return (
    <section className="relative bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Quiénes te acompañarán</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 text-balance sm:text-4xl">
              Una clase para entender el modelo sin promesas fáciles
            </h2>
          </Reveal>
        </div>

        {/* Ponente principal — Jorge Sonsino */}
        <Reveal delay={0.08} className="mt-14">
          <article className="grid grid-cols-1 items-center gap-10 rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-forest-800/50 to-forest-900/30 p-6 sm:p-8 lg:grid-cols-[0.8fr_1fr] lg:gap-14 lg:p-10">
            <div className="relative mx-auto w-full max-w-xs lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-400/20 via-transparent to-citrus-500/10 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/assets/jorge-sonsino.webp"
                  alt="Jorge Sonsino, asesor patrimonial de Cosecha Capital"
                  width={529}
                  height={731}
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-citrus-500/30 bg-forest-800/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-citrus-400">
                Ponente principal
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium text-cream-50 sm:text-3xl">
                Jorge Sonsino
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-citrus-400">
                Asesor patrimonial top de Cosecha Capital
              </p>
              <div className="mt-5 h-px w-16 gold-rule" />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/75">
                Jorge será el responsable de desarrollar la clase principal.
                Explicará cómo funciona el modelo, qué variables patrimoniales
                deben analizarse y cuáles son las preguntas que una persona
                debería resolver antes de tomar una decisión.
              </p>
              <ul className="mt-6 space-y-3">
                {jorgePoints.map((p) => (
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

        {/* Participación especial — Yermi Sutton */}
        <Reveal delay={0.1} className="mt-6">
          <article className="flex flex-col items-center gap-6 rounded-[1.75rem] border border-white/8 bg-forest-900/40 p-6 sm:flex-row sm:gap-8 sm:p-8">
            <div className="relative w-28 shrink-0 sm:w-32">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/assets/yermi-sutton.webp"
                  alt="Yermi Sutton, CEO de Cosecha Capital"
                  width={1000}
                  height={1000}
                  sizes="128px"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-forest-800/50 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-gold-300">
                Participación especial al inicio y al cierre
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-cream-50 sm:text-2xl">
                Yermi Sutton
              </h3>
              <p className="mt-1.5 text-sm font-medium uppercase tracking-[0.16em] text-citrus-400">
                CEO de Cosecha Capital
              </p>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-cream-100/75 sm:mx-0">
                Yermi dará la bienvenida a la sesión y compartirá una breve
                reflexión de cierre sobre la visión patrimonial y productiva
                detrás de Cosecha Capital.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
