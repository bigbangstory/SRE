"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const solid = scrolled || open;
  // Home has a full-bleed dark hero; sit light over it until the user scrolls.
  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
        solid
          ? "border-b border-line bg-canvas/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <Image
            src="/brand/mark.png"
            alt=""
            width={350}
            height={150}
            priority
            className={cn(
              "h-7 w-auto transition",
              overHero && "brightness-0 invert",
            )}
          />
          <span
            className={cn(
              "font-display text-[15px] tracking-caps transition-colors duration-300",
              overHero ? "text-white" : "text-ink",
            )}
          >
            SURI REAL ESTATE
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {site.nav
            .filter((l) => l.href !== "/")
            .map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "group relative text-[13px] tracking-wide transition-colors duration-300",
                    overHero
                      ? "text-white/85 hover:text-white"
                      : isActive(l.href)
                        ? "text-ink"
                        : "text-ink-soft hover:text-ink",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-500 ease-luxe",
                      isActive(l.href) ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              </li>
            ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center transition-colors md:hidden",
            overHero ? "text-white" : "text-ink",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-canvas/80 backdrop-blur-xl backdrop-saturate-150 md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {site.nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block border-b border-line/60 py-4 font-serif text-2xl",
                      isActive(l.href) ? "text-accent" : "text-ink",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
