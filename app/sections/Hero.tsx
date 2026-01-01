"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/dental-image-bg.png"
          alt="Dental Background"
          fill
          className="object-cover"
          quality={80}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl leading-tight animate-fadeIn">
          Smile Brighter With
          <span className="text-amber-300"> Professional Dental Care</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90 drop-shadow-lg leading-relaxed animate-slideUp">
          Experience premium, gentle, and affordable dental treatments from
          trusted healthcare professionals.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 animate-fadeInSlow">
          <MotionButton
            className="bg-amber-300 text-sky-900 font-semibold px-8 py-6 rounded-full "
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              color: "#f8e112",
              boxShadow: "0px 0px 8px rgb(248, 225, 18)",
              textShadow: "0px 0px 8px rgb(248, 225, 18)",
            }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            Book Appointment
          </MotionButton>

          <MotionButton
            whileHover={{}}
            className="bg-white/30 backdrop-blur-md text-white border border-white/40 px-8 py-6 rounded-full hover:bg-white/40"
          >
            Learn More
          </MotionButton>
        </div>

        <div className="flex justify-center mt-8 text-amber-300 animate-bounce">
          <Sparkles size={32} />
        </div>
      </div>
    </section>
  );
}
