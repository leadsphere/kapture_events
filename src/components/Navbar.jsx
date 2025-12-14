import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS, PHONE, SECTIONS } from "@/constant";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return isMobile;
}

function useScrollTrigger(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", check);
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);

  return scrolled;
}

function useThemeState() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default function Navbar() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const scrolled = useScrollTrigger();
  const [theme, setTheme] = useThemeState();
  const [open, setOpen] = useState(false);

  const goToSection = (hash) => {
    setOpen(false);
    if (window.location.pathname !== "/") navigate("/");
    setTimeout(() => {
      window.location.hash = hash;
    }, 150);
  };

  const handleCallClick = () => {
    window.location.href = `tel:${PHONE.PRIMARY}`;
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          boxShadow: scrolled ? "0 4px 25px rgba(0,0,0,0.25)" : "none",
        }}
        className="fixed w-full top-0 left-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-3xl font-bold"
            style={{ color: COLORS.MAGENTA }}
          >
            <img src="/combineLogo.webp" alt="Kapture Logo" className="h-10" />
          </Link>

          <div
            className="hidden md:flex gap-10 text-lg"
            style={{ color: COLORS.MAGENTA }}
          >
            <button onClick={() => goToSection(SECTIONS.SERVICES)}>Services</button>
            <button onClick={() => goToSection(SECTIONS.ABOUT)}>About</button>
            <button onClick={() => goToSection(SECTIONS.WHY_US)}>Why Us</button>
            <button onClick={() => goToSection(SECTIONS.TESTIMONIALS)}>Testimonials</button>
            <Link to="/contact">Contact</Link>
            <Link to="/feedback">Add your review</Link>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-2xl"
              style={{ color: COLORS.MAGENTA }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {isMobile && (
              <button
                onClick={handleCallClick}
                className="text-2xl"
                style={{ color: COLORS.MAGENTA }}
              >
                📞
              </button>
            )}

            <button
              className="md:hidden text-3xl"
              onClick={() => setOpen(true)}
              style={{ color: COLORS.MAGENTA }}
            >
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[60]"
            style={{
              backdropFilter: "blur(35px)",
              WebkitBackdropFilter: "blur(35px)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: "url('https://grainy-gradients.vercel.app/noise.svg')",
                mixBlendMode: "overlay",
              }}
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-5xl text-white"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-8 text-center text-black dark:text-white text-2xl font-medium">
              <button onClick={() => goToSection(SECTIONS.SERVICES)}>Services</button>
              <button onClick={() => goToSection(SECTIONS.ABOUT)}>About</button>
              <button onClick={() => goToSection(SECTIONS.WHY_US)}>Why Us</button>
              <button onClick={() => goToSection(SECTIONS.TESTIMONIALS)}>Testimonials</button>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link to="/feedback" onClick={() => setOpen(false)}>Add your review</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${PHONE.WHATSAPP}?text=Hello%20Kapture%20Events%2C%20I%20want%20to%20enquire%20about%20your%20services.`}
        target="_blank"
        className="fixed bottom-6 right-6 z-[80]"
      >
        <img
          src="/whatsappLogo.jpg"
          className="h-14 w-14 shadow-xl rounded-full p-2"
          style={{ background: COLORS.WHATSAPP }}
        />
      </a>
    </>
  );
}
