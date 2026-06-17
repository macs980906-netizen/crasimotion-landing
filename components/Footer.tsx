import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-navy text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-sm">
              <Logo height={56} />
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              CresiMotion — Transformando emociones, construyendo bienestar.
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Enlaces
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/aviso-privacidad"
                  className="text-slate-400 transition-colors hover:text-brand-green"
                >
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-slate-400 transition-colors hover:text-brand-green"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {year} CresiMotion. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
