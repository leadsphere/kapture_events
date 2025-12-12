import { motion } from "framer-motion";
import { COLORS } from "@/constant";

export default function About() {
  return (
    <section id="about" className="relative py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 w-full md:w-1/2"
        >
          <h2 className="text-5xl font-bold">
            <span style={{ color: COLORS.MAGENTA }}>About</span>{" "}
            <span className="text-[#5A0A2C]">Kapture Events</span>
          </h2>

          <p className="text-[#4F5A60] leading-[1.7] text-[18px]">
            Kapture Events is a full-service photography, videography and event
            management company delivering unforgettable experiences for weddings,
            celebrations & corporate functions.
          </p>

          <p className="text-[#4F5A60] leading-[1.7] text-[18px]">
            From cinematic films, drone shoots, candid photography to complete
            wedding & event planning — we are your one-stop solution for capturing
            and curating moments that truly matter.
          </p>

          <a
            href="#services"
            className="
              inline-block px-8 py-4 font-semibold text-white rounded-xl 
              bg-gradient-to-br from-[#D62460] to-[#F06A8A]
              shadow-[0_10px_25px_rgba(214,36,96,0.35)]
              transition-all duration-300
              hover:from-[#B81E50] hover:to-[#E0557A]
            "
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <video
            src="/aboutUs.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl shadow-xl border-[4px] border-[rgba(214,36,96,0.2)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
