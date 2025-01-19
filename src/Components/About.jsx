import React, { useEffect, useState, useRef } from "react";
// import Ripple from "@/components/magicui/ripple";
import CountUp from "react-countup";
import About from "../assets/Contact.jpg";
import C1 from "../assets/Clients/C1.png";
import C2 from "../assets/Clients/C2.png";
import C3 from "../assets/Clients/C3.png";
import C4 from "../assets/Clients/C4.png";
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.9 } // Trigger when at least 50% is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-10 rounded-lg 2xl:mb-24" id="about">
      {/* Gradient Background with Blur Effect */}
      <div
        className="absolute inset-0 "
        style={{
          background: `url('${About}')`,
          backgroundSize: "cover", // Ensures the image covers the div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <h2 className="text-5xl 2xl:text-6xl text-center  font-bold font-oxanium text-white mb-6">
          <span className="font-bir text-[10vh] font-[400]">-</span> About Us
        </h2>

        {/* About Description */}
        <p className="text-sm  2xl:text-2xl text-justify font-oxanium font-[300] text-white mb-5">
          At Innovita, we specialize in creating stunning, functional interiors
          that reflect your unique style. With a focus on elegance and
          innovation, our expert team transforms spaces into inspiring
          environments. Let us bring your vision to life with tailored designs
          that elevate every detail.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2" ref={statsRef}>
          <div className="flex flex-col items-start p-6 rounded-lg">
            <h3 className="text-2xl  2xl:text-4xl font-semibold text-white font-oxanium">
              {isVisible && (
                <CountUp start={0} end={650} suffix="+" duration={3} />
              )}
            </h3>
            <p className="text-white 2xl:text-2xl text-left font-extralight">
              Completed projects in UAE
            </p>
          </div>
          <div className="flex flex-col items-start p-6 rounded-lg">
            <h3 className="text-2xl 2xl:text-4xl font-semibold text-white font-oxanium">
              {isVisible && (
                <CountUp start={0} end={8000} suffix="+" duration={3} />
              )}
            </h3>
            <p className="text-white 2xl:text-2xl text-left font-extralight">
              Maintenance projects completed in UAE
            </p>
          </div>
          <div className="flex flex-col items-start p-6 rounded-lg">
            <h3 className="text-2xl 2xl:text-4xl font-semibold text-white font-oxanium">
              {isVisible && (
                <CountUp start={0} end={24} suffix="+" duration={3} />
              )}
            </h3>
            <p className="text-white 2xl:text-2xl text-left font-extralight">
              Years of combined experience
            </p>
          </div>
          <div className="flex flex-col items-start p-6 rounded-lg">
            <h3 className="text-2xl 2xl:text-4xl font-semibold text-white font-oxanium">
              {isVisible && (
                <CountUp start={0} end={130000} suffix="+" duration={3} />
              )}
            </h3>
            <p className="text-white 2xl:text-2xl text-left font-extralight">
              Sqm of completed project areas
            </p>
          </div>
        </div>

        {/* Our Clients Section */}
        <div className="mt-10 flex flex-col justify-center items-center">
          <h2 className="text-5xl 2xl:text-6xl text-center  font-bold font-oxanium text-white mb-6">
            Our Clients
          </h2>
          <div className="flex justify-center items-center gap-10 2xl:w-[100%] lg:w-[100%] w-[70%] 2xl:space-x-8 lg:space-x-8 space-x-1 rounded-full p-2">
            {/* Client logos */}
            <img
              src={C1}
              loading="lazy"
              alt="Client 1"
              className="w-auto h-10 2xl:h-16 block hover:scale-125"
            />
            <img
              src={C2}
              loading="lazy"
              alt="Client 2"
              className="w-auto h-24 2xl:h-40 block hover:scale-125"
            />
            {/* Show these only on larger screens */}
            <img
              src={C3}
              loading="lazy"
              alt="Client 3"
              className="hidden md:block w-auto h-12 2xl:h-20 hover:scale-125"
            />
            <img
              src={C4}
              loading="lazy"
              alt="Client 4"
              className="hidden md:block w-auto h-12 2xl:h-20 hover:scale-125"
            />
          </div>
        </div>
        {/* <Ripple /> */}
      </div>
    </section>
  );
};

export default AboutUs;
