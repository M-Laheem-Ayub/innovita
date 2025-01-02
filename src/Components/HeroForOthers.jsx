import React, { useEffect, useState } from "react";
import Header from "./Header";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";
import Hero4 from "../assets/hero6.jpg";
import Hero5 from "../assets/hero5.jpg";
const HeroSection = () => {
  const images = [
    Hero1, // Image 5
    Hero2, // Image 5
    Hero3, // Image 5
    Hero4,
    Hero5,
  ];
  const texts = [
    {
      title: "Adjustable Louvered Pergolas",
      description:
        "Flexible shading with adjustable, rust-resistant louvers. Includes motorized options and reduces heat by up to 40%.",
    },
    {
      title: "Fixed Louver Pergolas",
      description:
        " Stylish, permanent shading solution with durable aluminum louvers. Offers 40% heat reduction and requires minimal maintenance.",
    },
    {
      title: "Motorized Screens and Blinds",
      description:
        "Remote-controlled screens for privacy and weather protection. Customizable, durable design reduces heat by 35%.",
    },
    {
      title: "Aluminum Pergolas and Canopies",
      description:
        "Illuminate your space with thoughtfully designed lighting that enhances both the functionality and ambiance of each room.",
    },
    {
      title: "Outdoor Shading Solutions",
      description:
        "Motorized roofs for instant sun protection or open sky. Durable, modern design reduces heat by 40% and suits any outdoor space.",
    },
    {
      title: "Car Parking Sheds",
      description:
        "Weather-resistant sheds with customizable sizes for vehicle protection. Reduces heat by 30% and ensures a cooler car interior.",
    },
    {
      title: "Custom Designs for Commercial and Residential Spaces",
      description:
        "Maximize your storage options with custom-built cabinetry designed to fit your unique space and style.",
    },
  ];

  const [bgImage, setBgImage] = useState(images[0]); // Hero background (initially image 1)
  const [divImages, setDivImages] = useState(images.slice(1)); // All divs background (initially image 2 onward)
  const [currentText, setCurrentText] = useState(texts[0]); // Initial text (first in the array)
  const [screenSize, setScreenSize] = useState("desktop"); // Track screen size: "mobile" or "desktop"

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };

    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize); // Update on resize
    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDivImages((prevDivImages) => {
        setBgImage(prevDivImages[prevDivImages.length - 1]);
        return [...prevDivImages.slice(1), prevDivImages[0]];
      });

      setCurrentText((prevText) => {
        const nextIndex = (texts.indexOf(prevText) + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className=" h-[70vh] 2xl:h-[100vh] lg:h-[100vh] w-[100%] flex justify-end gap-2 items-end pr-4 relative 2xl:mb-14"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"
          style={{ zIndex: 1 }}
        ></div>

        <div className="absolute top-0 left-0 lg:left-[3rem] right-0 bottom-0 flex flex-col justify-center items-start text-start lg:w-[40%] w-[90%] text-white z-10 p-10 lg:p-4">
          <h1 className="font-extrabold ">_________</h1>
          <h1 className="text-5xl 2xl:text-6xl font-bold font-oxanium mb-4 mt-5">
            {currentText.title}
          </h1>
          <p className="text-[0.8rem] 2xl:text-[1.3rem] font-inter mb-6">
            {currentText.description}
          </p>
          <button
            className="px-4 py-2 border-[1px] bg-black text-white font-normal text-sm 2xl:text-lg  font-oxanium rounded-lg hover:bg-black transition duration-300 transform hover:-rotate-2 ease-in-out hover:scale-110 hover:shadow-lg"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Services
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
