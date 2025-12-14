import { useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/constant";

export default function Feedback() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const wordCount = review.trim() === ""
    ? 0
    : review.trim().split(/\s+/).length;

  const submit = async () => {
    if (!name || !review) {
      setError("Please fill all fields");
      return;
    }

    if (wordCount > 50) {
      setError("Review must be 50 words or less");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://kapturevents.com/sendFeedback.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, review }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setName("");
        setReview("");
      } else {
        setError("Unable to submit feedback");
      }
    } catch {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen pt-32 flex justify-center px-6">
      <div className="max-w-xl w-full">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ color: COLORS.MAGENTA }}
        >
          Share Your Experience
        </h1>

        {success && (
          <p className="text-green-600 text-center mb-6 font-medium">
            Thank you! Your review will appear after approval.
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center mb-6 font-medium">
            {error}
          </p>
        )}

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-4 p-3 rounded-xl border dark:text-black"
        />

        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Your Review (max 50 words)"
          rows={4}
          className="w-full mb-2 p-3 rounded-xl border dark:text-black"
        />

        <p className="text-sm text-right text-gray-500">
          {wordCount}/50 words
        </p>

        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={loading || wordCount > 50}
          onClick={submit}
          className="w-full mt-6 py-3 rounded-xl text-white font-semibold disabled:opacity-60"
          style={{ background: COLORS.MAGENTA }}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </motion.button>
      </div>
    </section>
  );
}
