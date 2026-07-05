"use client"
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    const duplicatedLogos = [...logos, ...logos,...logos];
    return (
        <section
         className="custom-layout py-24 overflow-hidden"
         >
            <div>
                <h3 className="text-center text-white/50 text-xl ">
                Already chosen by these market leaders
                </h3>
            </div>
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
      className="mt-12 flex w-max flex-nowrap gap-8 overflow-hidden sm:gap-12 md:gap-16 lg:gap-24 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      {duplicatedLogos.map((logo, index: number) => (
        <Image
          key={`logo-${index}`}
          src={logo.image}
          alt={`image-${index}`}
          className="h-8 w-auto shrink-0"
        />
      ))}
    </motion.div>
        </section>
);
}
