import React, { useState } from "react";
import Innovita from "../assets/Innovita.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.target.getAttribute("href").substring(1); // Get the ID of the target section
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop; // Get the position of the target element
      const startPosition = window.pageYOffset; // Current scroll position
      const distance = targetPosition - startPosition; // Distance to scroll
      const duration = 2000; // Duration in milliseconds for the scroll (increase to slow down)

      let startTime = null;

      const scroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(
          timeElapsed,
          startPosition,
          distance,
          duration
        );

        window.scrollTo(0, run); // Perform the scroll

        if (timeElapsed < duration) {
          requestAnimationFrame(scroll); // Continue the animation if duration hasn't passed
        }
      };

      requestAnimationFrame(scroll); // Start the scroll animation

      // Ease function to make the scroll smoother
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }
    }
  };

  return (
    <header>
      <nav className="bg-white opacity-80 px-4 lg:px-6 py-2.5 dark:bg-transparent w-[100vw]">
        <div className="flex flex-wrap justify-between items-center w-[100%]">
          <Link to="/" className="flex items-center">
            <img
              src={Innovita}
              className="mr-3 h-10 sm:h-12 "
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <a
              href="#contact"
              onClick={handleSmoothScroll}
              className="text-white border-[1px] border-white bg-black font-oxanium transition duration-300 transform hover:-rotate-2 ease-in-out hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-primary-300 font-medium rounded-lg lg:text-[0.8rem] text-[0.5rem] px-3 lg:px-6 py-2 lg:py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Book Free Consultant
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } justify-center items-center w-full lg:flex lg:w-auto lg:order-1  opacity-90 lg:bg-transparent bg-white rounded-md`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-Black font-oxanium rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-black lg:text-black dark:text-black hover:underline transition duration-300 transform  ease-in-out hover:scale-105"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Services"
                  className="block py-2 pr-4 pl-3 text-Black font-oxanium rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-black lg:text-black dark:text-black hover:underline transition duration-300 transform  ease-in-out hover:scale-105"
                  aria-current="page"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="block py-2 pr-4 pl-3 font-oxanium text-black lg:text-black border-b border-gray-100  dark:text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline transition duration-300 transform  ease-in-out hover:scale-105"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Projects"
                  className="block py-2 pr-4 pl-3 text-black lg:text-black font-oxanium  dark:text-black  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline transition duration-300 transform  ease-in-out hover:scale-105"
                >
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleSmoothScroll}
                  className="block py-2 pr-4 pl-3 font-oxanium text-black lg:text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:underline transition duration-300 transform  dark:text-black  ease-in-out hover:scale-105"
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
