import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  duration?: number;
}

export const Reveal = ({ children, width = "100%", delay = 0, className = "", duration = 1.0 }: RevealProps) => {
  return (
    <div style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // "Editorial" cubic-bezier
      >
        {children}
      </motion.div>
    </div>
  );
};