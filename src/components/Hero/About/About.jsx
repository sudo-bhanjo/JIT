// import { GraduationCap, ArrowRight, Users, Briefcase, UserCheck } from "lucide-react";
// import img1 from "../../../assets/img1.jpg";
// import img2 from "../../../assets/img2.jpg";
// import React from "react";

// const About = () => {
//   // Function to handle counting animation
//   const animateCount = (element, start, end, duration) => {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       element.innerHTML = Math.floor(progress * (end - start) + start) + "+";
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   };

//   // Use effect to start animation on component mount
//   React.useEffect(() => {
//     const studentsElement = document.getElementById('students-count');
//     const placedElement = document.getElementById('placed-count');
//     const teachersElement = document.getElementById('teachers-count');
//     animateCount(studentsElement, 0, 2500, 2000);
//     animateCount(placedElement, 0, 950, 2000);
//     animateCount(teachersElement, 0, 95, 2000);
//   }, []);

//   return (
//     <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* Left column with university building image */}
//           <div className="lg:col-span-4 ">
//             <div className="rounded-3xl h-[500px] w-[350px] overflow-hidden border-4 border-[#f79f34ec] shadow-lg">
//               <img
//                 src={img1}
//                 alt="University building with dome"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Middle column with stats and student image */}
//           <div className="lg:col-span-3 flex flex-col gap-6">
//             {/* Years of Experience Box */}
//             <div className="bg-[#f79f34ec] text-white rounded-3xl p-6 shadow-md">
//               <div className="text-5xl font-bold">10+</div>
//               <div className="mt-2">Years of Experience</div>
//             </div>

//             {/* Student image */}
//             <div className="rounded-3xl overflow-hidden border-4 border-[#332258ec] shadow-lg flex-grow">
//               <img
//                 src={img2}
//                 alt="Student looking at university building"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right column with text content */}
//           <div className="lg:col-span-5">
//             {/* About Our University heading */}
//             <div className="flex items-center text-[#f79f34ec] mb-4">
//               <GraduationCap className="mr-2" size={26} />
//               <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
//                 Jalpaiguri Institute of Technology
//               </span>
//             </div>

//             {/* Main paragraph */}
//             <p className="text-teal-700 mb-4">
//               Established in 2015 by the visionary leader Mr. Kajal Sarkar,
//               Jalpaiguri Institute of Technology (JIT) was founded with the aim
//               of making technical education accessible and industry-relevant for
//               students in Jalpaiguri, West Bengal, and across North Bengal.
//             </p>

//             {/* Secondary paragraph */}
//             <p className="text-gray-600 mb-8">
//               At JIT, we are committed to delivering quality technical education
//               and shaping future-ready professionals. Located in the heart of
//               Jalpaiguri, West Bengal, our polytechnic college offers dynamic,
//               industry-relevant diploma courses designed to help students
//               kickstart promising careers in the world of engineering and
//               technology.
//             </p>

//             <p className="text-gray-600 mb-8">
//               We are committed to nurturing both technical excellence and
//               personal growth, equipping students with practical knowledge,
//               hands-on training, and ethical values to meet the demands of the
//               modern industry. Whether you dream of joining the workforce or
//               pursuing higher studies, JIT prepares you for both.
//             </p>

//             {/* Statistics Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-24 mb-8">
//               {/* Number of Students */}
//               <div className="bg-[#faeee0] text-center rounded-3xl p-6 shadow-md w-full sm:w-48">
//                 <Users className="mx-auto mb-2" size={32} />
//                 <div id="students-count" className="text-3xl font-bold">2500+</div>
//                 <div className="mt-2 font-bold text-gray-600">Students</div>
//               </div>

//               {/* Number of Placed Students */}
//               <div className="bg-[#e7ebff] text-center rounded-3xl p-6 shadow-md w-full sm:w-48">
//                 <Briefcase className="mx-auto mb-2" size={32} />
//                 <div id="placed-count" className="text-3xl font-bold">950+</div>
//                 <div className="mt-2 font-bold text-gray-600">Placed Students</div>
//               </div>

//               {/* Number of Teachers */}
//               <div className="bg-[#f8ebff] text-center rounded-3xl p-6 shadow-md w-full sm:w-48">
//                 <UserCheck className="mx-auto mb-2" size={32} />
//                 <div id="teachers-count" className="text-3xl font-bold">95+</div>
//                 <div className="mt-2 font-bold text-gray-600">Teachers</div>
//               </div>
//             </div>

//             {/* Read More button */}
//             <button className="bg-[#332258ec] hover:bg-[#f79f34ec] text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-300">
//               Read More
//               {/* <ArrowRight className="ml-2" size={20} /> */}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import { GraduationCap, Users, Briefcase, UserCheck } from "lucide-react";
// import img1 from "../../../assets/img1.jpg";
// import img2 from "../../../assets/img2.jpg";
import React from "react";
import college from "./about-asset/jit.jpg";

const About = () => {
  const animateCount = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start) + "+";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  React.useEffect(() => {
    const studentsElement = document.getElementById("students-count");
    const placedElement = document.getElementById("placed-count");
    const teachersElement = document.getElementById("teachers-count");
    animateCount(studentsElement, 0, 1500, 5000);
    animateCount(placedElement, 0, 450, 5000);
    animateCount(teachersElement, 0, 30, 5000);
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Video on the left */}
          <div className="lg:col-span-7">
            <img
              src={college}
              alt="college photo"
              className="w-full h-full rounded-md shadow-lg object-cover"
            />
          </div>

          {/* Text and stats on the right */}
          <div className="lg:col-span-5">
            <div className="flex items-center text-[#E87722] mb-4">
              <span className="font-medium text-xl sm:text-2xl lg:text-3xl">
                About Us
              </span>
            </div>

            <p className="text-teal-700 mb-4 text-sm sm:text-base">
              <strong>Jalpaiguri Institute of Technology (JIT)</strong> is a
              premier <strong>polytechnic college in West Bengal</strong>,
              dedicated to empowering students with hands-on technical education
              and industry-relevant skills. Located in the heart of{" "}
              <strong>Jalpaiguri</strong>, our campus is a hub of innovation,
              learning, and career-building for students from{" "}
              <strong>Siliguri, North Bengal</strong>, and across India.
            </p>

            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Since our inception in 2015, we have consistently delivered
              quality diploma engineering programs that combine academic rig or
              with real-world application, ensuring our graduates are job-ready
              and industry-relevant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#183f6d] text-center rounded-3xl p-4 shadow-md">
                <Users className="mx-auto mb-2 text-white" size={32} />
                <div
                  id="students-count"
                  className="text-2xl text-white font-bold"
                >
                  1500+
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  Students
                </div>
              </div>

              {/* 3c254a
E87722
f4a62f
183f6d
Fffffff */}

              <div className="bg-[#3c254a] text-center rounded-3xl p-4 shadow-md">
                <Briefcase className="mx-auto mb-2 text-white" size={32} />
                <div
                  id="placed-count"
                  className="text-2xl text-white font-bold"
                >
                  450+
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  Students placed
                </div>
              </div>

              <div className="bg-[#E87722] text-center rounded-3xl p-4 shadow-md">
                <UserCheck className="mx-auto mb-2 text-white" size={32} />
                <div
                  id="teachers-count"
                  className="text-2xl text-white font-bold"
                >
                  45+
                </div>
                <div className="mt-1 text-sm font-bold text-white">
                  Teachers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
