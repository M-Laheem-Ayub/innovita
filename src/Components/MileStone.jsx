import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import About from "../assets/Contact.jpg";

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
          Milestones That we Achieve
        </h2>

        {/* About Description */}

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
                <CountUp start={0} end={8000} suffix="+" duration={5} />
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
                <CountUp start={0} end={130000} suffix="+" duration={5} />
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
          <div className="flex justify-center 2xl:w-[100%] lg:w-[100%] w-[70%] 2xl:space-x-8 lg:space-x-8 space-x-1 ">
            {/* Client logos */}
            <img
              src="https://logos-world.net/wp-content/uploads/2023/08/Bad-Bunny-Logo-500x281.png"
              alt="Client 1"
              className="w-auto h-12 2xl:h-20 block"
            />
            <img
              src="https://logos-world.net/wp-content/uploads/2023/08/Giorgio-Armani-Logo-500x281.png"
              alt="Client 2"
              className="w-auto h-12 2xl:h-20 block"
            />
            <img
              src="https://logos-world.net/wp-content/uploads/2023/07/Adidas-Logo-500x281.png"
              alt="Client 3"
              className="w-auto h-12 2xl:h-20 block"
            />
            <img
              src="https://logos-world.net/wp-content/uploads/2023/05/Chanel-Logo.png"
              alt="Client 4"
              className="w-auto h-12 2xl:h-20 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
