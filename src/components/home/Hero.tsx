"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { about } from "@/content/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section
      ref={ref}
      className="relative grid min-h-[100svh] grid-cols-1 lg:grid-cols-[1.05fr_1fr]"
    >
      {/* Text column */}
      <div className="relative z-10 flex items-center px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-24 xl:px-16">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-xl"
        >
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-[11px] uppercase tracking-luxe text-accent"
          >
            <span className="h-px w-8 bg-accent/60" />
            Private Real Estate · New Delhi
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-serif text-balance text-5xl leading-[1.04] text-ink sm:text-6xl lg:text-7xl"
          >
            Where premium meets{" "}
            <span className="italic text-accent">personal.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-pretty text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {about.body}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button href="/properties" arrow>
              View portfolio
            </Button>
            <Button href="/contact" variant="outline">
              Partner with us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image column */}
      <div className="relative min-h-[58vh] overflow-hidden lg:min-h-full">
        <motion.div
          style={reduce ? undefined : { y }}
          className="absolute inset-0 scale-[1.08]"
        >
          <Image
            src="/brand/hero-terrace.jpg"
            alt="A premium rooftop terrace residence represented by Suri Real Estate"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        {/* subtle edge blend into the text column on large screens */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-canvas to-transparent lg:block" />
      </div>
    </section>
  );
}
