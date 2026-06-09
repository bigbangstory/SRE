import { cn } from "@/lib/utils";

/*
  Elegant stand-in for imagery until the real illustration / property photos
  are dropped in. Replace usages with next/image pointing at files in
  /public/brand once the client's images are available.
*/
export function ImagePlaceholder({
  className,
  label = "Image",
  tone = "light",
}: {
  className?: string;
  label?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[3px]",
        tone === "light"
          ? "bg-gradient-to-br from-[#efe9e0] via-[#e9e0d4] to-[#ddd0bd] ring-1 ring-line"
          : "bg-gradient-to-br from-[#221d18] via-[#1a1611] to-[#0f0c09] ring-1 ring-ink-line",
        className,
      )}
    >
      {/* faint diagonal sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)]" />
      <div className="absolute inset-0 grid place-items-center">
        <span
          className={cn(
            "text-[10px] uppercase tracking-luxe",
            tone === "light" ? "text-muted/70" : "text-ink-muted/70",
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export default ImagePlaceholder;
