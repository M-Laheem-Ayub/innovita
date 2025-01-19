import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bg from "../assets/service/whyCardBg.webp";

import { faShapes } from "@fortawesome/free-solid-svg-icons";

const WhyChooseSection = () => {
  const whyChooseInnovita = [
    {
      title: "Expert Team",
      description:
        "Our multidisciplinary team of designers, engineers, and technicians bring years of expertise to every project, ensuring high standards and flawless execution.",
    },
    {
      title: "End-to-End Service",
      description:
        "From initial consultation and designing to approvals, execution, and aftercare, we manage all aspects of your project, providing a seamless experience.",
    },
    {
      title: "Quality Assurance",
      description:
        "We use the highest quality materials and industry-leading techniques to ensure durability, sustainability, and compliance with all regulations.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "At Innovita, your satisfaction is our priority. We take the time to understand your needs and provide customized solutions that align with your vision.",
    },
  ];

  return (
    <div>
      <div className="flex pt-20 w-full bg-gray-100 flex-wrap mb-40 justify-center">
        <div className="lg:mb-14 2xl:mb-28 mb-0  2xl:w-[50%] lg:w-[50%] w-[100%] ">
          {" "}
          <h2 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 text-center ">
            Why Choose Innovita Technical &nbsp;
            <span className="font-bir lg:text-[10vh] text-[7vh] bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
              services
            </span>
          </h2>
        </div>

        <div className="flex  md:w-[90%] w-[100%]  flex-wrap   justify-cente">
          {whyChooseInnovita.map((item, index) => (
            <div key={index} className="md:w-1/4 w-full mb-12 p-1">
              <div
                className="justify-center  flex flex-col items-center"
                style={{
                  backgroundImage: `url(${Bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="justify-center flex flex-col items-center text-2xl -translate-y-1/2 text-black w-20 bg-white rounded-full h-20">
                  <FontAwesomeIcon icon={faShapes} />
                </div>
                <h3 className="text-2xl text-white text-center -translate-y-1/2 md:w-[100%] w-[60%] font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm  -translate-y-1/4 p-3 pb-10   text-center text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
