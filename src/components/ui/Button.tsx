import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "link" | "glass";

const base =
  "group inline-flex items-center justify-center gap-2 text-[13px] tracking-wide transition-all duration-500 ease-luxe";

const variants: Record<Variant, { light: string; dark: string }> = {
  solid: {
    light: "rounded-full bg-ink px-7 py-3.5 text-canvas hover:bg-accent",
    dark: "rounded-full bg-canvas px-7 py-3.5 text-ink hover:bg-accent hover:text-canvas",
  },
  outline: {
    light: "rounded-full border border-line px-7 py-3.5 text-ink hover:border-ink",
    dark: "rounded-full border border-ink-line px-7 py-3.5 text-ink-text hover:border-ink-text",
  },
  link: {
    light: "text-ink hover:text-accent",
    dark: "text-ink-text hover:text-accent-soft",
  },
  glass: {
    light: "glass rounded-full px-7 py-3.5 text-ink hover:bg-white/70",
    dark: "glass-dark rounded-full px-7 py-3.5 text-white hover:bg-white/20",
  },
};

export function Button({
  href,
  children,
  variant = "solid",
  onDark = false,
  arrow = false,
  className,
  refractImage,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  onDark?: boolean;
  arrow?: boolean;
  className?: string;
  /**
   * When set, renders a refracted copy of this image behind the glass (for a
   * glass button sitting over a known, static background). Works in Safari.
   */
  refractImage?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant][onDark ? "dark" : "light"], className)}
    >
      {refractImage ? (
        <span
          aria-hidden
          className="glass-refract-layer"
          style={{ backgroundImage: `url(${refractImage})` }}
        />
      ) : null}
      {children}
      {arrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}

export default Button;
