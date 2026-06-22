import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-citrus-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950";

const variants = {
  primary:
    "bg-citrus-500 text-forest-950 shadow-[0_10px_30px_-12px_rgba(141,198,63,0.7)] hover:bg-citrus-400 hover:shadow-[0_16px_40px_-12px_rgba(141,198,63,0.6)]",
  outline:
    "border border-gold-400/40 bg-white/[0.03] text-cream-50 backdrop-blur hover:border-gold-400/70 hover:bg-white/[0.06]",
  ghost: "text-cream-50/80 hover:text-cream-50",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const arrow = (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
