import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { COLORS, TESTIMONIALS } from "@/constant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://kapturevents.com/getTestimonials.php")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(TESTIMONIALS);
        }
      })
      .catch(() => {
        setTestimonials(TESTIMONIALS);
      });
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative py-32 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl text-center mb-20 font-bold"
        style={{ color: COLORS.MAGENTA }}
      >
        What Our <span className="text-[#5A0A2C]">Clients Say</span>
      </motion.h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2300, disableOnInteraction: false }}
        speed={1200}
        loop
        className="relative z-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                max-w-[680px] mx-auto p-8 rounded-[22px]
                bg-white/75 backdrop-blur-md
                border border-[rgba(214,36,96,0.25)]
                shadow-[0_10px_25px_rgba(0,0,0,0.12)]
              "
            >
              <p className="text-[20px] text-[#4F5A60] leading-[1.6] mb-4 text-center">
                “{item.review}”
              </p>

              <h3
                className="text-center text-[22px] font-semibold"
                style={{ color: COLORS.MAGENTA }}
              >
                — {item.name}
              </h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-16 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/feedback")}
          className="px-10 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
          style={{ backgroundColor: COLORS.MAGENTA }}
        >
          Add Your Review
        </motion.button>
      </div>
    </section>
  );
}
