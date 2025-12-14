import { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const MAGENTA = "#D62460";

  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [services, setServices] = useState([]);
  const [openServices, setOpenServices] = useState(false);
  const dropdownRef = useRef(null);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    "Event Management",
    "Photography",
    "Cinematography",
    "Drone Shoots",
    "Makeup & Portfolio Shoots",
    "Birthday & Anniversary Events",
    "Corporate Events",
    "Destination Weddings",
    "Album Designing",
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleService = (srv) => {
    setServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenServices(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || services.length === 0) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const payload = {
      ...form,
      services: services.join(", "),
    };

    try {
      const res = await fetch("https://kapturevents.com/sendMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: "🎉 Message Sent!",
          description: "Our team will contact you shortly.",
        });

        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setServices([]);
      } else {
        toast({
          title: "❌ Error",
          description: "Unable to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "❌ Network Error",
        description: "Something went wrong. Try again later.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen pt-36 px-6 flex justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,36,96,0.12),transparent_70%)]" />

      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl text-center mt-20"
        >
          <Card className="bg-white/85 dark:bg-black/50 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold" style={{ color: MAGENTA }}>
              🎉 Thank You!
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Your message has been successfully submitted.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                to="/"
                className="px-8 py-3 bg-[#D62460] text-white rounded-xl text-lg shadow-lg hover:bg-[#F06A8A] transition"
              >
                Go Back Home
              </Link>

              <button
                onClick={() => setSuccess(false)}
                className="text-[#D62460] dark:text-gray-300 underline"
              >
                Send Another Message
              </button>
            </div>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-3xl"
        >
          <Card className="bg-white/85 dark:bg-black/50 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl">
            <CardHeader>
              <CardTitle
                className="text-4xl font-bold"
                style={{ color: MAGENTA }}
              >
                Let's Connect
              </CardTitle>
              <p className="text-gray-700 dark:text-gray-300">
                Share your details — we’ll respond shortly.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={sendEmail} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  className="dark:text-black"
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  className="dark:text-black"
                />

                <Input
                  name="phone"
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={handleChange}
                  className="dark:text-black"
                />

                <Input
                  name="company"
                  placeholder="Company (Optional)"
                  value={form.company}
                  onChange={handleChange}
                  className="dark:text-black"
                />

                {/* SERVICES DROPDOWN */}
                <div className="relative" ref={dropdownRef}>
                  <div
                    onClick={() => setOpenServices(!openServices)}
                    className="
                      w-full p-3 rounded-lg cursor-pointer
                      bg-white/70
                      text-black
                      border border-gray-300 dark:border-gray-600
                    "
                  >
                    {services.length > 0
                      ? services.join(", ")
                      : "Select Services *"}
                  </div>

                  {openServices && (
                    <div
                      className="
                        absolute mt-2 w-full rounded-xl shadow-xl z-20
                        bg-white dark:bg-[#0f0f0f]
                        border border-pink-500
                        p-3 max-h-48 overflow-y-auto
                      "
                    >
                      {serviceOptions.map((srv) => (
                        <div
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`
                            p-2 rounded-lg cursor-pointer transition
                            ${
                              services.includes(srv)
                                ? "bg-[#D62460] text-white"
                                : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                            }
                          `}
                        >
                          {services.includes(srv) ? "✔ " : ""}
                          {srv}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  className="dark:text-black"
                />

                <motion.button
                  whileHover={!loading && { scale: 1.03 }}
                  whileTap={!loading && { scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-xl text-white font-semibold text-lg shadow-lg transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#D62460]"
                  }`}
                >
                  {loading ? "Submitting..." : "Send Message"}
                </motion.button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </section>
  );
}
