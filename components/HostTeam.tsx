import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

export default function HostTeam() {
  return (
    <section className="relative bg-cream-50 py-20 text-forest-900 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionLabel tone="light">Equipo anfitrión</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Yermi Sutton
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-citrus-600">
                CEO Cosecha Capital
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold-500/70 to-transparent" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-forest-800/75">
                Cosecha Capital conecta a inversionistas con oportunidades
                respaldadas por activos agrícolas productivos y una estructura
                diseñada para brindar acompañamiento, transparencia y certeza.
              </p>
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm lg:ml-auto">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-citrus-500/15 via-transparent to-gold-400/20 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-forest-900/10 shadow-[0_30px_60px_-35px_rgba(12,20,16,0.5)]">
                <Image
                  src="/assets/yermi-sutton.webp"
                  alt="Yermi Sutton, CEO de Cosecha Capital"
                  width={1000}
                  height={1000}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
