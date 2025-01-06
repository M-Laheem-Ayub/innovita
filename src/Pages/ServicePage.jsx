import React, { useState, useEffect } from "react";
import HeroSection from "../Components/HeroForOthers";
import MileStone from "../Components/MileStone";
import Testimonial from "../Components/Testimonial";
import ContactForm from "../Components/ContactForm";
import ServiceSection from "../Components/Services";
import Feature from "../Components/Feature";

function Outdoor() {
  const [isMobile, setIsMobile] = useState(false);
  const [obj, setObj] = useState({
    img: "https://img.freepik.com/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199287.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    title: "Our Services",
    description:
      "Explore our elegant outdoor spaces designed for relaxation and entertainment. Stylish, permanent shading solution with durable aluminum louvers Offers 40% heat reduction and requires minimal maintenance.",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Detect if screen width is <= 640px
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <div>
      <div className="z-0">
        <HeroSection />
      </div>

      <ServiceSection />

      <Feature />
      <MileStone />
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default Outdoor;
