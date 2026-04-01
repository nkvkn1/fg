import Link from "next/link";

const variants = {
  primary:
    "bg-ivory text-ink hover:bg-white focus-visible:ring-ivory/60 shadow-glow",
  secondary:
    "border border-white/20 bg-white/5 text-white hover:border-sand/60 hover:bg-white/10 focus-visible:ring-sand/40",
  dark: "bg-ink text-white hover:bg-black focus-visible:ring-white/20",
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const baseClassName = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClassName} {...props}>
      {children}
    </button>
  );
}
