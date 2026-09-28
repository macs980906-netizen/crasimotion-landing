import Image from "next/image";
import CTAButton from "./ui/CTAButton";
import SectionLabel from "./ui/SectionLabel";

const datos = [
  { label: "En vivo por Zoom", icon: "video" },
  { label: "Cupo limitado", icon: "users" },
  { label: "Acceso con registro", icon: "ticket" },
] as const;

const bullets = [
  "Operación agrícola real y estructurada",
  "Producción orientada a exportación",
  "Estructura fiduciaria de respaldo",
  "Criterios para evaluar riesgo y perfil",
];

function Icon({ name }: { name: string }) {
  const common = "h-4 w-4 shrink-0 text-citrus-400";
  if (name === "video")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
        <path d="m15.5 10 6-3.2v10.4l-6-3.2z" />
      </svg>
    );
  if (name === "ticket")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 5 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-5Z" />
        <path d="M14.5 7.5v9" strokeDasharray="1.5 2.5" />
      </svg>
    );
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 6.2a3 3 0 010 5.6M20.5 19c0-2.2-1.3-3.8-3-4.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero.webp"
          alt="Plantación de limón persa en el campo mexicano"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Premium dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-forest-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/55 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:pt-40">
        <div className="max-w-3xl">
          <div className="animate-[fadeUp_0.8s_ease-out_both]">
            <SectionLabel>Sesión en vivo · por Zoom</SectionLabel>
          </div>

          <h1 className="mt-7 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-cream-50 text-balance sm:text-5xl lg:text-[4.25rem]">
            Invierte en el{" "}
            <span className="text-citrus-400">campo mexicano</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
            Entérate de cómo funciona una operación agrícola real —tierra,
            producción y exportación— y evalúa con información si puede formar
            parte de tu estrategia patrimonial.
          </p>

          {/* Datos */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {datos.map((d) => (
              <span
                key={d.label}
                className="inline-flex items-center gap-2 text-sm font-medium text-cream-50/90"
              >
                <Icon name={d.icon} />
                {d.label}
              </span>
            ))}
          </div>

          {/* Bullets */}
          <ul className="mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2.5 text-sm text-cream-100/85"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-citrus-500" />
                {b}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href="#registro" size="lg">
              Aparta tu lugar
            </CTAButton>
            <CTAButton href="#modelo" variant="outline" size="lg">
              Conocer el modelo
            </CTAButton>
          </div>

          <p className="mt-5 max-w-xl text-sm text-cream-100/55">
            Un asesor te contactará para confirmar tu acceso. Registrarte no
            implica ningún compromiso de inversión.
          </p>
        </div>
      </div>
    </section>
  );
}
