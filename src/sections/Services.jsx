import { motion } from "framer-motion";
import { COLORS, SERVICES } from "@/constant";

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl text-center mb-20 font-bold"
      >
        <span style={{ color: COLORS.MAGENTA }}>Our</span>{" "}
        <span className="text-[#5A0A2C]">Services</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-16 relative z-10">
        {SERVICES.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-[22px] overflow-hidden border border-[rgba(214,36,96,0.25)] bg-white/75 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:scale-[1.03] transition-transform duration-300"
          >
            <img
              src={s.image}
              alt={s.title}
              className="h-56 w-full object-cover border-b border-[rgba(214,36,96,0.25)]"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: COLORS.MAGENTA }}>
                {s.title}
              </h3>

              <p className="text-[#4F5A60] leading-[1.6] text-[16px]">
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
