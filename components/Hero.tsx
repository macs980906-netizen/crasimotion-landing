import Image from "next/image";
import CTAButton from "./ui/CTAButton";
import SectionLabel from "./ui/SectionLabel";

const datos = [
  { label: "Jueves 30 de julio", icon: "calendar" },
  { label: "Online y en vivo", icon: "globe" },
  { label: "Acceso gratuito", icon: "ticket" },
  { label: "Cupo limitado", icon: "users" },
] as const;

const bullets = [
  "Activos productivos reales",
  "Producción agrícola orientada a exportación",
  "Estructura fiduciaria y mecanismos de respaldo",
  "Criterios para evaluar riesgo, plazo y liquidez",
];

function Icon({ name }: { name: string }) {
  const common = "h-4 w-4 shrink-0 text-citrus-400";
  if (name === "calendar")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M8 2.5v4M16 2.5v4" strokeLinecap="round" />
      </svg>
    );
  if (name === "globe")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
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
          alt="Plantación de limón persa al atardecer"
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
            <SectionLabel>Clase en vivo gratuita</SectionLabel>
          </div>

          <h1 className="mt-7 font-display text-4xl font-medium leading-[1.08] tracking-tight text-cream-50 text-balance sm:text-5xl lg:text-6xl">
            Hay inversiones que no viven en una pantalla.{" "}
            <span className="text-citrus-400">Crecen en el campo mexicano.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
            Conoce cómo funciona un modelo de inversión respaldado por activos
            productivos agrícolas, qué riesgos debes evaluar y cómo saber si
            puede integrarse a tu estrategia patrimonial.
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
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {b}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href="#registro" size="lg">
              Reservar mi lugar
            </CTAButton>
            <CTAButton href="#que-aprenderas" variant="outline" size="lg">
              Conocer la clase
            </CTAButton>
          </div>

          <p className="mt-5 text-sm text-cream-100/55">
            Registrarte no implica ningún compromiso de inversión.
          </p>
        </div>
      </div>
    </section>
  );
}
