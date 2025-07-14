import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import back from "./img_asset/back-button.jpg";

const CSE = () => {
  // const navigate = useNavigate();

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
            Diploma in Computer Science & Engineering
          </h1>
          <div className="text-center max-w-6xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Get future-ready with our Diploma in Computer Science &
              Technology, ideal for students interested in coding, software
              development, networking, and modern computing technologies. This
              course is built to meet the growing demands of the IT industry.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Key Learning Areas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Programming in C, Java & Python",
                "Web & Mobile App Development",
                "Data Structures & Algorithms",
                "Computer Networks & Cybersecurity",
                "Database Management Systems",
                "Operating Systems & Cloud Basics",
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
                icon: "💻",
                text: "Project-based learning with real-world coding experience",
              },
              {
                icon: "☁️",
                text: "Exposure to latest technologies like cloud, AI & cybersecurity",
              },
              {
                icon: "🌍",
                text: "High employability in both startups and global tech firms",
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
              "App Tester / Junior Programmer",
              "Network Administrator",
              "Data Entry & Processing",
              "IT Support Engineer",
              "Software Developer / Web Developer",
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

export default CSE;
