import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/** Lightweight hero for interior pages (clears the fixed navbar). */
export function PageHero({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="border-b border-line">
      <Container className="pb-14 pt-32 sm:pb-16 sm:pt-40">
        <div
          className={cn(
            "flex flex-col gap-6",
            align === "center" && "items-center text-center",
          )}
        >
          {eyebrow ? (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h1 className="max-w-4xl font-serif text-balance text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
          {intro ? (
            <Reveal delay={0.1}>
              <p
                className={cn(
                  "max-w-2xl text-pretty text-lg leading-relaxed text-muted",
                  align === "center" && "mx-auto",
                )}
              >
                {intro}
              </p>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
