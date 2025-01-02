import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [activeLetter, setActiveLetter] = useState(0); // Track the active letter
  const text = "INNOVITA"; // Text to display

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLetter((prev) => {
        const next = (prev + 1) % text.length; // Loop the letters
        return next;
      });
    }, 400); // Change letter every 400ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [text.length]);

  const preloaderStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#000",
    zIndex: 1000,
  };

  const letterStyle = {
    display: "inline-block",
    animation: "bounce 0.5s ease-out infinite", // Add infinite animation
  };

  return (
    <div style={preloaderStyle}>
      {text.split("").map((letter, index) => (
        <span
          className="font-zen font-bold"
          key={index}
          style={{
            ...letterStyle,
            animation:
              index === activeLetter ? `bounce 0.5s ease-out` : undefined,
          }}
        >
          {letter}
        </span>
      ))}
      <style>
        {`
          @keyframes bounce {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
