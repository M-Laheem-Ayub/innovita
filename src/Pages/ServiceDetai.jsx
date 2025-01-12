import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Bg from "../assets/service/whyCardBg.webp";
import { faWrench, faShapes, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../Components/ContactForm";

const ServiceDetail = () => {
  const location = useLocation();
  const { id, title, image, description } = location.state || {};
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

  if (!location.state) {
    return <p className="text-center mt-10">No service data available.</p>;
  }

  return (
    <div>
      <div
        className="h-[35vh] 2xl:h-[60vh] lg:h-[80vh] w-full flex justify-end gap-2 items-end pr-4 relative 2xl:mb-14"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
        <div className="absolute top-0 left-0 lg:left-[3rem] right-0 bottom-0 flex flex-col justify-center md:items-center items-start text-center w-[90%] text-white z-10 p-10 lg:p-4">
          <h1 className="text-4xl text-start 2xl:text-6xl font-bold font-oxanium mb-4 mt-5">
            {title}
          </h1>
          <button
            className="px-4 py-2 border-[1px] text-white font-normal bg-black text-sm 2xl:text-lg font-oxanium rounded-lg hover:bg-black transition duration-300 transform hover:-rotate-2 ease-in-out hover:scale-110 hover:shadow-lg"
            onClick={() => {
              const section = document.getElementById("service");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Services
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-20">
        <div className="flex flex-wrap md:flex-row flex-col-reverse justify-center items-center">
          <div className="md:w-1/2 w-full  justify-center items-center ">
            <h1 className="text-3xl w-[90%] mt-5 flex-col  mx-auto mt-5 text-start font-bold mb-5">
              {title}
            </h1>
            <p className="text-lg w-[90%] text-start  mx-auto text-gray-700">
              {description}
            </p>
          </div>

          <div className="md:w-1/2 w-full text-center">
            <img
              src={image}
              alt={title}
              className="w-[90%] h-64 object-cover rounded-md mb-5 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-20 bg-gray-100 flex-wrap mb-40  justify-center">
        {whyChooseInnovita.map((item, index) => (
          <div key={index} className="md:w-1/4 w-1/2 mb-11 aspect-square p-1">
            <div
              className="justify-center flex flex-col items-center"
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
              <h3 className="text-2xl text-white text-center md:-translate-y-full -translate-y-1/2 md:w-[100%] w-[60%] font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm md:-translate-y-1/3 -translate-y-1/4 p-3   text-center text-gray-400 mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ContactForm />
    </div>
  );
};

export default ServiceDetail;
