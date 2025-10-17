"use client";
import React from "react";
import { motion, Transition } from "motion/react";

const circles: {
  animate: Record<string, any>;
  transition: Transition<any> | undefined;
  className: string;
}[] = [
  {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
    className:
      "absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl",
  },
  {
    animate: {
      y: [0, 20, 0],
      rotate: [0, -5, 0],
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
    className:
      "absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl",
  },
];

function FloatingCircles() {
  return (
    <>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={circle.animate}
          transition={circle.transition}
          className={circle.className}
        />
      ))}
    </>
  );
}

export default FloatingCircles;
