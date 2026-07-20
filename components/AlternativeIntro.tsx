import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import CTAButton from "./ui/CTAButton";

export default function AlternativeIntro() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-citrus-500/8 blur-[110px]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Una alternativa diferente</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 text-balance sm:text-4xl">
              No son CETES. No es trading. No son acciones.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/75">
              Esta clase presenta un modelo basado en activos productivos del
              campo mexicano: tierra, operación agrícola, producción y
              comercialización. No buscamos presentarlo como una opción perfecta
              ni libre de riesgo. Queremos que comprendas cómo funciona, qué lo
              respalda y qué deberías evaluar antes de tomar una decisión.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12">
          <figure className="mx-auto max-w-3xl rounded-3xl border border-citrus-500/20 bg-gradient-to-b from-forest-800/60 to-forest-900/30 p-8 text-center sm:p-12">
            <blockquote className="font-display text-xl font-medium italic leading-snug text-cream-50 text-balance sm:text-2xl">
              “La decisión menos riesgosa no es la que parece perfecta. Es la que
              tomas después de{" "}
              <span className="text-citrus-400">entenderla</span>.”
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <CTAButton href="#registro" size="lg">
            Reservar mi lugar
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
