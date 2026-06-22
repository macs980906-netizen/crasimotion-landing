import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-forest-950 py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex items-center gap-8">
            <Image
              src="/assets/logo-cosecha-white.png"
              alt="Cosecha Capital"
              width={160}
              height={160}
              className="h-11 w-auto"
            />
            <span aria-hidden className="h-10 w-px bg-white/10" />
            <Image
              src="/assets/logo-premium-reseller.webp"
              alt="Premium Reseller Partner · Fideicomiso Citrus"
              width={120}
              height={120}
              className="h-14 w-auto"
            />
          </div>

          <nav className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
            <a
              href="https://www.cosechacapital.com/aviso-de-privacidad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream-100/70 transition-colors hover:text-citrus-400"
            >
              Aviso de privacidad
            </a>
            <a
              href="#registro"
              className="text-sm text-cream-100/70 transition-colors hover:text-citrus-400"
            >
              Reservar mi lugar
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-8 text-center">
          <p className="text-xs leading-relaxed text-cream-100/40">
            © {new Date().getFullYear()} Cosecha Capital. Inversión respaldada
            por activos agrícolas productivos. La información presentada tiene
            fines informativos y no constituye una recomendación de inversión.
          </p>
        </div>
      </div>
    </footer>
  );
}
