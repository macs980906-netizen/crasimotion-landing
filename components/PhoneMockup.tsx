import Image from "next/image";

/**
 * Dispositivo móvil del Hero con la captura REAL de CresiMotion en pantalla.
 * El marco, la isla dinámica y las sombras dan una presentación premium y
 * hacen que la captura se sienta parte natural del teléfono.
 */
export default function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-[260px] sm:w-[290px] ${className}`}
      aria-hidden="false"
    >
      {/* Resplandor de marca detrás del dispositivo */}
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-green/25 via-brand-green/5 to-transparent blur-2xl" />

      {/* Cuerpo del dispositivo */}
      <div className="rounded-[2.6rem] bg-slate-900 p-2.5 shadow-[0_30px_60px_-15px_rgba(13,46,92,0.45)] ring-1 ring-slate-800/60">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
          {/* Barra de estado del teléfono + isla dinámica */}
          <div className="relative z-10 flex items-center justify-between bg-white px-5 pb-1.5 pt-2.5 text-[10px] font-semibold text-slate-700">
            <span>9:41</span>
            <span className="absolute left-1/2 top-1.5 h-4 w-16 -translate-x-1/2 rounded-full bg-slate-900" />
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-3 rounded-[2px] bg-slate-400" />
              <span className="inline-block h-2 w-1.5 rounded-[1px] bg-slate-700" />
            </span>
          </div>

          {/* Captura real de la aplicación */}
          <Image
            src="/images/app-screenshot.webp"
            alt="Pantalla de la aplicación CresiMotion mostrando el saludo y la autoevaluación emocional"
            width={660}
            height={1333}
            sizes="(max-width: 640px) 260px, 290px"
            priority
            className="block h-auto w-full"
          />

          {/* Reflejo sutil sobre el cristal */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.1rem] bg-gradient-to-tr from-transparent via-white/0 to-white/10" />
        </div>
      </div>
    </div>
  );
}
