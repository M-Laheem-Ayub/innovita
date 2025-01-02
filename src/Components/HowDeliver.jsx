import React, { useState } from "react";
import Design from "../assets/des.jpg";
import Exe from "../assets/Ex.jpg";
import Con from "../assets/consul.jpg";
const HowWeDeliverSection = () => {
  // State to track the current hovered item
  const [hoveredItem, setHoveredItem] = useState("");

  // Images for each item
  const images = {
    Consultation: Con, // Replace with Consultation image URL
    Design: Design, // Replace with Design image URL
    Execution: Exe, // Replace with Execution image URL
  };

  return (
    <section className="mb-[15vh] lg:mb-16 mt-12 h-[100vh] w-[100vw]">
      <div className="container mx-auto  h-[100%] w-[100%] flex flex-col justify-center items-start ">
        <div className=" lg:h-[10%] w-[100%]">
          <div className=" h-[100%] w-[100%] flex justify-center lg:items-center items-center flex-col">
            <h2 className="text-5xl 2xl:text-6xl text-center font-bold font-oxanium text-gray-800">
              How We Deliver
            </h2>
            <h2 className="text-xl md:text-3xl font-bold font-oxanium text-gray-800 ">
              The best
              <span className="font-bir  lg:text-[10vh] text-[7vh]">
                {" "}
                services
              </span>
            </h2>
          </div>
        </div>
        <div className=" h-[70%] w-[100%] flex flex-col lg:flex-row ">
          <div className=" h-[100%] lg:w-[50%] flex justify-center items-center  p-10">
            {" "}
            <img
              src={images[hoveredItem] || images.Consultation} // Default to "Consultation" image
              alt="How we deliver"
              className="lg:w-full w-[90%] h-[80%] object-cover rounded-lg"
            />
          </div>
          <div className=" h-[100%] lg:w-[50%] flex justify-center items-center  p-10">
            <div className="space-y-4 ">
              {[
                {
                  id: "Consultation",
                  number: "01",
                  title: "Consultation",
                  description:
                    "Once we receive your request, our team inspects your site to understand your requirements and assess the scope of the project.",
                },
                {
                  id: "Design",
                  number: "02",
                  title: "Design",
                  description:
                    "After the site inspection, our team designs, details, and drafts your project. This includes a 2D sketch or a 3D video walkthrough, the full scope, and the cost of the project.",
                },
                {
                  id: "Execution",
                  number: "03",
                  title: "Execution",
                  description:
                    "Once you approve the design, our operations team gets to work and turns your dream into reality.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 transition-all duration-300 ease-in-out hover:ml-5"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem("")} // Reset when not hovered
                >
                  <div className="flex-shrink-0">
                    <span className="text-2xl 2xl:text-4xl font-bold text-gray-400">
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="2xl:text-4xl text-3xl font-oxanium text-left font-semibold text-gray-800 ">
                      {item.title}
                    </h3>
                    <p className="text-sm 2xl:text-xl font-inter text-justify text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliverSection;
