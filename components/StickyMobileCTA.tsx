"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const form = document.getElementById("registro");

    let pastHero = false;
    let formInView = false;
    const update = () => setVisible(pastHero && !formInView);

    const observers: IntersectionObserver[] = [];

    if (hero) {
      const io = new IntersectionObserver(
        ([e]) => {
          pastHero = !e.isIntersecting;
          update();
        },
        { rootMargin: "-60% 0px 0px 0px" }
      );
      io.observe(hero);
      observers.push(io);
    }

    if (form) {
      const io = new IntersectionObserver(
        ([e]) => {
          formInView = e.isIntersecting;
          update();
        },
        { threshold: 0.15 }
      );
      io.observe(form);
      observers.push(io);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-white/10 bg-forest-950/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
        <a
          href="#registro"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-citrus-500 px-6 py-3.5 text-sm font-semibold text-forest-950 shadow-[0_10px_30px_-10px_rgba(141,198,63,0.7)]"
        >
          Reservar mi lugar
          <span>→</span>
        </a>
      </div>
    </div>
  );
}
