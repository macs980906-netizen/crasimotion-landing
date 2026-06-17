"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="CresiMotion — Inicio"
          className="flex items-center"
        >
          <Logo height={44} priority />
        </Link>

        <nav aria-label="Principal">
          <Link
            href="/aviso-privacidad"
            onClick={() => trackEvent("click_aviso_privacidad", { location: "header" })}
            className="rounded-full px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-cta"
          >
            Aviso de Privacidad
          </Link>
        </nav>
      </div>
    </header>
  );
}
