import React, { useEffect } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import back from "./img_asset/back-button.jpg";

const Humanitics_general = () => {
  useEffect(() => {
    console.log("Working");
  }, []);

  return (
    <>
      <div className="mt-30 px-6 md:px-20 py-10 bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-purple-200">
          
          {/* Back Button */}
          <Link to="/#departments" className="mb-6 inline-block">
            <img
              src={back}
              alt="Go Back"
              className="w-10 h-10 hover:scale-105 transition-transform cursor-pointer"
            />
          </Link>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c254a] mb-6 text-center">
            Humanities & Basic Sciences
          </h1>

          {/* Intro */}
          <div className="text-center max-w-6xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              The Department of Humanities & Basic Sciences plays a key role in laying a strong academic foundation for first-year engineering students. Our curriculum is designed to strengthen scientific and communication skills essential for technical careers.
            </p>
          </div>

          {/* Subjects Offered */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Key Learning Areas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Physics",
                "Chemistry",
                "Mathematics",
                "English Communication Skills"
              ].map((subject, idx) => (
                <div
                  key={idx}
                  className="group bg-white hover:bg-[#3c254a] transition duration-400 p-4 rounded-md shadow-sm border border-gray-200 flex items-center justify-center text-center select-none"
                >
                  <p className="text-gray-700 group-hover:text-white">
                    {subject}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Study Here */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-10">
            Why Choose Humanities & Basic Sciences?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: "📘",
                text: "Build a strong academic base for future engineering studies",
              },
              {
                icon: "🧠",
                text: "Enhance analytical thinking and problem-solving abilities",
              },
              {
                icon: "🗣️",
                text: "Improve English communication and soft skills for industry readiness",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-4 bg-gray-50 rounded-md hover:bg-[#3c254a] transition duration-400"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-700 group-hover:text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Career Opportunities */}
          <h2 className="text-xl font-semibold text-gray-800 mb-6 pt-10">
            Career Readiness Benefits:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Better performance in advanced engineering subjects",
              "Strong fundamentals for competitive exams",
              "Enhanced written and verbal communication",
              "Preparation for professional and technical presentations",
            ].map((point, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 hover:bg-[#3c254a] hover:text-white transition duration-300"
              >
                <span className="text-xl">🎯</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Humanitics_general;
