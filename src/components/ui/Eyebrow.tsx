import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small, tracked, uppercase label that sits above section headings. */
export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe",
        dark ? "text-accent-soft" : "text-accent",
        className,
      )}
    >
      <span className={cn("h-px w-6", dark ? "bg-accent-soft/60" : "bg-accent/60")} />
      {children}
    </span>
  );
}

export default Eyebrow;
