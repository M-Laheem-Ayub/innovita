import React from "react";
import G1 from "../assets/servicePage/G1.jpg";
import G2 from "../assets/servicePage/G2.jpg";
import G3 from "../assets/servicePage/G3.png";
import G4 from "../assets/servicePage/G4.png";
const Feature = () => {
  return (
    <div>
      <div className=" lg:h-[200vh] w-[100vw] h-[100vh]">
        <div className=" h-[15%] w-[100vw] flex p-10 pb-0 lg:border-b border-black items-end">
          <div className="h-[100%] w-[100%] lg:w-[50%] flex justify-start items-center">
            <h2 className="text-5xl 2xl:text-6xl font-bold font-oxanium text-gray-800  mt-10 lg:mb-0 lg:mt-0 text-center lg:text-left">
              Featured Projects
            </h2>
          </div>
        </div>
        <a href="#contact">
          <div className="h-[42.5%] w-[100vw]  mt-20 lg:mt-0">
            <div className="h-[80%] w-[100%] flex ">
              <div className="h-[100%] w-[50%]  flex justify-center items-center flex-col lg:border-r lg:border-black">
                <div
                  className="h-[80%] w-[80%] hover:scale-105 z-10"
                  style={{
                    backgroundImage: `url(${G1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 className="text-left font-oxanium font-normal text-2xl pt-5 w-[80%]">
                  Luxury Fixed Louver Pergolas ...
                </h3>
              </div>
              <div className="h-[100%] w-[50%]  flex justify-center items-center flex-col">
                <div
                  className="h-[80%] w-[80%]  hover:scale-105"
                  style={{
                    backgroundImage: `url(${G2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 className="text-left font-oxanium font-normal text-2xl pt-5 w-[80%]">
                  Retractable Roof Systems ...
                </h3>
              </div>
            </div>
          </div>
        </a>
        <a href="#contact">
          <div className="h-[42.5%] w-[100vw]">
            <div className="h-[80%] w-[100%] flex">
              <div className="h-[100%] w-[50%]  flex justify-center items-center flex-col lg:border-r lg:border-b lg:border-black">
                <div
                  className="h-[80%] w-[80%]  hover:scale-105"
                  style={{
                    backgroundImage: `url(${G3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 className="text-left font-oxanium font-normal text-2xl pt-5 w-[80%]">
                  Adjustable Louvered Pergolas ...
                </h3>
              </div>
              <div className="h-[100%] w-[50%]  flex justify-center items-center flex-col lg:border-b lg:border-black ">
                <div
                  className="h-[80%] w-[80%]  hover:scale-105"
                  style={{
                    backgroundImage: `url(${G4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 className="text-left font-oxanium font-normal text-2xl pt-5  w-[80%]">
                  Outdoor Shading Solutions ...
                </h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Feature;
