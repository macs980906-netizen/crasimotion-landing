import Reveal from "./ui/Reveal";

const items = [
  {
    title: "Más de 4 generaciones agrícolas",
    icon: (
      <path d="M12 3v18M12 8c0-2.5 2-4.5 5-4.5C17 6 15 8 12 8Zm0 0c0-2.5-2-4.5-5-4.5C7 6 9 8 12 8Zm0 6c0-2 1.6-3.6 4-3.6 0 2-1.6 3.6-4 3.6Zm0 0c0-2-1.6-3.6-4-3.6 0 2 1.6 3.6 4 3.6Z" />
    ),
  },
  {
    title: "Operación orientada a exportación",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </>
    ),
  },
  {
    title: "Estructura fiduciaria",
    icon: (
      <path d="M12 3 4 6.5v5c0 4.5 3.2 7.7 8 9.5 4.8-1.8 8-5 8-9.5v-5L12 3Z" />
    ),
  },
  {
    title: "Modelo patrimonial respaldado por activos reales",
    icon: (
      <>
        <path d="M4 20h16M6 20V10m4 10V10m4 10V10m4 10V10" />
        <path d="M3 9 12 4l9 5" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function AuthorityStrip() {
  return (
    <section className="relative bg-forest-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-white/8 bg-gradient-to-b from-forest-900/80 to-forest-900/40 p-6 transition-colors duration-300 hover:border-gold-400/30">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-citrus-500/25 bg-forest-800/60 text-citrus-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="h-5 w-5"
                  >
                    {item.icon}
                  </svg>
                </span>
                <p className="mt-5 text-[15px] font-medium leading-snug text-cream-50">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
