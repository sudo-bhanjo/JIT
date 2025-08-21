import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import back from "./img_asset/back-button.jpg";

// Example lab images (replace with real ones later)
import lab1 from "./img_asset/eee2 (1).jpeg";
import lab2 from "./img_asset/eee2 (2).jpeg";
import lab3 from "./img_asset/eee2 (3).jpeg";
import lab4 from "./img_asset/eee2 (17).jpeg"; // New image

const EEE = () => {
  const labs = [
    {
      name: "Electrical Machines Lab",
      img: lab1,
      desc: "Hands-on training with transformers, motors, and generators.",
    },
    {
      name: "Power Systems Lab",
      img: lab2,
      desc: "Study of power generation, transmission, and distribution systems.",
    },
    {
      name: "Control Systems Lab",
      img: lab3,
      desc: "Experimentation with PLCs, automation, and control circuits.",
    },
    {
      name: "Electrical & Electronics Measurement Lab",
      img: lab4,
      desc: "Practical experiments with measurement devices and testing equipment.",
    },
  ];

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

          {/* === Course Intro === */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c254a] mb-6 text-center">
            Diploma in Electrical Engineering
          </h1>
          <div className="text-center max-w-6xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Power up your career with the Diploma in Electrical Engineering at
              JIT. This course focuses on electrical systems, power generation,
              distribution, machine operations, and emerging fields like
              renewable energy and automation.
            </p>
          </div>

          {/* === Key Learning Areas === */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Key Learning Areas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Basic Electrical & Electronics Engineering",
                "Electrical Machines & Drives",
                "Power Systems & Distribution",
                "Switchgear and Protection",
                "PLC and Control Systems",
                "Renewable Energy Technologies",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white hover:bg-[#3c254a] transition duration-400 p-4 rounded-md shadow-sm border border-gray-200 flex items-center justify-center text-center select-none"
                >
                  <p className="text-gray-700 group-hover:text-[#fff]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* === Why Choose This Course === */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-4">
            Why Choose This Course?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "🚂",
                text: "Vast demand in energy, manufacturing, railways, and telecom",
              },
              {
                icon: "🔌",
                text: "Strong lab exposure with electrical machines and circuits",
              },
              {
                icon: "💼",
                text: "Foundation for government and private sector jobs",
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

          {/* === Career Opportunities === */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-10">
            Career Opportunities:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Electrical Maintenance Technician",
              "Power Plant Operator",
              "Electrician Supervisor",
              "PLC Programmer",
              "Substation Assistant",
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

          {/* === EEE Labs Section === */}
          <h2 className="text-2xl font-bold text-center text-[#3c254a] mt-12 mb-8">
            Electrical Engineering Labs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {labs.map((lab, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition duration-300"
              >
                <img
                  src={lab.img}
                  alt={lab.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {lab.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{lab.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EEE;
