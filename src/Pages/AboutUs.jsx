import React from "react";
import AboutUs from "../Components/MileStone";
import HowWeDeliverSection from "../Components/HowDeliver";
import ContactForm from "../Components/ContactForm";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Person1 from "../assets/t1.jpg";
import Person2 from "../assets/t2.jpg";
import Person3 from "../assets/t3.jpg";
import Person4 from "../assets/t4.jpg";
const AboutPage = () => (
  <div>
    <Header style={{ zIndex: 9999 }} />
    <MeetOurTeam />
    <AboutUs />
    <HowWeDeliverSection />
    <ContactForm />
  </div>
);

export default AboutPage;

const MeetOurTeam = () => {
  return (
    <div className="lg:h-[80vh] w-[100vw]  relative flex z-0 justify-center h-[80vh] mb-16 mt-16">
      <div className="h-[100%] w-[90%] bg-white  -top-20 2xl:-top-36 z-0 rounded-xl flex lg:flex-row flex-col">
        <div className="h-[100%] lg:w-[30%]  rounded-xl flex justify-start items-center flex-col p-8 gap-7">
          <h2 className="text-5xl 2xl:text-6xl font-bold  text-center font-oxanium text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-2xl 2xl:text-4xl  text-justify font-bir">
            At Innovita, our talented team of interior designers and design
            professionals specializes in creating stylish, functional spaces.
            With expertise in home interiors, office designs, and modern decor,
            we work closely with you to bring your vision to life. Trust our
            team to transform your space with innovative, personalized design
            solutions.
          </p>
        </div>
        <div className="h-[100%] lg:w-[70%]  rounded-xl  flex-col  hidden md:flex">
          <div className="flex h-[100%] w-[100%] gap-10  justify-center items-center lg:flex-row flex-col">
            <div
              style={{
                backgroundImage: `url(${Person1})`,
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] lg:w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
            <div
              style={{
                backgroundImage: `url(${Person2})`,
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>

            <div className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl 2xl:text-3xl">
              This is our Exceptional team, We are the best !!!
            </div>
          </div>
          <div className=" h-[100%] w-[100%] gap-10  justify-center items-center hidden md:flex ">
            <div
              style={{
                backgroundImage: `url(${Person3})`,
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold  2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
            <div
              style={{
                backgroundImage: `url(${Person4})`,
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
            <div
              style={{
                backgroundImage: `url(${Person1})`,
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="h-[100%] lg:w-[70%]  rounded-xl  flex-col  overflow-hidden flex sm:hidden">
          <PortfolioSlider />
        </div>
      </div>
    </div>
  );
};

const PortfolioSlider = () => {
  // Sample image URLs for the slider
  const images = [Person1, Person2, Person3, Person4];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="relative w-[100%] h-[100%] mx-auto  overflow-hidden  rounded-lg bg-gray-300 flex flex-col">
        <div
          className="absolute top-0 left-0 h-full flex transition-all duration-1000"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt="affordable and cheap interior designer in dubai best and Affordable Interior Design service in Dubai innovita best interior design in UAE and Dubai"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <ul className="absolute bottom-5 left-0 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <li
              key={index}
              className={`w-2.5 h-2.5 bg-white rounded-full cursor-pointer ${
                activeIndex === index ? "w-6" : "w-2.5"
              } transition-all duration-300`}
              onClick={() => setActiveIndex(index)}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};
