/**
 * Mockup ilustrativo del teléfono mostrando la interfaz de CresiMotion.
 * Construido con HTML/SVG para mantener nitidez y peso ligero.
 */
export default function PhoneMockup({ className = "" }: { className?: string }) {
  const moods = [
    { label: "Muy bien", emoji: "😄", tone: "bg-emerald-50" },
    { label: "Feliz", emoji: "🙂", tone: "bg-teal-50" },
    { label: "Regular", emoji: "😐", tone: "bg-amber-50" },
    { label: "Mal", emoji: "😟", tone: "bg-orange-50" },
  ];

  return (
    <div
      className={`relative mx-auto w-[270px] sm:w-[300px] ${className}`}
      aria-hidden="true"
    >
      {/* Resplandor de fondo */}
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-green/20 via-brand-green/5 to-transparent blur-2xl" />

      <div className="rounded-[2.5rem] border border-slate-200 bg-slate-900 p-2.5 shadow-2xl">
        <div className="overflow-hidden rounded-[2rem] bg-surface">
          {/* Barra superior */}
          <div className="flex items-center justify-between bg-white px-5 pb-2 pt-3 text-[10px] font-semibold text-slate-500">
            <span>10:23</span>
            <span className="h-1.5 w-16 rounded-full bg-slate-200" />
            <span>100%</span>
          </div>

          {/* Cabecera de saludo */}
          <div className="bg-gradient-to-br from-brand-green to-brand-green-dark px-5 pb-6 pt-4 text-white">
            <p className="text-[11px] font-medium opacity-90">Hola, Luis</p>
            <p className="mt-1 text-base font-bold leading-snug">
              ¿Cómo te sientes hoy?
            </p>
          </div>

          {/* Selector de estado de ánimo */}
          <div className="-mt-4 px-4">
            <div className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-100">
              <p className="mb-3 text-[11px] font-semibold text-ink">
                Elige una opción
              </p>
              <div className="grid grid-cols-4 gap-2">
                {moods.map((m) => (
                  <div key={m.label} className="text-center">
                    <div
                      className={`flex aspect-square items-center justify-center rounded-xl text-lg ${m.tone}`}
                    >
                      {m.emoji}
                    </div>
                    <p className="mt-1 text-[8px] font-medium text-slate-500">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl bg-brand-navy py-2 text-center text-[11px] font-semibold text-white">
                Hacer test
              </div>
            </div>
          </div>

          {/* Tarjetas de herramientas */}
          <div className="space-y-2 px-4 pb-5 pt-4">
            <ToolRow title="Sesión guiada" subtitle="Liberación de estrés" />
            <ToolRow title="Mi progreso" subtitle="Ver evolución" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolRow({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green/10">
        <span className="h-3 w-3 rounded-full bg-brand-green" />
      </div>
      <div className="flex-1">
        <p className="text-[11px] font-semibold text-ink">{title}</p>
        <p className="text-[9px] text-slate-400">{subtitle}</p>
      </div>
      <span className="text-slate-300">›</span>
    </div>
  );
}
