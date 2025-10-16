"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

function BackgroundTexture({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={cn("", className)}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        opacity: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
    >
      <Image
        src={"/texture.svg"}
        alt="texture"
        fill
        className="object-cover "
      />
    </motion.div>
  );
}

export default BackgroundTexture;
