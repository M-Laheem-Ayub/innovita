import React, { useState } from "react";
import Innovita from "../assets/Innovita.png";
import Insta from "../assets/insta.png";
import Facw from "../assets/face.png";
import X from "../assets/X.png";
import Contact from "../assets/Contact.jpg";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    message: "",
    subject: "", // Added subject state
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, location, email, phone, message, subject } = formData;

    // Create the mailto link with the form values
    const mailtoLink = `mailto:info@innovita.ae?subject=${subject}&body=Hi,%20I'm%20${name}.%0A%0A${message}%0A%0AYou%20can%20reach%20out%20to%20me%20via%20email%20at%20${email}%20or%20contact%20me%20on%20my%20phone%20number:%20${phone}.%0A%0ARegards,%0A${name}`;

    // Open the default email client with pre-filled fields
    window.location.href = mailtoLink;
  };

  return (
    <div
      className="flex flex-col lg:flex-row gap-[5%] bg-black mt-12 w-[100vw]"
      id="contact"
    >
      {/* Left Section */}
      <div
        className="flex flex-col items-start justify-center lg:items-start mb-8 lg:mb-0 lg:w-[30%] p-10"
        style={{
          backgroundImage: `url(${Contact})`,
          backgroundSize: "cover", // Ensures the image covers the div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-start items-start mb-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdQj2kLqUnNwKT0Ayr7rqqP_0YPq8QxFqqw&s"
            alt="Contact Us"
            className="w-4 h-4 mt-1 mr-5"
          />
          <div className="text-start">
            <h1 className="text-lg font-normal font-oxanium text-white mb-2">
              Office 401 Diamond, Business Center 2, Arjan, Dubai.
            </h1>
            <button
              type="submit"
              className="bg-black font-oxanium text-white font-bold text-[0.6rem] py-1 px-6 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              View in Map*
            </button>
          </div>
        </div>
        <a
          href="mailto:info@innovita.ae"
          className="text-lg font-normal underline ml-8 font-oxanium text-white mb-5 hover:underline"
        >
          info@innovita.ae
        </a>
        <a
          href="tel:+971567907012"
          className="text-white underline ml-8 font-oxanium hover:underline"
        >
          +971 56 790 7012
        </a>

        {/* Add Images Section */}
        <div className="flex justify-start items-end gap-4 mt-5  w-full ml-8">
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Insta} alt="Image 1" className="w-8 h-8 mb-1" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Facw} alt="Image 1" className="w-8 h-8 mb-1" />
          </a>
          <a href="https://www.x.com/" target="_blank">
            <img src={X} alt="Image 1" className="w-10  h-10 " />
          </a>
        </div>
        <h1 className="text-white mt-10 font-oxanium text-sm ml-7">
          @Created by BalenceStudio
        </h1>
      </div>

      {/* Right Section */}
      <div className="lg:w-[65%] bg-white shadow-lg  p-8 ">
        <h2 className="text-5xl font-normal text-left font-oxanium text-gray-800 lg:mb-6 mb-16">
          Book Your Free Consultation
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name and Location */}
          <div className="flex gap-4 mb-8">
            <div className="relative w-1/2">
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full border-b border-black bg-transparent text-gray-700 focus:outline-none focus:border-black"
              />
              <label
                htmlFor="name"
                className="absolute left-0 text-sm text-black font-oxanium transform -translate-y-6 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 transition-all duration-200"
              >
                Name
              </label>
            </div>
            <div className="relative w-1/2">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full border-b border-black bg-transparent text-gray-700 focus:outline-none focus:border-black"
              />
              <label
                htmlFor="location"
                className="absolute left-0 text-sm text-black font-oxanium transform -translate-y-6 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 transition-all duration-200"
              >
                Location
              </label>
            </div>
          </div>
          <div className="relative mb-8">
            <select
              required
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="peer w-full border-b border-black bg-transparent text-gray-700 focus:outline-none focus:border-black font-oxanium text-sm"
            >
              <option className="text-sm font-oxanium" value="">
                Select Subject
              </option>
              <option
                className="text-sm font-oxanium"
                value="Fixed Louver Pergolas"
              >
                Fixed Louver Pergolas
              </option>
              <option
                className="text-sm font-oxanium"
                value="Retractable Roof Systems"
              >
                Retractable Roof Systems
              </option>
              <option
                className="text-sm font-oxanium"
                value="Adjustable Louvered Pergolas "
              >
                Adjustable Louvered Pergolas
              </option>
              <option
                className="text-sm font-oxanium"
                value="Outdoor Shading Solutions"
              >
                Outdoor Shading Solutions
              </option>
              <option
                className="text-sm font-oxanium"
                value="Motorized Screens and Blinds"
              >
                Motorized Screens and Blinds
              </option>
              <option
                className="text-sm font-oxanium"
                value="Car Parking Sheds Protection"
              >
                Car Parking Sheds Protection
              </option>
              <option className="text-sm font-oxanium" value="Have a Question">
                Have a Question
              </option>
              <option className="text-sm font-oxanium" value="Other">
                Other
              </option>
            </select>
          </div>
          {/* Email and Phone */}
          <div className="flex gap-4 mb-8">
            <div className="relative w-1/2">
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full border-b border-black bg-transparent text-gray-700 focus:outline-none focus:border-black"
              />
              <label
                htmlFor="email"
                className="absolute left-0 text-sm text-black transform -translate-y-6 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 font-oxanium transition-all duration-200"
              >
                Email
              </label>
            </div>
            <div className="relative w-1/2">
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder=" "
                className="peer w-full border-b border-black bg-transparent text-gray-700 focus:outline-none focus:border-black"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 text-sm text-black transform -translate-y-6 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 font-oxanium  transition-all duration-200"
              >
                Phone
              </label>
            </div>
          </div>
          {/* Message */}
          <div className="relative mb-4">
            <input
              required
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder=" "
              className="peer w-full border-b border-black bg-transparent text-gray-700 focus:outline-none focus:border-black"
            />
            <label
              htmlFor="message"
              className="absolute left-0 text-sm text-black transform -translate-y-6 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 font-oxanium transition-all duration-200"
            >
              Message
            </label>
          </div>
          <div className="mt-6 text-center flex justify-start">
            <button
              type="submit"
              className="bg-black font-oxanium  text-white font-normal py-2 px-4 flex gap-2 rounded-lg hover:scale-105 focus:ring-2 focus:ring-gray-800"
            >
              Submit{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdQj2kLqUnNwKT0Ayr7rqqP_0YPq8QxFqqw&s"
                alt="Contact Us"
                className="w-4 h-4 mt-1"
              />
            </button>
          </div>
          <div className="flex lg:justify-between justify-end  lg:items-center mt-6">
            <div className="hidden lg:flex justify-start lg:gap-10 gap-3">
              <Link
                to="/"
                className="text-gray-900 font-oxanium hover:underline text-sm"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="text-gray-900 font-oxanium hover:underline text-sm"
              >
                About
              </Link>
              <a
                to="/Services"
                className="text-gray-900 font-oxanium  hover:underline text-sm"
              >
                Services
              </a>
              <Link
                to="/Projects"
                className="text-gray-900 font-oxanium hover:underline text-sm"
              >
                Projects
              </Link>
            </div>

            <img src={Innovita} alt="Logo" className="w-30 h-10" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
