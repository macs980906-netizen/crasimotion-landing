import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const items = [
  {
    title: "Demanda internacional constante",
    desc: "Un cultivo con presencia sostenida en los principales mercados de consumo.",
  },
  {
    title: "Producción agrícola especializada",
    desc: "Manejo técnico orientado a calidad y rendimiento por hectárea.",
  },
  {
    title: "Mercado exportador",
    desc: "Orientación a comercialización fuera del mercado local.",
  },
  {
    title: "Utilidades vinculadas al dólar",
    desc: "Ingresos asociados a una moneda de referencia internacional.",
  },
  {
    title: "Activo tangible",
    desc: "Respaldado por tierra y producción real, no por instrumentos abstractos.",
  },
];

export default function WhyPersianLime() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-citrus-500/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>El cultivo</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 text-balance sm:text-4xl lg:text-[2.75rem]">
              Por qué el <span className="text-citrus-400">limón persa</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-cream-100/70">
              Un activo agrícola con fundamentos sólidos y orientación
              internacional.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/8 bg-forest-800/40 p-7 transition-all duration-300 hover:border-citrus-500/30 hover:bg-forest-800/70">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-citrus-500/30 text-sm font-medium text-citrus-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream-100/65">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
