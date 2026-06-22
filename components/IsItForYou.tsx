import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const yes = [
  "Buscas diversificar tu patrimonio.",
  "Te interesan activos productivos.",
  "Valoras estructuras con respaldo jurídico.",
  "Buscas alternativas fuera de instrumentos tradicionales.",
  "Piensas en el largo plazo.",
];

const no = [
  "Buscas ganancias inmediatas.",
  "Buscas especulación de corto plazo.",
  "No estás dispuesto a evaluar una estrategia patrimonial.",
  "Buscas promesas agresivas de rendimiento.",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

function Dash() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5">
      <path d="M6 12h12" />
    </svg>
  );
}

export default function IsItForYou() {
  return (
    <section className="relative bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Perfil del inversionista</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 sm:text-4xl">
              ¿Es para ti?
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-citrus-500/25 bg-gradient-to-b from-forest-800/60 to-forest-900/40 p-8 sm:p-9">
              <h3 className="font-display text-xl font-medium text-citrus-400">
                Sí es para ti si…
              </h3>
              <ul className="mt-6 space-y-4">
                {yes.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-citrus-500 text-forest-950">
                      <Check />
                    </span>
                    <span className="text-[15px] leading-relaxed text-cream-100/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-white/8 bg-forest-900/40 p-8 sm:p-9">
              <h3 className="font-display text-xl font-medium text-cream-100/60">
                No es para ti si…
              </h3>
              <ul className="mt-6 space-y-4">
                {no.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream-100/40">
                      <Dash />
                    </span>
                    <span className="text-[15px] leading-relaxed text-cream-100/55">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
