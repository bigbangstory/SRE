"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger helper - seconds to delay before animating in. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  /** Animation duration in seconds. */
  duration?: number;
};

/**
 * Subtle on-scroll reveal: fades + rises into place once, with the site's
 * signature easing. For visitors who prefer reduced motion it resolves
 * immediately to its visible state (no swap of element type, so no stale
 * inline styles are left behind).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.9,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={reduce ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
