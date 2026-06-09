import Image from "next/image";
import { Eye, Search, UserRound } from "lucide-react";
import { values } from "@/content/content";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const ICONS = [UserRound, Eye, Search];

export function CoreValues() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-9">
        {values.map((v, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={v.title} delay={i * 0.1} className="flex gap-5">
              <span
                className={cn(
                  "grid h-12 w-12 shrink-0 place-items-center rounded-[3px] text-ink-text",
                  i === 1 ? "bg-accent" : "bg-ink",
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="pt-0.5">
                <h3 className="font-serif text-2xl italic leading-none text-accent">
                  {v.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="relative aspect-[5/4] overflow-hidden rounded-[3px]">
          <Image
            src="/brand/advisory.jpg"
            alt="Suri Real Estate advising clients within a residence"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </div>
  );
}

export default CoreValues;
