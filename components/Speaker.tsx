import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

export default function Speaker() {
  return (
    <section className="relative bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-400/20 via-transparent to-citrus-500/10 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
                <Image
                  src="/assets/rodrigo-castilla.webp"
                  alt="Rodrigo Castilla"
                  width={1000}
                  height={1000}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>Conoce a tu ponente</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 sm:text-4xl">
                Rodrigo Castilla
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-citrus-400">
                Vicepresidente de Citrus Patrimonial
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 h-px w-16 gold-rule" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75">
                Rodrigo Castilla compartirá la visión detrás del modelo
                agrícola, la operación productiva y los elementos que respaldan
                la estructura patrimonial del proyecto.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
