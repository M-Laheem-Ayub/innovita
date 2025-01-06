import React, { useState } from "react";
import H1 from "../assets/Hero/H1.jpg";
import H2 from "../assets/Hero/H2.jpg";
import H3 from "../assets/Hero/H3.jpg";
import H4 from "../assets/Hero/H4.jpg";
import H5 from "../assets/Hero/H5.jpg";
import H6 from "../assets/Hero/H6.jpg";
import S1 from "../assets/service/s1.png";
import S2 from "../assets/service/s2.png";
import S5 from "../assets/service/s5.png";

const Pintrest = () => {
  // Images with categories
  const images = [
    { src: H1, category: "Adjustable-Louvered", text: "Adjustable Louvered" },
    { src: H2, category: "Fixed-Louvered", text: "Fixed Louvered" },
    {
      src: H3,
      category: "Outdoor-Shading-Solutions",
      text: "Outdoor Shading Solutions",
    },
    {
      src: H4,
      category: "Outdoor-Shading-Solutions",
      text: "Outdoor Shading Solutions",
    },
    { src: H5, category: "Adjustable-Louvered", text: "Adjustable Louvered" },
    { src: H6, category: "Fixed-Louvered", text: "Fixed Louvered" },
    { src: S1, category: "Adjustable-Louvered", text: "Adjustable Louvered" },
    {
      src: S2,
      category: "Outdoor-Shading-Solutions",
      text: "Outdoor Shading Solutions",
    },
    { src: S5, category: "Fixed-Louvered", text: "Fixed Louvered" },
  ];

  const [filter, setFilter] = useState("All"); // State to track selected filter

  // Filter images based on the selected category
  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="p-6 mt-12 lg:p-16 lg:mt-0">
      <h2 className="2xl:text-5xl lg:text-left text-center text-5xl font-bold font-oxanium text-gray-800 mb-12">
        Related Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 space-x-4 font-zen flex-wrap gap-3">
        {[
          "All",
          "Adjustable-Louvered",
          "Fixed-Louvered",
          "Outdoor-Shading-Solutions",
        ].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              filter === category
                ? "bg-black text-white"
                : "bg-black text-white"
            } hover:bg-white hover:text-black hover:border hover:border-black`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg aspect-square hover:scale-105 transition-transform duration-300 ease-linear group"
          >
            <img
              src={image.src}
              alt="Interior Design Services in Dubai, Interior Design Services in UAE, Interior Design Services near me"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="text-white text-xl font-semibold font-zen">
                {image.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pintrest;
