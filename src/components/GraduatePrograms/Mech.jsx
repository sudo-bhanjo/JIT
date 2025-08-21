import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import back from "./img_asset/back-button.jpg";
import lab1 from "./img_asset/me (1).jpeg";
import lab2 from "./img_asset/me (2).jpeg";
import lab3 from "./img_asset/me (3).jpeg";
import lab4 from "./img_asset/me (4).jpeg";
import lab5 from "./img_asset/me (5).jpeg";
import lab6 from "./img_asset/me (6).jpeg";
import lab7 from "./img_asset/me (10).jpeg";
import lab8 from "./img_asset/me (11).jpeg";
import lab9 from "./img_asset/me (12).jpeg";

const Mech = () => {
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
            Diploma in Mechanical Engineering
          </h1>
          <div className="text-center max-w-6xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our Diploma in Mechanical Engineering is designed for students
              passionate about machines, tools, manufacturing processes, and
              system design. The program blends theory with lab-based practicals
              to prepare students for roles in core and allied industries.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Key Learning Areas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Engineering Drawing & CAD",
                "Thermodynamics",
                "Manufacturing Technology",
                "Fluid Mechanics",
                "Strength of Materials",
                "Machine Design",
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
                icon: "🛠️",
                text: "Strong foundation in design, analysis & production",
              },
              {
                icon: "🏭",
                text: "Practical learning through mechanical workshops",
              },
              {
                icon: "⛓️",
                text: "Career flexibility across manufacturing, automotive, and aerospace",
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
              "Production Supervisor",
              "Quality Control Technician",
              "Maintenance Engineer",
              "AutoCAD Designer",
              "CNC Operator / Technician",
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

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 text-center">
  Explore Mechanical Engineering Labs
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { img: lab1, title: "Shaper Machine", desc: "Used for shaping and finishing metal workpieces with precision." },
    { img: lab2, title: "Centre Lathe Machine", desc: "For turning, facing, threading, and other machining operations." },
    { img: lab3, title: "Slotting Machine", desc: "Specialized for cutting slots, grooves, and keyways." },
    { img: lab4, title: "Drilling Machine", desc: "Used for drilling accurate holes in various materials." },
    { img: lab5, title: "Power Hacksaw", desc: "For cutting metal bars and sections with minimal effort." },
    { img: lab6, title: "Lathe Machine", desc: "Versatile machining tool for cylindrical workpieces." },
    { img: lab7, title: "Bench Grinder", desc: "For sharpening tools and grinding metal surfaces." },
    { img: lab8, title: "Hydraulic Trainer Kit", desc: "For understanding hydraulic circuits and fluid power systems." },
    { img: lab9, title: "Workshop Machine", desc: "Used for practical training and manufacturing experiments." },
  ].map((lab, idx) => (
    <div
      key={idx}
      className="rounded-xl overflow-hidden shadow-lg border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-100 hover:shadow-2xl transition-all duration-500"
    >
      <img
        src={lab.img}
        alt={lab.title}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#3c254a] mb-2">{lab.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{lab.desc}</p>
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

export default Mech;
