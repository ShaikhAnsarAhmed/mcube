"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React from "react";

export function GradualSpacing({ title }) {
  const text = title;
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="flex space-x-1 justify-start">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            // initial="hidden"
            // animate="visible"
            ref={ref}
            animate={isInView ? "show" : "hidden"}
            viewport={{ once: true }}
            exit="hidden"
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="font-medium text-left text-3xl sm:text-5xl text-white pb-7"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
