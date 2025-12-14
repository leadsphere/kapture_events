import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { COLORS } from "@/constant";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://kapturevents.com/admin/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/admin-018kx/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <motion.form
        onSubmit={login}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl"
      >
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: COLORS.MAGENTA }}
        >
          Admin Login
        </h1>

        {error && (
          <p className="mb-4 text-center text-red-600 font-medium">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg border"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg border"
        />

        <button
          disabled={loading}
          className="w-full py-3 rounded-xl text-white font-semibold text-lg transition"
          style={{
            backgroundColor: loading ? "#999" : COLORS.MAGENTA,
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </motion.form>
    </section>
  );
}
