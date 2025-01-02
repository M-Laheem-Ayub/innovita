import React, { useState, useEffect } from "react";
import HeroSection from "../Components/HeroForOthers";
import MileStone from "../Components/MileStone";
import Testimonial from "../Components/Testimonial";
import ContactForm from "../Components/ContactForm";

function Outdoor() {
  const [isMobile, setIsMobile] = useState(false);

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

      <div className="w-screen lg:h-80 2xl:h-96 h-[50vh] flex justify-center relative z-20 mb-20">
        <div
          className={`w-2/3 h-[100%] flex flex-col-reverse mt-12 gap-20 lg:flex-row bg-white rounded-2xl lg:p-5 ${
            !isMobile ? "absolute -top-28 2xl:-top-[10rem]" : "relative"
          }`}
        >
          <div className="h-[100%] lg:w-[50%]">
            <h2 className="2xl:text-5xl text-3xl font-bold font-oxanium text-gray-800 mb-4">
              Adjustable Louver Pergolas
            </h2>
            <ul className="list-decimal list-inside text-gray-600 2xl:text-xl">
              <li>Flexible design to adjust shading as needed</li>
              <li>High-quality, rust-resistant materials</li>
              <li>Seamless integration with your existing outdoor space</li>
              <li>Motorized options available for ease of use</li>
              <li>
                Can reduce up to 40% of heat exposure, making your outdoor area
                cooler and more comfortable during the scorching UAE summers
              </li>
            </ul>
          </div>
          {!isMobile && (
            <div
              className="lg:h-[100%] lg:w-[50%] w-[100%] h-[80%] rounded-2xl"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/premium-photo/texture-vintage-blue-door-background-classic-louver-with-horizontal-pattern_459897-3860.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          )}
        </div>
      </div>

      <div>
        <PinterestPhotoGrid />
      </div>

      <MileStone />
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default Outdoor;

const PinterestPhotoGrid = () => {
  const images = [
    "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263537.jpg?t=st=1735160143~exp=1735163743~hmac=70b4a67c965b4f39fb228e0f3861dd75c1b2bf248ee380f7cd7a617d22e0c2e0&w=740",
    "https://img.freepik.com/free-photo/view-house-lamp-with-futuristic-design_23-2151037461.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/modern-beautiful-interior-room-with-light-walls-bright-design-scandinavian-style_609637-116.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/3d-modern-lamp-design_23-2151047612.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/red-black-room-with-white-floor-black-walls_1340-25485.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/3d-modern-lamp-design_23-2151047547.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="2xl:text-5xl lg:text-left text-center text-5xl font-bold font-oxanium text-gray-800 mb-4">
        Related Projects
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`Pinterest-style item ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
