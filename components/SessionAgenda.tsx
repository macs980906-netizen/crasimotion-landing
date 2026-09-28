import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import CTAButton from "./ui/CTAButton";

const items = [
  "Cómo se estructura una operación agrícola de limón persa, de la tierra a la exportación.",
  "Qué papel cumplen la estructura fiduciaria y los mecanismos de respaldo del modelo.",
  "Cómo se conecta la producción con un mercado internacional que ya demanda el producto.",
  "Qué riesgos, plazos y condiciones deberías evaluar para saber si encaja con tu perfil.",
];

export default function SessionAgenda() {
  return (
    <section
      id="sesion"
      className="relative bg-cream-50 py-20 text-forest-900 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel tone="light">La sesión en vivo</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
              Lo que vas a descubrir
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-forest-800/70">
              Una sesión en vivo por Zoom, directa y sin rodeos, con espacio para
              resolver tus dudas con un asesor.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-forest-900/10 bg-forest-900/10 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 0.08} className="bg-cream-50">
              <div className="flex h-full items-start gap-5 p-7 sm:p-8">
                <span className="font-display text-2xl font-extrabold text-citrus-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-[15px] leading-relaxed text-forest-800 sm:text-base">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <CTAButton href="#registro" size="lg">
            Aparta tu lugar
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
