export function SectionIntro({ eyebrow, title, copy, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sand">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-white/68 sm:text-lg">{copy}</p>
    </div>
  );
}
