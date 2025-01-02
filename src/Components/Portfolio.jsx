import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSlider = () => {
  const leftCards = useRef([]);
  const rightCards = useRef([]);

  // Array of images for left and right cards
  const images = [
    {
      right:
        "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695915.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
      left: "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695915.jpg?ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    },
    {
      right:
        "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152152.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
      left: "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152152.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    },
    {
      left: "https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-145822.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
      right:
        "https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-145822.jpg?uid=R112225553&ga=GA1.1.2079436003.1694496204&semt=ais_hybrid",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      leftCards.current.forEach((card, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card, // Each card is its own trigger
              start: "top 80%", // Start when the card's top enters 80% of the viewport
              end: "top 30%", // End when the card's top reaches 30% of the viewport
              scrub: true, // Smoothly link animation progress to scroll
            },
          })
          .fromTo(
            card,
            {
              x: "-100vw", // Start off-screen to the left
              opacity: 0,
            },
            {
              x: "0vw", // Move to the original position
              opacity: 1, // Fully visible
              duration: 1,
              ease: "power4.out", // Smooth easing
            }
          );
      });

      rightCards.current.forEach((card, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: card, // Each card is its own trigger
              start: "top 80%", // Start when the card's top enters 80% of the viewport
              end: "top 30%", // End when the card's top reaches 30% of the viewport
              scrub: true, // Smoothly link animation progress to scroll
            },
          })
          .fromTo(
            card,
            {
              x: "100vw", // Start off-screen to the right
              opacity: 0,
            },
            {
              x: "0vw", // Move to the original position
              opacity: 1, // Fully visible
              duration: 1,
              ease: "power4.out", // Smooth easing
            }
          );
      });
    });

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div className="w-screen lg:h-[200vh] h-[100vh] flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 text-center">
        <span className="font-bir text-[10vh] font-[400]">-</span> Portfolio
        Gallery
      </h2>
      <h2 className="text-xl md:text-3xl font-bold font-oxanium text-gray-800 mb-10">
        Our Work
        <span className="font-bir lg:text-[10vh] text-[7vh]"> speaks</span>
      </h2>

      {images.map((image, index) => (
        <div
          key={index}
          className="flex w-full h-[100vh] justify-center items-center mb-[-10vh] relative gap-10"
        >
          {/* Left Card */}
          <div
            ref={(el) => (leftCards.current[index] = el)}
            className="w-[80%]  h-[100%] bg-orange-400 shadow-lg overflow-hidden absolute"
            style={{
              clipPath: "polygon(0 0, 0% 100%, 100% 100%)", // Bottom triangular cut
            }}
          >
            <img
              src={image.left}
              alt={`Left Card ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            ref={(el) => (rightCards.current[index] = el)}
            className="w-[80%]  h-full bg-orange-400 shadow-lg overflow-hidden absolute"
            style={{
              clipPath: "polygon(100% 100%, 100% 0, 0 0)", // Top triangular cut
            }}
          >
            <img
              src={image.right}
              alt={`Right Card ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSlider;
