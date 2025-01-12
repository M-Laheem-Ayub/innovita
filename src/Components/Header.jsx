import React, { useState } from "react";
import Innovita from "../assets/Innovita.png";
import { Link, useLocation } from "react-router-dom";
import S1 from "../assets/service/s1.png";
import S2 from "../assets/service/s2.png";
import S3 from "../assets/service/s3.png";
import S4 from "../assets/service/s4.png";
import S5 from "../assets/service/s5.png";
import S6 from "../assets/service/s6.png";

import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current route

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav className="bg-white opacity-100 px-4 lg:px-6 py-2.5 dark:bg-white w-[100vw]">
        <div className="flex flex-wrap justify-between items-center w-[100%]">
          <Link to="/" className="flex items-center">
            <img
              src={Innovita}
              loading="lazy"
              className="mr-3 h-10 sm:h-12"
              alt="Innovita best interior design Service in Dubai and UAE"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <a
              href="#contact"
              onClick={handleSmoothScroll}
              className="text-white border-[1px] border-white bg-black font-oxanium transition duration-300 transform hover:-rotate-2 ease-in-out hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg  font-medium rounded-lg lg:text-[0.8rem] text-[0.5rem] px-3 lg:px-6 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Book Free Consultantion
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } justify-center items-center w-full lg:flex lg:w-auto lg:order-1 opacity-90 lg:bg-transparent bg-white rounded-md`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-3 pl-3 font-oxanium rounded ${
                    location.pathname === "/" ? "underline" : ""
                  } transition duration-300 transform ease-in-out hover:scale-105`}
                >
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link
                  to="/Services"
                  className={`block py-2 pr-3 pl-3 font-oxanium rounded ${
                    location.pathname === "/Services" ? "underline" : ""
                  } transition duration-300 transform ease-in-out hover:scale-105`}
                >
                  Services
                </Link>
                <ul className="absolute hidden group-hover:flex flex-col bg-white border border-gray-300 shadow-lg mt-0 rounded-md z-50 w-[300px]"
                style={{ zIndex: 9999 }}
                >
                  {allServices.map((service) => (
                    <li
                      key={service.id}
                      onClick={() =>
                        navigate("/service-detail", {
                          state: {
                            id: service.id,
                            title: service.title,
                            image: service.image,
                            description: service.description,
                          },
                        })
                      }
                      className="block py-2 px-4 hover:bg-gray-200 cursor-pointer"
                    >
                      {service.title}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  to="/About"
                  className={`block py-2 pr-3 pl-3 font-oxanium rounded ${
                    location.pathname === "/About" ? "underline" : ""
                  } transition duration-300 transform ease-in-out hover:scale-105`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Projects"
                  className={`block py-2 pr-3 pl-3 font-oxanium rounded ${
                    location.pathname === "/Projects" ? "underline" : ""
                  } transition duration-300 transform ease-in-out hover:scale-105`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="block py-2 pr-4 pl-3 font-oxanium rounded hover:underline transition duration-300 transform ease-in-out hover:scale-105"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
