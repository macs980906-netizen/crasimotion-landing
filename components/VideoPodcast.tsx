import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import YouTubeLite from "./YouTubeLite";

export default function VideoPodcast() {
  return (
    <section className="relative bg-forest-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Antes del webinar</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 text-balance sm:text-4xl">
              Conoce la visión detrás del modelo antes del webinar
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-cream-100/70">
              Conversación entre Marcus Dantus y Rodrigo Castilla sobre inversión
              agrícola, activos productivos y oportunidades patrimoniales.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <YouTubeLite
            id="gtanYjEXQTs"
            title="Marcus Dantus y Rodrigo Castilla · Inversión agrícola"
          />
        </Reveal>
      </div>
    </section>
  );
}
