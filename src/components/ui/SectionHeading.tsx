import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-display text-balance uppercase tracking-caps",
          "text-2xl leading-[1.15] sm:text-3xl lg:text-[2.5rem]",
          dark ? "text-ink-text" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "max-w-xl text-pretty text-base leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-ink-muted" : "text-muted",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
