import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Altura del logo en píxeles (el ancho se ajusta proporcionalmente). */
  height?: number;
  priority?: boolean;
};

/**
 * Logotipo oficial de CresiMotion.
 * Usa exclusivamente el archivo original con fondo transparente.
 */
export default function Logo({
  className = "",
  height = 44,
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/images/logo-crasimotion.png"
      alt="CresiMotion"
      width={height}
      height={height}
      priority={priority}
      sizes={`${height}px`}
      className={`h-auto w-auto select-none ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}
