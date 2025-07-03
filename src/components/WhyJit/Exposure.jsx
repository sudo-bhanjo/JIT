// import React from "react";
// import bgMap from "../../assets/SimpleBackground.webp";
// import curveLine from "../../assets/Snack_Line.png";

// import iconGlobal from "../../assets/icon1.png";
// import iconSchool from "../../assets/icon2.webp";
// import iconExchange from "../../assets/icon3.png";
// import iconInternship from "../../assets/icon4.png";
// import iconCredit from "../../assets/icon5.png";

// const items = [
//     {
//         icon: iconGlobal,
//         title: "300+ Students Experienced",
//         subtitle: "Global Opportunities",
//     },
//     {
//         icon: iconSchool,
//         title: "Summer",
//         subtitle: "School Programs",
//     },
//     {
//         icon: iconExchange,
//         title: "Semester Exchange/",
//         subtitle: "Short Term Programs",
//     },
//     {
//         icon: iconInternship,
//         title: "International",
//         subtitle: "Internship Programs",
//     },
//     {
//         icon: iconCredit,
//         title: "Credit Transfer or",
//         subtitle: "1+2 & 2+2 Program",
//     },
// ];

// const GlobalExposureSection = () => {
//     return (
//         <section
//             className="relative w-full bg-no-repeat bg-cover py-16 px-4 md:px-8 lg:px-20 text-white"
//             style={{ backgroundImage: `url(${bgMap})` }}
//         >
//             <div className="text-center mb-12">
//                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 pb-10">
//                     Pioneering Pathways with Worldwide Exposure
//                 </h2>
//             </div>

//             <div className="relative">
//                 <img
//                     src={curveLine}
//                     alt="snack curve"
//                     className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 pointer-events-none z-0"
//                 />

//                 <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-start text-center">
//                     {items.map((item, idx) => (
//                         <div
//                             key={idx}
//                             className="flex flex-col items-center justify-center"
//                         >
//                             <div className="rounded-full border-2 border-white p-2">
//                                 <div className="bg-[#FFDA47] rounded-full w-28 h-28 flex items-center justify-center shadow-lg">
//                                     <img src={item.icon} alt="icon" className="w-12 h-12" />
//                                 </div>
//                             </div>
//                             <h3 className="mt-4 text-white text-lg font-bold leading-tight">
//                                 {item.title}
//                             </h3>
//                             <p className="text-white text-base">{item.subtitle}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default GlobalExposureSection;

import React from "react";
import bgMap from "../../assets/SimpleBackground.jpg";

import {
  FaUniversity,
  FaChalkboardTeacher,
  FaFlask,
  FaHandshake,
  FaRupeeSign,
} from "react-icons/fa";

const items = [
  {
    icon: (
      <FaUniversity className="text-2xl sm:text-3xl lg:text-4xl text-[#E87722]" />
    ),
    title: "Government-Recognized Polytechnic Diploma Courses",
  },
  {
    icon: (
      <FaChalkboardTeacher className="text-2xl sm:text-3xl lg:text-4xl text-[#E87722]" />
    ),
    title: "Experienced Faculty & Industry-Driven Curriculum",
  },
  {
    icon: (
      <FaFlask className="text-2xl sm:text-3xl lg:text-4xl text-[#E87722]" />
    ),
    title: "Modern Laboratories & Infrastructure",
  },
  {
    icon: (
      <FaHandshake className="text-2xl sm:text-3xl lg:text-4xl text-[#E87722]" />
    ),
    title: "Placement Support & Industry Tie-Ups",
  },
  {
    icon: (
      <FaRupeeSign className="text-2xl sm:text-3xl lg:text-4xl text-[#E87722]" />
    ),
    title: "Affordable Fee Structure",
  },
];

const GlobalExposureSection = () => {
  return (
    <section
      className="relative w-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 bg-no-repeat bg-cover bg-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 text-white min-h-[600px] sm:min-h-[400px] lg:min-h-[500px]"
      style={{ backgroundImage: `url(${bgMap})` }}
    >
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f8c685] leading-tight">
            Why Choose JIT?
          </h2>
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Snake Line Image - Hidden on mobile for better UX */}
          <img
            src="/Snack_line.png"
            alt="snack curve"
            className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 pointer-events-none z-0 hidden lg:block opacity-80"
          />

          {/* Grid Layout - Responsive */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 xl:gap-6 items-center">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 ${
                  // Alternate layout for desktop - items 1 and 3 (index 1 and 3) have text on top
                  idx === 1 || idx === 3 ? "lg:flex-col-reverse" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="rounded-full border-2 border-white p-1 sm:p-2 mb-4 lg:mb-0 transition-all duration-300 hover:border-[#f8c685]">
                  <div className="bg-[#f4d6ae] rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#f8c685]">
                    {item.icon}
                  </div>
                </div>

                {/* Text Container */}
                <div
                  className={`${
                    idx === 1 || idx === 3 ? "lg:mb-4" : "lg:mt-4"
                  }`}
                >
                  <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold leading-tight px-2 sm:px-4 lg:px-2 max-w-[200px] sm:max-w-[250px] lg:max-w-[180px] mx-auto transition-colors duration-300 hover:text-[#f8c685]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Alternative Layout - Simplified snake pattern */}
          <div className="lg:hidden mt-8">
            <div className="flex justify-center">
              <svg
                width="100%"
                height="50"
                viewBox="0 0 300 50"
                className="max-w-md opacity-60"
              >
                <path
                  d="M0,25 Q75,5 150,25 T300,25"
                  stroke="#f8c685"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExposureSection;
