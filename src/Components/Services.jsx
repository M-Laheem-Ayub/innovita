import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import S1 from "../assets/service/s1.png";
import S2 from "../assets/service/s2.png";
import S3 from "../assets/service/s3.png";
import S4 from "../assets/service/s4.png";
import S5 from "../assets/service/s5.png";
import S6 from "../assets/service/s6.png";
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

      title: "Adjustable Louvered Pergolas",
      description:
        "Flexible shading with adjustable, rust-resistant louvers. Includes motorized options and reduces heat by up to 40%.",
    },
    {
      id: 2,
      image: S2,

      title: "Fixed Louver Pergolas",
      description:
        "Stylish, permanent shading solution with durable aluminum louvers. Offers 40% heat reduction and requires minimal maintenance.",
    },
    {
      id: 3,
      image: S3,

      title: "Motorized Screens and Blinds",
      description:
        "Remote-controlled screens for privacy and weather protection. Customizable, durable design reduces heat by 35%.",
    },
    {
      id: 4,
      image: S4,

      title: "Retractable Roof Systems",
      description:
        "Motorized roofs providing instant shade or open sky. Durable design reduces heat by 40%.",
    },
    {
      id: 5,
      image: S5,

      title: "Car Parking Sheds Protection",
      description:
        "Weather-resistant sheds offering vehicle protection and up to 30% heat reduction.",
    },
    {
      id: 6,
      image: S6,

      title: "Outdoor Shading Solutions",
      description:
        "Versatile shading systems with premium materials for long-lasting comfort and style.",
    },
  ];
  const scrollContainerHandler = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const scrollContainerHandler = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

        // Check if scrolled to the end
        if (scrollLeft + clientWidth >= scrollWidth) {
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    };

    const scrollInterval = setInterval(scrollContainerHandler, 3500);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section
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
          <span className="font-bir lg:text-[10vh] text-[7vh] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text ml-3">
            services
          </span>
        </h2>
      </div>

      <div className="relative">
        {/* Left Scroll Button */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:scale-110 z-20"
          onClick={() => scrollContainerHandler("left")}
        >
          &larr;
        </button>

        {/* Service Cards Container */}
        <div
          ref={containerRef}
          className="flex gap-5 md:gap-10 pl-5 md:pl-10 pr-5 md:pr-10 pt-10 pb-10 overflow-x-auto scroll-smooth"
        >
          {allServices.map((service) => (
            <div
              key={service.id}
              className="relative w-[250px] md:w-80 h-[350px] md:h-96 2xl:h-[40rem] 2xl:w-[30rem] font-oxanium rounded-lg overflow-hidden flex-shrink-0 flex justify-center items-center flex-col shadow-2xl transition-all duration-300 hover:bg-black hover:scale-110"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                navigate("/Services");
              }}
            >
              {/* Service Image */}
              <div
                className="h-[50%] w-[80%] rounded-xl flex justify-end items-end"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <button className="bg-white mr-5 mb-5 rounded-full h-10 w-10 2xl:h-16 2xl:w-16 rotate-[-35deg] hover:scale-125 hover:rotate-[0deg] hidden md:flex">
                  <img
                    className="rounded-full"
                    loading="lazy"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWf-xLr5NYjR9T9IBI_CJfgaAbD_p40jcGCA&s"
                    alt="best and Affordable Interior Design service in Dubai, best and Affordable Interior Design service in UAE, best and Affordable Interior Design service in uae, best and Affordable Interior Design service in dubai"
                  />
                </button>
              </div>

              {/* Service Details */}
              <div className="p-4 2xl:p-10 z-10 text-left">
                <h3
                  className={`text-lg md:text-2xl 2xl:text-4xl font-semibold mb-2 text-left  ${
                    isHovered ? "text-white" : "text-gray-800"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-xs md:text-sm 2xl:text-lg text-justify ${
                    isHovered ? "text-white" : "text-gray-700"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:scale-110 z-20"
          onClick={() => scrollContainerHandler("right")}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default ServiceSection;
