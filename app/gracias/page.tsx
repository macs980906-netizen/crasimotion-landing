import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import TrackLead from "@/components/TrackLead";

export const metadata: Metadata = {
  title: "Registro confirmado · Cosecha Capital",
  description:
    "Tu lugar en la clase en vivo de Cosecha Capital ha quedado registrado. Revisa tu correo para los detalles de acceso.",
  robots: { index: false, follow: false },
};

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

export default function GraciasPage() {
  return (
    <>
      {/* Fires the Meta `Lead` conversion on load */}
      <TrackLead />

      <main className="flex flex-1 items-center justify-center overflow-hidden bg-forest-950 px-5 py-24 sm:py-32">
        {/* Ambient premium glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-citrus-500/8 blur-[100px]"
        />

        <div className="relative mx-auto w-full max-w-xl text-center">
          <Link
            href="/webinar-cosecha-julio"
            aria-label="Cosecha Capital"
            className="inline-flex items-center justify-center"
          >
            <Image
              src="/assets/logo-cosecha-white.png"
              alt="Cosecha Capital"
              width={150}
              height={150}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <div className="mt-12 flex justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-citrus-500/30 bg-citrus-500/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-citrus-400"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
          </div>

          <h1 className="mt-8 font-display text-3xl font-medium leading-tight tracking-tight text-cream-50 sm:text-4xl">
            Gracias por tu registro
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-100/70">
            Tu lugar en la clase del 30 de julio ya quedó reservado. Te enviamos
            un correo con más información y los datos de acceso. Si no lo
            encuentras, revisa tu bandeja de spam o correo no deseado.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-cream-100/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Jueves 30 de julio
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Online y en vivo
            </span>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center">
            <a
              href="https://wa.me/5215596602494"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-citrus-500 px-7 py-3.5 text-sm font-medium tracking-wide text-forest-950 shadow-[0_10px_30px_-12px_rgba(141,198,63,0.7)] transition-all duration-300 hover:bg-citrus-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-citrus-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 sm:w-auto"
            >
              <WhatsAppIcon />
              Resuelve tus dudas ahora
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb7dIKDJ93wWNEcRlB3X"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-gold-400/40 bg-white/[0.03] px-7 py-3.5 text-sm font-medium tracking-wide text-cream-50 backdrop-blur transition-all duration-300 hover:border-gold-400/70 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 sm:w-auto"
            >
              <WhatsAppIcon />
              Únete a nuestra comunidad en WhatsApp
            </a>
          </div>

          <div className="mt-8">
            <Link
              href="/webinar-cosecha-julio"
              className="text-sm text-cream-100/50 underline decoration-cream-100/25 underline-offset-4 transition-colors hover:text-citrus-400"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
