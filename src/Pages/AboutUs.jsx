import React from "react";
import HeroSection from "../Components/HeroForOthers";
import AboutUs from "../Components/About";
import HowWeDeliverSection from "../Components/HowDeliver";
import ContactForm from "../Components/ContactForm";
import { useState, useEffect } from "react";

const AboutPage = () => (
  <div>
    <HeroSection />
    <MeetOurTeam />
    <AboutUs />
    <HowWeDeliverSection />
    <ContactForm />
  </div>
);

export default AboutPage;

const teamMembers = [
  {
    id: 1,
    name: "Member Name 1",
    position: "Position 1",
    image:
      "https://img.freepik.com/premium-photo/handsome-senior-business-man-with-crossed-arms-smiling-camera_972478-9472.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Member Name 2",
    position: "Position 2",
    image:
      "https://img.freepik.com/premium-photo/handsome-senior-business-man-with-crossed-arms-smiling-camera_972478-9472.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Member Name 3",
    position: "Position 3",
    image:
      "https://img.freepik.com/premium-photo/handsome-senior-business-man-with-crossed-arms-smiling-camera_972478-9472.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Member Name 4",
    position: "Position 4",
    image:
      "https://img.freepik.com/premium-photo/handsome-senior-business-man-with-crossed-arms-smiling-camera_972478-9472.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Member Name 5",
    position: "Position 5",
    image:
      "https://img.freepik.com/premium-photo/handsome-senior-business-man-with-crossed-arms-smiling-camera_972478-9472.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
  },
  {
    id: 6,
    name: "Member Name 6",
    position: "Position 6",
    image:
      "https://img.freepik.com/premium-photo/handsome-senior-business-man-with-crossed-arms-smiling-camera_972478-9472.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="lg:h-[80vh] w-[100vw]  relative flex justify-center h-[80vh]">
      <div className="h-[100%] w-[90%] bg-white absolute -top-20 2xl:-top-36 z-20 rounded-xl flex lg:flex-row flex-col">
        <div className="h-[100%] lg:w-[30%]  rounded-xl flex justify-center items-center flex-col p-8  gap-10">
          <h2 className="text-5xl 2xl:text-6xl font-bold  text-center font-oxanium text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-md 2xl:text-xl  text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            voluptate at voluptatibus fugiat officia quibusdam neque aspernatur
            eaque quod dolorem, voluptatem nostrum, earum expedita voluptates
            perspiciatis ut officiis. Debitis, vero?
          </p>
        </div>
        <div className="h-[100%] lg:w-[70%]  rounded-xl  flex-col  hidden md:flex">
          <div className="flex h-[100%] w-[100%] gap-10  justify-center items-center lg:flex-row flex-col">
            <div
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29111.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid")',
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] lg:w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29111.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid")',
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>

            <div className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl 2xl:text-3xl">
              This is our Exceptional team, We are the best !!!
            </div>
          </div>
          <div className=" h-[100%] w-[100%] gap-10  justify-center items-center hidden md:flex ">
            <div
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29111.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid")',
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold  2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29111.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid")',
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
            <div
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29111.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid")',
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center",
              }}
              className="h-[90%] w-[25%] bg-black rounded-xl text-white flex items-end pl-5 pb-5 font-oxanium text-2xl relative font-semibold 2xl:text-3xl"
            >
              CEO
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="h-[100%] lg:w-[70%]  rounded-xl  flex-col  overflow-hidden flex sm:hidden">
          <PortfolioSlider />
        </div>
      </div>
    </div>
  );
};

const PortfolioSlider = () => {
  // Sample image URLs for the slider
  const images = [
    "https://images2.alphacoders.com/134/1347182.png", // Image 2
    "https://images5.alphacoders.com/134/1347174.png", // Image 3
    "https://media.licdn.com/dms/image/v2/D5612AQH9nBuZE1m2Cw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1677167203600?e=1738800000&v=beta&t=6lL1xp8uk2NtmzSxfyKS8b7oIiZDyXtGENt9epFllkg", // Image 4
    "https://images4.alphacoders.com/133/thumb-1920-1338578.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="relative w-[100%] h-[100%] mx-auto  overflow-hidden  rounded-lg bg-gray-300 flex flex-col">
        <div
          className="absolute top-0 left-0 h-full flex transition-all duration-1000"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt={`slider-img-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <ul className="absolute bottom-5 left-0 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <li
              key={index}
              className={`w-2.5 h-2.5 bg-white rounded-full cursor-pointer ${
                activeIndex === index ? "w-6" : "w-2.5"
              } transition-all duration-300`}
              onClick={() => setActiveIndex(index)}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};
