import React, { useEffect, useState } from "react";
import Header from "./Header";
import H1 from "../assets/Hero/H1.webp";
import H2 from "../assets/Hero/H2.webp";
import H3 from "../assets/Hero/H3.webp";
import H4 from "../assets/Hero/H4.webp";
import H5 from "../assets/Hero/H5.webp";
import H6 from "../assets/Hero/H6.webp";

const HeroSection = () => {
  const images = [H1, H2, H3, H4, H5, H6];
  const texts = [
    {
      title: "Adjustable Louvered Pergolas",
      description:
        "Flexible shading with adjustable, rust-resistant louvers. Includes motorized options and reduces heat by up to 40%.",
    },
    {
      title: "Fixed Louver Pergolas",
      description:
        "Stylish, permanent shading solution with durable aluminum louvers. Offers 40% heat reduction and requires minimal maintenance.",
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
  ];

  const [bgImageIndex, setBgImageIndex] = useState(0); // Index for the current background image
  const [textIndex, setTextIndex] = useState(0); // Index for the current text

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length, texts.length]);

  return (
    <>
      <div
        className="h-[70vh] 2xl:h-[100vh] lg:h-[100vh] w-full flex justify-end gap-2 items-end pr-4 relative 2xl:mb-14"
        style={{
          backgroundImage: `url(${images[bgImageIndex]})`,
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
          <h1 className="font-extrabold font-bir -mb-5 text-xl">
            Our Services
          </h1>
          <h1 className="font-extrabold font-bir">____________</h1>
          <h1 className="text-5xl 2xl:text-6xl font-bold font-oxanium mb-4 mt-5">
            {texts[textIndex].title}
          </h1>
          <p className="text-[0.8rem] 2xl:text-[1.3rem] font-oxanium mb-6">
            {texts[textIndex].description}
          </p>
          <button
            className="px-4 py-2 border-[1px] text-white font-normal bg-black text-sm 2xl:text-lg font-oxanium rounded-lg hover:bg-black transition duration-300 transform hover:-rotate-2 ease-in-out hover:scale-110 hover:shadow-lg"
            onClick={() => {
              const section = document.getElementById("service");
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
