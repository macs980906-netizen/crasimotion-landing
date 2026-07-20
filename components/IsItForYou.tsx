import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const yes = [
  "Quieres diversificar tu patrimonio con alternativas fuera de los instrumentos tradicionales.",
  "Te interesa comprender modelos respaldados por activos productivos.",
  "Valoras estructuras jurídicas, información clara y acompañamiento.",
  "Estás dispuesto a evaluar riesgos antes de tomar una decisión.",
  "Piensas en objetivos patrimoniales de mediano o largo plazo.",
];

const no = [
  "Buscas ganancias inmediatas o especulación de corto plazo.",
  "Necesitas disponer de todo tu capital de forma inmediata.",
  "Esperas una inversión sin riesgos.",
  "Solo te interesa conocer un porcentaje sin entender el modelo.",
  "No estás dispuesto a evaluar si la alternativa encaja con tu perfil.",
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
            <SectionLabel>Perfil del participante</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 sm:text-4xl">
              ¿Esta clase es para ti?
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-citrus-500/25 bg-gradient-to-b from-forest-800/60 to-forest-900/40 p-8 sm:p-9">
              <h3 className="font-display text-xl font-medium text-citrus-400">
                Puede ser para ti si…
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
            <div className="h-full rounded-3xl border border-white/12 bg-forest-800/50 p-8 sm:p-9">
              <h3 className="font-display text-xl font-medium text-cream-50/85">
                Probablemente no es para ti si…
              </h3>
              <ul className="mt-6 space-y-4">
                {no.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/25 text-cream-100/70">
                      <Dash />
                    </span>
                    <span className="text-[15px] leading-relaxed text-cream-100/80">
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
