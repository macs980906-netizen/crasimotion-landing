import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import CTAButton from "./ui/CTAButton";

const formula = [
  { word: "Campo mexicano", tone: "text-citrus-400" },
  { word: "operación", tone: "text-cream-50" },
  { word: "mercado internacional", tone: "text-citrus-400" },
];

export default function ModelThesis() {
  return (
    <section
      id="modelo"
      className="relative overflow-hidden bg-forest-900 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-citrus-500/8 blur-[110px]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>El modelo</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-cream-50 text-balance sm:text-4xl lg:text-5xl">
              No eliges un árbol.{" "}
              <span className="text-citrus-400">Eliges una cadena de demanda.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-100/75">
              La tesis de Cosecha Capital gira alrededor del limón persa y su
              comercialización: no es un cultivo aislado, es una operación que
              conecta tierra, producción y un mercado que ya existe. La sesión te
              muestra cómo funciona por dentro y qué deberías evaluar.
            </p>
          </Reveal>
        </div>

        {/* Fórmula del modelo (identidad de redes) */}
        <Reveal delay={0.12} className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-x-4 gap-y-2 rounded-3xl border border-white/10 bg-forest-800/40 px-6 py-10 text-center sm:flex-row sm:flex-wrap">
            {formula.map((f, i) => (
              <span key={f.word} className="inline-flex items-center gap-x-4">
                <span
                  className={`font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl ${f.tone}`}
                >
                  {f.word}
                </span>
                {i < formula.length - 1 && (
                  <span className="font-display text-2xl font-extrabold text-citrus-500 sm:text-3xl">
                    +
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-cream-100/55">
            Toda inversión implica riesgos. El objetivo de la sesión no es
            prometer resultados, sino darte información y criterios para evaluar
            el modelo con claridad.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 flex justify-center">
          <CTAButton href="#registro" size="lg">
            Aparta tu lugar
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
