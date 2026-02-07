"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function VideoSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  // Scale transform: starts at small size, grows to full screen
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  // Opacity transform: starts faded in, stays opaque
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Position transform: starts slightly below logo section, moves to top
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section
      ref={videoRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Video Container with motion effects */}
      <motion.div
        className="absolute w-ful h-full flex items-center justify-center"
        style={{
          scale,
          opacity,
          y,
        }}
      >
        <video
          src="/Landing-Page-Updated-Video-1.mp4"
          className="w-full h-full object-fill"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </section>
  );
}
