"use client";

import { useState } from "react";

type Props = {
  id: string;
  title: string;
};

export default function YouTubeLite({ id, title }: Props) {
  const [active, setActive] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-forest-900">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Reproducir: ${title}`}
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/20 to-forest-950/30 transition-colors duration-300 group-hover:from-forest-950/60" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-citrus-500 text-forest-950 shadow-[0_12px_40px_-8px_rgba(141,198,63,0.6)] transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
