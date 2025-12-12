import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { COLORS } from "@/constant";

export default function Footer() {
  return (
    <footer className="relative mt-32 pt-20 pb-10 text-white bg-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/combineLogo.webp"
            alt="Kapture Events Logo"
            className="h-10 inline-block"
          />

          <p
            className="mt-4 leading-[1.6]"
            style={{ color: COLORS.LIGHT_GREY_TEXT }}
          >
            Creating unforgettable experiences through premium photography,
            cinematography and complete event management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-xl mb-4 font-semibold"
            style={{ color: COLORS.MAGENTA }}
          >
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-[15px]">
            <a href="#services" style={{ color: COLORS.LIGHT_GREY_TEXT }}>
              Services
            </a>
            <a href="#about" style={{ color: COLORS.LIGHT_GREY_TEXT }}>
              About
            </a>
            <a href="#why-us" style={{ color: COLORS.LIGHT_GREY_TEXT }}>
              Why Choose Us
            </a>
            <a href="#testimonials" style={{ color: COLORS.LIGHT_GREY_TEXT }}>
              Testimonials
            </a>
            <Link to="/contact" style={{ color: COLORS.LIGHT_GREY_TEXT }}>
              Contact
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-xl mb-4 font-semibold"
            style={{ color: COLORS.MAGENTA }}
          >
            Contact
          </h3>

          <p style={{ color: COLORS.LIGHT_GREY_TEXT }}>📞 +91 9122161317</p>
          <p className="mt-1" style={{ color: COLORS.LIGHT_GREY_TEXT }}>
            📧 info@kapturevents.in
          </p>
        </motion.div>

      </div>

      <div
        className="text-center mt-12 text-sm"
        style={{ color: COLORS.DARK_GREY_TEXT }}
      >
        © {new Date().getFullYear()} Kapture Events. All Rights Reserved.
      </div>
    </footer>
  );
}
