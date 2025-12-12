import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Contact from "./pages/Contact";
import BadPage from "./pages/BadPage";
import WhyChooseUs from "./sections/WhyChooseUs";
import Footer from "./components/Footer";

import { Toaster } from "@/components/ui/toaster";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToHash />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <WhyChooseUs />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<BadPage />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
}

export default App;
