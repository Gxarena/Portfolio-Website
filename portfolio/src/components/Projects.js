import React from "react";
import WorkIMG from "../assets/apexAPP.png";
import WeatherApp from '../assets/WeatherApp.png'

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#373e98]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my projects!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkIMG})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider flex drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] justify-center text-center">
                Apex Legends Player Stat Tracker
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://apexlegendstracker.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-black hover:bg-opacity-80 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Gxarena/Apex-Legends-Tracker"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-black hover:bg-opacity-80 hover:text-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] flex justify-center text-center">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://weatheapponline.netlify.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-black hover:bg-opacity-80 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Gxarena/WeatherAPI"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-black hover:bg-opacity-80 hover:text-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
