import Lenis from "lenis";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import "./App.css";
import Whatsapp from "./assets/Whatsapp.png";
import Preloader from "./Components/preloader";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutUs"; // Example route
import ServicePage from "./Pages/ServicePage";
import Projects from "./Pages/Projects";
import ServiceDetail from "./Pages/ServiceDetai";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isShaking, setIsShaking] = useState(false);

  const lenis = new Lenis(); // Initialize Lenis instance

  // Use requestAnimationFrame to continuously update the scroll
  useEffect(() => {
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf); // Continuously call RAF
    };

    requestAnimationFrame(raf); // Start the RAF loop

    return () => {
      // Clean up any ongoing animations when the component is unmounted
      lenis.destroy();
    };
  }, [lenis]);

  // Inline styles for shake animation
  const shakeAnimation = {
    animation: "shake 0.5s ease-in-out",
  };

  const buttonStyles = {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    textAlign: "center",
    fontSize: "0.5rem",
    color: "black",
    padding: "0.5rem 1rem",
    zIndex: 10,
    transition: "all 0.3s ease-in-out",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="m-[-2rem] relative">
        {/* Preloader */}
        {showPreloader ? (
          <div className="m-[-2rem] overflow-x-hidden relative">
            <Preloader />
          </div>
        ) : (
          <>
            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Services" element={<ServicePage />} />
              <Route path="/service-detail" element={<ServiceDetail />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </>
        )}

        {/* Bottom-right WhatsApp button */}
        <button
          style={{
            ...buttonStyles,
            ...(isShaking ? shakeAnimation : {}),
          }}
          onClick={() => window.open("https://wa.me/+971567907012", "_blank")}
        >
          <img
            src={Whatsapp}
            alt="WhatsApp Icon"
            loading="lazy"
            className="w-10 h-10 2xl:w-14 2xl:h-14 hover:scale-125"
          />
        </button>

        {/* Inline styles for shake animation */}
        <style>{`
          @keyframes shake {
            0% { transform: translateX(0); }
            12.5% { transform: translateX(-5px); }
            25% { transform: translateX(5px); }
            35.5% { transform: translateX(-5px); }
            50% { transform: translateX(0); }
            65.5% { transform: translateY(-5px); }
            75% { transform: translateY(5px); }
            85.5% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
