import React from "react";
import HeroSection from "../Components/Hero";
import ContactForm from "../Components/ContactForm";
import { useState, useEffect } from "react";

function Projects() {
  return (
    <div>
      <HeroSection />
      <PinterestPhotoGrid />
      <ContactForm />
    </div>
  );
}

export default Projects;

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

  const imageSpans = [
    "row-span-2",
    "col-span-2",
    "",
    "row-span-2",
    "",
    "row-span-2",
  ]; // Define spans for each image

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Check if the screen width is less than or equal to 640px
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div className="p-6 mt-12 lg:p-16 lg:mt-0 ">
      <h2 className="2xl:text-5xl lg:text-left text-center text-5xl font-bold font-oxanium text-gray-800 mb-4">
        Related Projects
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image, index) => {
          // Conditionally render images based on mobile size
          if (isMobile && index === 0) {
            return null; // Don't render the first image on mobile
          }

          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg ${
                imageSpans[index] || ""
              }`}
            >
              <img
                src={image}
                alt={`Pinterest-style item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
