import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import P1 from "../assets/portfolio/P1.webp";
import P2 from "../assets/portfolio/P3.webp";
import P3 from "../assets/portfolio/P2.webp";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSlider = () => {
  const leftCards = useRef([]);
  const rightCards = useRef([]);

  // Array of images for left and right cards
  const images = [
    {
      img: P1,
    },
    {
      img: P2,
    },
    {
      img: P3,
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
    <div className="w-screen h-fit  flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 text-center">
        <span className="font-bir text-[10vh] font-[400]">-</span> Portfolio
        Gallery
      </h2>
      <h2 className="text-xl md:text-3xl font-bold font-oxanium text-gray-800 mb-10">
        Our Work
        <span className="font-bir lg:text-[10vh] text-[7vh] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text ml-3">
          speaks
        </span>
      </h2>
    </div>
  );
};

export default PortfolioSlider;
