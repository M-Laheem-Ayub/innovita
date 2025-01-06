import React from "react";

const Timeline = () => {
  return (
    <div
      className="lg:p-16 h-[100vh] flex justify-center items-center flex-col mt-16"
      style={{
        background:
          "linear-gradient(-45deg, #ffffff, #e0e0e0, #c0c0c0, #ffffff)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      }}
    >
      <div className="lg:mb-20 2xl:mb-28 mb-0  2xl:w-[35%] lg:w-[35%] w-[100%] ">
        {" "}
        <h2 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800 mb-5 text-center ">
          How We deliver &nbsp;
          <span className="font-bir lg:text-[10vh] text-[7vh] bg-gradient-to-r from-gray-400 via-gray-700 to-black text-transparent bg-clip-text">
            the services
          </span>
        </h2>
      </div>

      <ol className="items-center  sm:flex p-10">
        {/* First item */}
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-3 h-3 bg-black lg:bg-white rounded-full ring-0 ring-black dark:bg-black sm:ring-8 dark:ring-black shrink-0"></div>
            <div className="hidden sm:flex w-full bg-black h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8 border-l border-dashed border-black p-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              01 | Consultantion
            </h3>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive
              elements.
            </p>
          </div>
        </li>

        {/* Second item */}
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-3 h-3 bg-black lg:bg-white rounded-full ring-0 ring-black dark:bg-black sm:ring-8 dark:ring-black shrink-0"></div>
            <div className="hidden sm:flex w-full bg-black h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className=" mt-3 sm:pe-8 border-l border-dashed border-black p-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              02 | Design
            </h3>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive
              elements.
            </p>
          </div>
        </li>

        {/* Third item */}
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-3 h-3 bg-black lg:bg-white rounded-full ring-0 ring-black dark:bg-black sm:ring-8 dark:ring-black shrink-0"></div>
            <div className="hidden sm:flex w-full bg-black h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8 border-l border-dashed border-black p-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              03 | Executation
            </h3>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive
              elements.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
