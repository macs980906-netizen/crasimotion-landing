"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-forest-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="#top"
          aria-label="Cosecha Capital"
          className="relative flex items-center"
        >
          <Image
            src="/assets/logo-cosecha-white.png"
            alt="Cosecha Capital"
            width={150}
            height={150}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <a
          href="#registro"
          className="group inline-flex items-center gap-2 rounded-full bg-citrus-500 px-4 py-2.5 text-xs font-medium tracking-wide text-forest-950 shadow-[0_8px_24px_-10px_rgba(141,198,63,0.7)] transition-all duration-300 hover:bg-citrus-400 sm:px-6 sm:py-3 sm:text-sm"
        >
          Reservar mi lugar
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
