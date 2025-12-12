import { motion } from "framer-motion";
import { COLORS, WHY_POINTS } from "@/constant";

const popVariant = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 80,
    filter: "blur(8px)",
    transform: "perspective(800px) translateZ(-120px)",
  },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transform: "perspective(800px) translateZ(0px)",
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-32 px-6 max-w-7xl mx-auto">
      <div
        className="absolute inset-0 opacity-20 blur-3xl"
        style={{ background: `${COLORS.MAGENTA}20` }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20 font-bold text-5xl"
        style={{ color: COLORS.MAGENTA }}
      >
        Why <span style={{ color: COLORS.PLUM }}>Choose Us?</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 relative z-10">
        {WHY_POINTS.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={popVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
            whileHover={{
              y: -10,
              scale: 1.05,
              boxShadow: "0 20px 35px rgba(214,36,96,0.25)",
            }}
            className="rounded-3xl p-8 shadow-xl backdrop-blur-xl relative overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.78)",
              border: `1px solid ${COLORS.MAGENTA}25`,
            }}
          >
            <div
              className="absolute top-6 left-6 blur-2xl opacity-40"
              style={{
                background: COLORS.ROSE,
                width: "75px",
                height: "75px",
                borderRadius: "50%",
              }}
            />

            <div
              className="text-5xl mb-6 relative"
              style={{
                color: COLORS.MAGENTA,
                filter: "drop-shadow(0 6px 12px rgba(214,36,96,0.4))",
              }}
            >
              {p.icon}
            </div>

            <p
              className="text-[18px] leading-[1.6] font-medium"
              style={{ color: COLORS.DARK_GREY }}
            >
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
