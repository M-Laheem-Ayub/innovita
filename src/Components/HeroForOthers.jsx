import React, { useEffect, useState } from "react";
import Header from "./Header";
import S1 from "../assets/servicePage/S1.jpg";
const HeroSection = () => {
  return (
    <>
      <Header />
      <div className=" h-[90vh] w-[100vw]">
        <div className=" h-[25%] w-[100vw] p-10">
          <h1 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 text-left">
            Furniture <span className="font-bir">&</span> Interior
          </h1>
        </div>
        <div className=" h-[25%] w-[100vw] flex flex-col lg:text-center p-10 pt-0 ">
          <h1 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 lg:text-center text-left">
            Design Services
          </h1>
          <p className="font-bir text-2xl">
            we have the best furniture and interoir design services
          </p>
        </div>
        <div
          className=" h-[50%] w-[95vw] m-auto rounded-xl"
          style={{
            backgroundImage: `url(${S1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default HeroSection;
