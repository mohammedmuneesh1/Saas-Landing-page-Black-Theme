"use client"

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * FullFocal Portrait Lens Kit — hero section
 *
 * Scroll behavior:
 * - The section is taller than the viewport and the visual stage is `sticky`.
 * - As the user scrolls through that extra height, scroll progress (0→1)
 *   drives a horizontal translateX on the image track, panning from the
 *   left ghost frame to the right ghost frame, with the main framed photo
 *   staying centered (parallax: side frames move faster than the main one).
 * - Once progress hits 1, the sticky stage releases and normal vertical
 *   scrolling continues to whatever comes after this section.
 */

const LEFT_IMG =
  "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop";
const RIGHT_IMG =
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop";
const MAIN_IMG =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop";

function ApertureDial() {
  // Small decorative dial echoing the focal-length ring in the screenshot
  const ticks = ["0.6", "1×", "2", "3.5", "7", "10"];
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-5 text-white/90 select-none pointer-events-none">
      {ticks.map((t, i) => (
        <div key={t} className="flex flex-col items-center gap-1">
          <span
            className={
              "block w-px h-5 origin-bottom " +
              (t === "1×" ? "bg-amber-400 h-7" : "bg-white/60")
            }
            style={{ transform: `rotate(${(i - 2.5) * 9}deg)` }}
          />
          <span
            className={
              "text-[11px] font-medium tracking-wide " +
              (t === "1×" ? "text-amber-400" : "text-white/80")
            }
            style={{ transform: `rotate(${(i - 2.5) * 9}deg)` }}
          >
            {t}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function HorizontalScrolling() {
  const trackRef = useRef(null);

  // scrollYProgress tracks how far we've scrolled through the (tall) trackRef
  // element, while the inner stage stays pinned via `sticky`.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // Side ghost frames sweep further than the center photo for a parallax pan.
  const leftX = useTransform(smooth, [0, 1], ["0%", "-60%"]);
  const rightX = useTransform(smooth, [0, 1], ["0%", "60%"]);
  const leftOpacity = useTransform(smooth, [0, 0.7, 1], [1, 0.4, 0]);
  const rightOpacity = useTransform(smooth, [0, 0.7, 1], [1, 0.4, 0]);

  const mainScale = useTransform(smooth, [0, 1], [1, 1.06]);
  const mainX = useTransform(smooth, [0, 1], ["0%", "-4%"]);

  const headingOpacity = useTransform(smooth, [0, 0.25], [1, 0.15]);
  const headingY = useTransform(smooth, [0, 0.25], [0, -24]);

  return (
    <section className="bg-white">
      {/* Tall scroll track: 220vh gives room for the horizontal pan before release */}
      <div ref={trackRef} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          {/* Copy */}
          <motion.div
            style={{ opacity: headingOpacity, y: headingY }}
            className="pt-20 md:pt-28 px-6 md:px-16 lg:px-24"
          >
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
              FullFocal Portrait Lens Kit
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-medium text-neutral-800">
              Vibe Portraits, For Every Distance.
            </p>
            <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-500 leading-relaxed">
              Our Portrait Lens Kit and ProDepth Bokeh Algorithm create
              strand-level bokeh for shots where you and the scene are both
              flawless.
            </p>
          </motion.div>

          {/* Visual stage */}
          <div className="relative flex-1 flex items-center justify-center mt-6 md:mt-10">
            <div className="relative w-full max-w-6xl h-[55vh] md:h-[60vh] mx-auto px-6">
              {/* Left ghost frame */}
              <motion.div
                style={{ x: leftX, opacity: leftOpacity }}
                className="absolute left-[2%] md:left-[8%] top-1/2 -translate-y-1/2 w-[26%] h-[78%] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={LEFT_IMG}
                  alt=""
                  className="w-full h-full object-cover grayscale-[10%] opacity-70"
                />
                <div className="absolute inset-0 bg-white/40" />
              </motion.div>

              {/* Right ghost frame */}
              <motion.div
                style={{ x: rightX, opacity: rightOpacity }}
                className="absolute right-[2%] md:right-[8%] top-1/2 -translate-y-1/2 w-[26%] h-[78%] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={RIGHT_IMG}
                  alt=""
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-white/30" />
              </motion.div>

              {/* Main framed photo */}
              <motion.div
                style={{ x: mainX, scale: mainScale }}
                className="relative mx-auto h-full w-[64%] md:w-[46%] rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/5"
              >
                <img
                  src={MAIN_IMG}
                  alt="Portrait with creamy background bokeh"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <ApertureDial />
              </motion.div>
            </div>
          </div>

          {/* Scroll-up affordance, like the screenshot */}
          <div className="absolute bottom-6 right-6 md:right-10">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-700">
              ↑
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}