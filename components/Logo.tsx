type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

/**
 * Logotipo de CresiMotion: flor de loto + tipografía "CRESI MOTION".
 * Reconstruido en SVG para nitidez en cualquier resolución.
 */
export default function Logo({ className = "", variant = "default" }: LogoProps) {
  const cresiColor = variant === "light" ? "#FFFFFF" : "#0D2E5C";
  const motionColor = "#14B88F";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 56"
        className="h-9 w-auto shrink-0"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <g
          fill="none"
          stroke="#14B88F"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {/* Pétalo central */}
          <path d="M32 6c4 7 4 18 0 28-4-10-4-21 0-28Z" />
          {/* Pétalos internos */}
          <path d="M32 34c-5-6-12-9-19-8 2 6 8 11 19 12Z" />
          <path d="M32 34c5-6 12-9 19-8-2 6-8 11-19 12Z" />
          {/* Pétalos externos */}
          <path d="M13 26c-4 4-6 9-6 14 6-1 11-5 14-12Z" />
          <path d="M51 26c4 4 6 9 6 14-6-1-11-5-14-12Z" />
          {/* Base / agua */}
          <path d="M6 44c8 5 16 6 26 6s18-1 26-6" />
        </g>
      </svg>
      <span className="text-xl font-extrabold leading-none tracking-tight">
        <span style={{ color: cresiColor }}>CRESI</span>
        <span style={{ color: motionColor }}>MOTION</span>
      </span>
    </span>
  );
}
