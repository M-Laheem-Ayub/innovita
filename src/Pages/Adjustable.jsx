import React, { useState, useEffect } from "react";
import HeroSection from "../Components/HeroForOthers";
import MileStone from "../Components/MileStone";
import Testimonial from "../Components/Testimonial";
import ContactForm from "../Components/ContactForm";
import Pintrest from "../Components/Pintrest";

function Adjustable() {
  const contentData = [
    {
      heading: "Heading 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      img: "https://img.freepik.com/free-photo/handcrafted-wooden-decorative-vase_23-2151003160.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    },
    {
      heading: "Heading 2",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: "https://img.freepik.com/free-photo/handcrafted-wooden-decorative-vase_23-2151003160.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    },
    {
      heading: "Heading 3",
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      img: "https://img.freepik.com/free-photo/handcrafted-wooden-decorative-vase_23-2151003160.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  const [obj, setObj] = useState({
    img: "https://img.freepik.com/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199366.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    title: "Adjustable-Louver-Pergolas",
    description:
      "Explore our elegant outdoor spaces designed for relaxation and entertainment. Stylish, permanent shading solution with durable aluminum louvers Offers 40% heat reduction and requires minimal maintenance.",
  });

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
        <HeroSection
          img={obj.img}
          title={obj.title}
          description={obj.description}
        />
      </div>
      <section className="lg:p-24 lg:pb-0 w-[100vw]">
        <div className="container mx-auto">
          {contentData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center mb-16 bg-yellow-50 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className=" md:w-1/2 flex justify-center w-[50%]">
                <img
                  src={item.img}
                  alt={`Image for ${item.heading}`}
                  className="w-96 h-60 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-[50%] md:w-1/2 pl-8">
                <h2 className="text-3xl font-semibold mb-4 ">{item.heading}</h2>
                <p className="text-lg text-gray-700 text-justify">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        <Pintrest />
      </div>

      <MileStone />
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default Adjustable;
