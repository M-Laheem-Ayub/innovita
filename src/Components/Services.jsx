import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image_one from "../assets/L1.png";
import image_two from "../assets/L1.png";
import image_three from "../assets/L1.png";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";
import S5 from "../assets/s5.png";
import S6 from "../assets/s6.png";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  const allServices = [
    {
      id: 1,
      image: S1,
      icon: image_one,
      title: "Adjustable Louvered Pergolas",
      description:
        "Flexible shading with adjustable, rust-resistant louvers. Includes motorized options and reduces heat by up to 40%.",
    },
    {
      id: 2,
      image: S2,
      icon: image_two,
      title: "Fixed Louver Pergolas",
      description:
        "Stylish, permanent shading solution with durable aluminum louvers. Offers 40% heat reduction and requires minimal maintenance.",
    },
    {
      id: 3,
      image: S3,
      icon: image_three,
      title: "Motorized Screens and Blinds",
      description:
        "Remote-controlled screens for privacy and weather protection. Customizable, durable design reduces heat by 35%.",
    },
    {
      id: 4,
      image: S4,
      icon: image_one,
      title: "Retractable Roof Systems",
      description:
        "Motorized roofs providing instant shade or open sky. Durable design reduces heat by 40%.",
    },
    {
      id: 5,
      image: S5,
      icon: image_two,
      title: "Car Parking Sheds Protection",
      description:
        "Weather-resistant sheds offering vehicle protection and up to 30% heat reduction.",
    },
    {
      id: 6,
      image: S6,
      icon: image_three,
      title: "Outdoor Shading Solutions",
      description:
        "Versatile shading systems with premium materials for long-lasting comfort and style.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    const totalScroll = container.scrollWidth - section.offsetWidth;

    // GSAP horizontal scroll animation
    gsap.to(container, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${container.scrollWidth}`,
        scrub: 1,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 2xl:mb-14 overflow-x-hidden bg-white"
      id="service"
    >
      <div className="text-center mb-5">
        <h2 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 text-center">
          <span className="font-bir text-[10vh] font-[400]">-</span> Our
          Services
        </h2>
        <h2 className="text-xl md:text-3xl font-bold font-oxanium text-gray-800 mt-5">
          We are best in our
          <span className="font-bir lg:text-[10vh] text-[7vh]"> services</span>
        </h2>
      </div>
      <div
        ref={containerRef}
        className="flex gap-5 md:gap-10 pl-5 md:pl-10 pr-5 md:pr-10"
        style={{
          display: "flex",
          overflow: "visible",
        }}
      >
        {allServices.map((service) => (
          <div
            key={service.id}
            className="relative w-[250px] md:w-80 h-[350px] md:h-96 2xl:h-[40rem] 2xl:w-[25rem] font-oxanium rounded-lg overflow-hidden flex-shrink-0 flex justify-center items-center flex-col shadow-2xl transition-all duration-300 hover:bg-gray-500 hover:scale-110"
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          >
            {/* Text and Description */}
            <div
              className="h-[50%] w-[80%] rounded-xl flex justify-end items-end"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button
                className="bg-white mr-5 mb-5 rounded-full h-10 w-10 rotate-[-35deg] hover:scale-125 hover:rotate-[0deg]"
                onClick={() => {
                  switch (service.id) {
                    case 1:
                      navigate("/Adjustable-Louver-Pergolas");
                      break;
                    case 2:
                      navigate("/Fixed-Louver-Pergolas");
                      break;
                    case 4:
                      navigate("/Roof ");
                      break;
                    // Add more cases for other IDs
                    default:
                      navigate("/Services");
                  }
                }}
              >
                <img
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWf-xLr5NYjR9T9IBI_CJfgaAbD_p40jcGCA&s"
                  alt=""
                />
              </button>
            </div>
            <div className="p-4 z-10 text-left">
              <h3
                className={`text-lg md:text-2xl 2xl:text-4xl font-semibold mb-2 text-center ${
                  isHovered ? "text-white" : "text-gray-800"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-xs md:text-sm 2xl:text-lg text-center ${
                  isHovered ? "text-white" : "text-gray-700"
                }`}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
