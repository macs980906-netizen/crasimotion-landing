type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "dark" | "light";
};

export default function SectionLabel({
  children,
  tone = "dark",
}: SectionLabelProps) {
  const styles =
    tone === "dark"
      ? "border-citrus-500/30 bg-forest-800/60 text-citrus-400"
      : "border-forest-700/15 bg-white text-forest-700";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] backdrop-blur ${styles}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-citrus-500" />
      {children}
    </span>
  );
}
