import React from 'react'
import S1 from "../assets/service/s1.png";
import S2 from "../assets/service/s2.png";
import S3 from "../assets/service/s3.png";
import S4 from "../assets/service/s4.png";
import S5 from "../assets/service/s5.png";
import S6 from "../assets/service/s6.png";

const coreServics = [
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
const CoreServics = () => {
  return (
    <div>
       <div className="text-center mb-5">
        <h2 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 text-start">
          Our Core
        </h2>
        <h2 className="text-xl md:text-3xl font-bold font-oxanium text-gray-800 mt-5 text-start">
          <span className="font-bir lg:text-[10vh] text-[7vh] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text ml-3">
            services
          </span>
        </h2>
      </div>
      <div>
      <a href="#contact">
          <div className="h-[85%] w-[100vw] mt-20 lg:mt-0 flex flex-wrap">
            {coreServics.map((project, index) => (
              <div
                key={project.id}
                className={`h-[42.5%] w-[50%] flex justify-center items-center flex-col ${
                  index < 2 ? "lg:border-r" : "lg:border-b"
                } lg:border-black`}
              >
                <div
                  className="h-[80%] w-[80%] hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 className="text-left font-oxanium font-normal text-2xl pt-5 w-[80%]">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </a>
      </div>
    </div>
  )
}

export default CoreServics
