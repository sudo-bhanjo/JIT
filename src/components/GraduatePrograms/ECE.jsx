import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import back from "./img_asset/back-button.jpg";

const ECE = () => {
  return (
    <>
      <div className="mt-30 px-6 md:px-20 py-10 bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-purple-200">
          <Link to="/#departments" className="mb-6 inline-block">
            <img
              src={back}
              alt="Go Back"
              className="w-10 h-10 hover:scale-105 transition-transform cursor-pointer"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c254a] mb-6 text-center">
            Diploma in Electronics & Communication Engineering
          </h1>
          <div className="text-center max-w-6xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Step into the world of innovation with our Diploma in Electronics
              & Communication Engineering (ECE). This program teaches the
              principles of analog & digital electronics, microcontrollers,
              communication systems, and embedded technologies.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Key Learning Areas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Electronic Devices & Circuits",
                "Digital & Analog Communication",
                "Microprocessors and Microcontrollers",
                "Embedded Systems",
                "Signal Processing",
                "Internet of Things (IoT) Basics",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white hover:bg-[#3c254a] transition duration-400 p-4 rounded-md shadow-sm border border-gray-200 flex items-center justify-center text-center
 select-none"
                >
                  <p className="text-gray-700 group-hover:text-[#fff]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-4">
            Why Choose This Course?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "👨‍💻",
                text: "Skill-based program aligned with industry 4.0 technologies",
              },
              {
                icon: "🔉",
                text: "Hands-on projects using Arduino, sensors, microcontrollers",
              },
              {
                icon: "📻",
                text: "High scope in telecom, IT, and automation sectors",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-[#3c254a] transition duration-400"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-700 group-hover:text-[#fff]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-10">
            Career Opportunities:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Electronics Technician",
              "Communication Network Assistant",
              "Embedded System Developer",
              "Quality Testing Engineer",
              "Telecom Service Technician",
            ].map((role, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 hover:bg-[#3c254a] hover:text-white transition duration-300"
              >
                <span className="text-xl">🎯</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ECE;
