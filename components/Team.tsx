import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";

const people = [
  { name: "Yermi Sutton", role: "CEO · Cosecha Capital" },
  { name: "Rodrigo Castilla", role: "Vicepresidente · Citrus Patrimonial" },
  { name: "Marcus Dantus", role: "Emprendedor · Respalda el modelo" },
];

export default function Team() {
  return (
    <section id="ponentes" className="relative bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal className="flex justify-center">
            <SectionLabel>Quiénes te acompañan</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-cream-50 text-balance sm:text-4xl">
              ¿Y quién te lo va a presentar?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/75">
              Una sesión con las personas que conocen el modelo por dentro —y con
              el respaldo de una figura que confía en él.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* Foto grupal + identificación izq→der */}
          <Reveal>
            <figure className="h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-forest-900/40">
              <div className="relative">
                <Image
                  src="/assets/ponentes-grupo.webp"
                  alt="De izquierda a derecha: Yermi Sutton, Rodrigo Castilla y Marcus Dantus"
                  width={1024}
                  height={1280}
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="aspect-[4/3] w-full object-cover object-top sm:aspect-[16/11]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              </div>
              <figcaption className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-3">
                {people.map((p) => (
                  <div key={p.name} className="text-center sm:text-left">
                    <p className="font-display text-sm font-extrabold uppercase tracking-tight text-cream-50">
                      {p.name}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-citrus-400">
                      {p.role}
                    </p>
                  </div>
                ))}
                <p className="mt-1 text-[11px] leading-snug text-cream-100/40 sm:col-span-3">
                  De izquierda a derecha en la fotografía.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Marcus Dantus — respaldo destacado */}
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col justify-center rounded-[1.75rem] border border-citrus-500/30 bg-gradient-to-b from-forest-800/60 to-forest-900/40 p-8 sm:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-citrus-500/40 bg-forest-800/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-citrus-400">
                El respaldo
              </span>
              <h3 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-cream-50 sm:text-4xl">
                Marcus Dantus
              </h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-citrus-400">
                Emprendedor y figura del ecosistema de negocios en México
              </p>
              <div className="mt-5 h-px w-16 gold-rule" />
              <p className="mt-5 text-base leading-relaxed text-cream-100/80">
                Marcus conoce de cerca el modelo y confía en él. En la sesión lo
                explicará de forma directa, en conversación con{" "}
                <span className="text-cream-50">Rodrigo Castilla</span>,
                vicepresidente de Citrus Patrimonial: qué hay detrás de la
                operación, cómo funciona y qué deberías evaluar.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream-100/60">
                Con la participación de <span className="text-cream-50">Yermi Sutton</span>,
                CEO de Cosecha Capital, en la apertura y el cierre.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
