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
  const containerRef = useRef(null);
  const [hoveredCardId, setHoveredCardId] = useState(null); // Track hovered card ID

  const allServices = [
    {
      id: 1,
      width:"pe-10",
      image: S1,
      title: "Luxury Interior Design Services",
      description:
        "Luxury Interior Design Solutions in Dubai Transform your living spaces with Dubai's most luxurious interior design experts.",
      subTitle:"Our Most Luxurious Interior Design Service In Dubai",
      subDescription:"At Innovita Technical Service LLC, we understand that your interior space is a reflection of your personality and aspirations. Our Best luxurious interior design services blend functionality with aesthetics to create inspiring spaces that enhance your lifestyle. ",
    },
    {
      id: 2,
      width:"pe-10",
      image: S2,
      title: "Custom Furniture Solutions",
      description:
        "Bespoke Furniture Crafted for Dubai's Elite Experience the perfect blend of form and function with our custom furniture solutions.",
      subTitle:"Our Most Custom Furniture Service In Dubai",
      subDescription:"Our custom furniture division specializes in creating unique pieces that perfectly match your space and style preferences. Each piece is meticulously crafted using premium materials and innovative designs. ",
      },
    {
      id: 3,
      width:"pe-10",
      image: S3,
      title: "Architectural Design Services",
      description:
        "Innovative Architectural Solutions in Dubai Creating iconic spaces that merge aesthetics with functionality through expert architectural design.",
      subTitle:"Our best Luxurious Architectural Service In Dubai ",
      subDescription:"Our architectural design team specializes in creating stunning, functional spaces that reflect modern Dubai's dynamic spirit. We combine innovative design principles with practical solutions to deliver exceptional results. ",
      },
    {
      id: 4,
      image: S4,
      width:"pe-10",
      title: "Beach Pool Construction",
      description:
        "Luxury Pool Construction in Dubai Creating stunning aquatic retreats with premium design and engineering excellence.",
      subTitle:"Our Luxury Pool Construction Service In Dubai",
      subDescription:"Our pool construction division specializes in creating luxurious swimming pools that complement Dubai's premier properties. We combine innovative technology with expert craftsmanship. ",
      },
    {
      id: 5,
      image: S5,
      width:"pe-10",
      title: "Metal Structural Work ",
      description:
        "Our Premium Metal Engineering Solutions Provide Innovative and Reliable Structural Metal work, exceeding client expectations across Dubai.",
      subTitle:"Our Best Metal Structural Work Service In Dubai",
      subDescription:"Our metal structural division provides comprehensive solutions for both residential and commercial projects, ensuring durability and aesthetic excellence.",
      },
    {
      id: 6,
      image: S6,
      width:"pe-10",
      title: "Metal Fencing Design",
      description:
        "Elevate Your Property's Security and Aesthetic appeal with our bespoke Metal Fencing Solutions in Dubai, meticulously designed for premium residences.",
      subTitle:"Dubai Most Luxury Metal Fencing Design Service",
      subDescription:"Our metal fencing solutions offer the perfect blend of security, durability, and aesthetic appeal, customized for Dubai's luxury properties. ",
      },
    {
      id: 7,
      image: S6,
      width:"pe-20",
      title: "Metal Floor Grating",
      description:
      "Our Professional Metal Grating Solutions are Engineered for exceptional durability and designed to withstand the harshest environments.",
      subTitle:"Dubai Most Luxury Metal Fencing Design Service",
      subDescription:"Our metal fencing solutions offer the perfect blend of security, durability, and aesthetic appeal, customized for Dubai's luxury properties. ",
      
    },
    {
      id: 8,
      width:"pe-20 me-10",
      image: S6,
      title: "Metal Bollards",
      description:
        "Uncompromising Strength Meets Sophisticated Design in Advanced Security Bollard Systems, protecting properties with unwavering resilience.",
      subTitle:"Dubai Most Luxury Metal Fencing Design Service",
      subDescription:"Our metal fencing solutions offer the perfect blend of security, durability, and aesthetic appeal, customized for Dubai's luxury properties. ",
      
      },
    {
      id: 9,
      image: S6,
      width:"pe-20",
      title: "Outdoor Exterior Work",
      description:
        "Dubai Most Luxury Stainless Steel Solutions Engineering excellence in commercial and residential steel applications.",
      subTitle:"Dubai Most Luxury Outdoor living Service ",
      subDescription:"Transform your outdoor areas into sophisticated living spaces with our comprehensive exterior solutions. We specialize in creating comfortable, stylish, and durable outdoor environments. ",
      },
    {
      id: 10,
      width:"pe-10",
      image: S6,
      title: "Stainless Steel Equipment",
      description:
        "Dubai Most Luxury Stainless Steel Solutions Engineering excellence in commercial and residential steel applications.",
      subTitle:"",
      subDescription:"",
      },
    {
      id: 11,
      width:"pe-10",
      image: S6,
      title: "Modern  Aluminum Windows & Doors",
      description:
        "Transform Your Living Spaces With Our Premium Aluminum Solutions, Featuring Innovative Window and Door Systems that elevate modern living.",
      subTitle:"Dubai Most Luxury Metal Fencing Design Service",
      subDescription:"Our metal fencing solutions offer the perfect blend of security, durability, and aesthetic appeal, customized for Dubai's luxury properties. ",
      
      },
    {
      id: 12,
      width:"pe-20 me-20",
      image: S6,
      title: "MEP Services",
      description:
        "Dubai Best MEP Solutions: A leading provider of comprehensive mechanical, electrical, and plumbing services, ensuring project success across Dubai.",
      subTitle:"Dubai Most Luxury Metal Fencing Design Service",
      subDescription:"Our metal fencing solutions offer the perfect blend of security, durability, and aesthetic appeal, customized for Dubai's luxury properties. ",
      
      },
    
  ];

  const scrollContainerHandler = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3500);

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
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:scale-110 z-20"
          onClick={() => scrollContainerHandler("left")}
        >
          &larr;
        </button>

        <div
          ref={containerRef}
          className="flex gap-5 md:gap-10 pl-5 md:pl-10 pr-5 md:pr-10 pt-10 pb-10 overflow-x-auto scroll-smooth"
        >
          {allServices.map((service) => (
            <div
              key={service.id}
              className={`relative w-[250px] md:w-80 h-[350px] bg-black md:h-96 2xl:h-[40rem] 2xl:w-[30rem] font-oxanium rounded-lg overflow-hidden flex-shrink-0 flex justify-center items-center flex-col shadow-2xl transition-all duration-300 cursor-pointer ${
                hoveredCardId === service.id ? " hover:scale-110" : ""
              }`}
              onMouseEnter={() => setHoveredCardId(service.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={() =>
                navigate("/service-detail", {
                  state: {
                    id: service.id,
                    title: service.title,
                    image: service.image,
                    description: service.description,
                    subTitle: service.subTitle,
                    subDescription: service.subDescription,
                  },
                })
              }
            >
              <div
                className="h-[100%] w-[100%] rounded-t-lg flex justify-end items-end"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-4 2xl:p-10 z-10 text-left">
                <h3
                  className={`text-lg md:text-2xl ${service.width}  2xl:text-4xl font-semibold mb-2 text-white text-left `}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-xs md:text-sm 2xl:text-lg text-justify text-white `}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

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
