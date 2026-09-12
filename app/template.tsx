"use client";
import { motion, useReducedMotion } from 'motion/react';
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.div initial={false} animate={reduced ? { opacity: 1 } : { opacity: [0.72, 1] }} transition={{ duration: 0.35, ease: 'easeOut' }}>{children}</motion.div>;
}
