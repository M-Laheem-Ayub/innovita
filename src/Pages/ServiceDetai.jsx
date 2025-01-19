import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Bg from "../assets/service/whyCardBg.webp";
import Innovita2 from "../assets/Innovita2.png";
import { faWrench, faShapes, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../Components/ContactForm";
import WhyChooseSection from "../Components/WhyChoose";

const ServiceDetail = () => {
  const location = useLocation();
  const { id, title, image, description,subTitle,subDescription } = location.state || {};
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

  const [flipped, setFlipped] = useState(Array(6).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const cardData = [
    {
      title: "Bedroom Design",
      description: "Transform your bedroom into a luxurious sanctuary with our bespoke design solutions.",
      bullets: [
        "Custom headboard and wall treatments",
        "Built-in wardrobe systems",
        "Premium lighting design",
        "Smart room automation",
        "Luxury flooring solutions",
      ],
      backgroundImage: "bedroom.jpg",
    },
    {
      title: "Living Room Design",
      description: "Create stunning living spaces that combine comfort with sophisticated style.",
      bullets: [
        "Contemporary layouts",
        "Custom ceiling designs",
        "Entertainment system integration",
        "Bespoke furniture arrangements",
        "Artistic lighting solutions",
      ],
      backgroundImage: "living-room.jpg",
    },
    {
      title: "Bathroom Design",
      description: "Experience spa-like luxury in your own home with our premium bathroom designs.",
      bullets: [
        "High-end fixture selection",
        "Custom vanity designs",
        "Premium tiling work",
        "Smart storage solutions",
        "Modern lighting concepts",
      ],
      backgroundImage: "bathroom.jpg",
    },
    {
      title: "Kitchen Design",
      description: "Craft your perfect culinary space with our innovative kitchen designs.",
      bullets: [
        "Custom cabinetry",
        "Smart appliance integration",
        "Premium countertops",
        "Efficient storage solutions",
        "Modern lighting systems",
      ],
      backgroundImage: "kitchen.jpg",
    },
    {
      title: "Outdoor Kitchen Design",
      description: "Extend your living space with our sophisticated outdoor kitchen solutions.",
      bullets: [
        "Weather-resistant materials",
        "Built-in BBQ systems",
        "Custom countertops",
        "Entertainment areas",
        "Smart storage solutions",
      ],
      backgroundImage: "outdoor-kitchen.jpg",
    },
    {
      title: "Modern Stair Design",
      description: "Make a striking architectural statement with our contemporary stair designs.",
      bullets: [
        "Floating staircase options",
        "Glass balustrades",
        "LED integration",
        "Custom railings",
        "Premium materials",
      ],
      backgroundImage: "stair.jpg",
    },
  ];

  if (!location.state) {
    return <p className="text-center mt-10">No service data available.</p>;
  }

  return (
    <div>
    <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>
      <div
        className="h-[80vh] 2xl:h-[60vh] lg:h-[80vh] w-full flex justify-end gap-2 items-end pr-4 relative 2xl:mb-14"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <div className="absolute  top-0 left-0  right-0 bottom-0 flex flex-col justify-center md:items-center items-start text-center w-[100%] text-white z-10 p-10 lg:p-4">
          <h1 className="text-4xl text-start 2xl:text-6xl font-bold font-oxanium mb-4 mt-5">
            {title}
          </h1>
          <p className="text text-start md:text-center font-oxanium mb-4 ">
            {description}
          </p>
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

      <div className="max-w-6xl mx-auto my-20">
        <div className="flex flex-wrap md:flex-row flex-col  ">
          <div className="md:w-1/2 w-full ">
            <img
              src={image}
              alt={title}
              className="md:w-[68%] w-[90%] h-48 object-cover mx-auto  rounded-md mb-5 md:ms-28 "
            />
          </div>
          <div className="md:w-1/2 w-full md:px-5  border-black">
            <h1 className="text-xl mx-auto md:w-[100%] w-[90%] flex-col md:-ms-12 font-serif text-slate-400 text-start mb-5">
              Innvoita Techincial LLC Service || {title}
            </h1>
            <p className="text-2xl mx-auto md:w-[100%] w-[90%] text-start 2xl:text-6xl md:-ms-12 font-bold font-sans mt-5 mb-5">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row flex-col  ">
          <div className="md:w-2/3 w-full px-3 md:-mt-3 flex  flex-row">
            <div className="flex flex-col md:w-[28%] w-[36%]">
              <img
                src={image}
                alt={title}
                className="md:w-[100%] w-[100%]  md:h-56 h-44 md:-me-24 object-cover rounded-md mb-5 mx-auto"
              />
              <img
                src={Innovita2}
                alt={title}
                className="transition duration-300 transform hover:-rotate-2 ease-in-out hover:text-white hover:scale-110 hover:shadow-lg md:w-[80%] bg-white py-2 md:border-2 border-black w-[100%] md:relative bottom-72 md:mt-4 left-1/2  md:h-12 h-14 md:-me-24 object-cover rounded-lg mb-5 mx-auto"
              />
            </div>

            <img
              src={image}
              alt={title}
              className="md:w-[44%] md:h-96 h-72 w-[58%] object-cover rounded-md mb-5 mx-auto"
            />
          </div>
          <div className="md:w-1/3 w-full md:px-5">
            <h1 className="text-xl 2xl:text-6xl mx-auto w-[90%] flex-col md:-ms-24 -mt-3  font-bold font-oxanium  text-start mb-5">
             {subTitle}
            </h1>
            <p className="text-lg font-[500] mx-auto w-[90%] text-start 2xl:text-6xl md:-ms-24  font-sans mb-4 mt-5">
              {subDescription}
            </p>
          </div>
        </div>
      </div>

      

      <WhyChooseSection />

      <ContactForm />
    </div>
  );
};

export default ServiceDetail;
