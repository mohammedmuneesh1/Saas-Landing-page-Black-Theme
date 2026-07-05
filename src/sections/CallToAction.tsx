"use client";

import { motion, useAnimate, type AnimationPlaybackControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);

  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      {
        x: "-50%",
      },
      {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    );
  }, [animate, scope]);

  useEffect(() => {
    if (!animation.current) return;
    animation.current.speed = isHovered ? 0.35 : 1;
  }, [isHovered]);

  const items = Array.from({ length: 10 });

  return (
    <section className="py-24">
      <div className="overflow-hidden">
        <motion.div
          ref={scope}
          className="flex w-max flex-none gap-16 pr-16 cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {[...items, ...items].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-12 whitespace-nowrap group"
            >
              <span className="text-7xl text-lime-400">&#10038;</span>

              <span className="text-7xl md:text-8xl 2xl:text-9xl font-medium transition-colors duration-300 group-hover:text-lime-400">
                Try it for free
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}