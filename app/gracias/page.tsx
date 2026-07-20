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
            Tu lugar está reservado
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-100/70">
            Revisa tu correo y WhatsApp. En breve recibirás la confirmación y
            los datos de acceso para la clase del 30 de julio.
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

          <div className="mt-12">
            <Link
              href="/webinar-cosecha-julio"
              className="group inline-flex items-center gap-2 rounded-full bg-citrus-500 px-6 py-3 text-sm font-medium tracking-wide text-forest-950 shadow-[0_8px_24px_-10px_rgba(141,198,63,0.7)] transition-all duration-300 hover:bg-citrus-400"
            >
              Volver al inicio
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            {/*
              Botón opcional "Agregar recordatorio": pendiente de integración de
              calendario (Google Calendar / .ics). No se implementa hasta definir
              la fuente del evento. Ejemplo para habilitar más adelante:

              <a
                href="<URL_DEL_ICS_O_GOOGLE_CALENDAR>"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-2 rounded-full border border-gold-400/40 px-6 py-3 text-sm font-medium text-cream-50 transition-colors hover:border-gold-400/70"
              >
                Agregar recordatorio
              </a>
            */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
