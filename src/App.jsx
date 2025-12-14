import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Contact from "./pages/Contact";
import BadPage from "./pages/BadPage";
import Feedback from "./pages/Feedback";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import WhyChooseUs from "./sections/WhyChooseUs";
import Footer from "./components/Footer";

import { Toaster } from "@/components/ui/toaster";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
}

function Layout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin-018kx");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <ScrollToHash />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <WhyChooseUs />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route path="/admin-018kx/login" element={<AdminLogin />} />
        <Route
          path="/admin-018kx/dashboard"
          element={<AdminDashboard />}
        />

        <Route path="*" element={<BadPage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
