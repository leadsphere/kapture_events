import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { COLORS } from "@/constant";

export default function Hero() {
  const fullText = "Crafting Unforgettable Memories";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  const words = displayed.split(" ");
  const firstWord = words[0] || "";
  const restWords = words.slice(1).join(" ");

  return (
    <section className="relative h-screen flex items-center overflow-hidden px-10 md:px-20 bg-black">
      <video
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.55), rgba(0,0,0,0))",
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              <span>{firstWord}</span>{" "}
              <span style={{ color: COLORS.MAGENTA }}>{restWords}</span>
              <span style={{ color: COLORS.MAGENTA }} className="animate-pulse">
                |
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-xl text-white/90">
              Premium event management, photography & cinematic filmmaking —
              designed to create unforgettable experiences.
            </p>
          </div>

          <div className="md:self-center">
            <a
              href="/contact"
              className="inline-block px-12 py-4 text-lg font-semibold rounded-xl text-white shadow-[0_10px_25px_rgba(214,36,96,0.4)] transition-all duration-300"
              style={{ backgroundColor: COLORS.MAGENTA }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
