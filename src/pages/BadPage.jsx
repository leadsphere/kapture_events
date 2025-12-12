import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { COLORS } from "@/constant";

export default function Error404() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-7xl font-extrabold"
        style={{ color: COLORS.MAGENTA }}
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl mt-4 text-gray-400 max-w-md"
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-xl text-white font-semibold bg-[#D62460] hover:bg-[#F06A8A] shadow-lg transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}
