// import React from "react";
// import {
//   FaChalkboardTeacher,
//   FaUniversity,
//   FaFlask,
//   FaHandshake,
//   FaRupeeSign,
//   FaShieldAlt,
// } from "react-icons/fa";

// const WhyJit = () => {
//   const features = [
//     {
//       icon: <FaUniversity className="text-3xl text-[#E87722]" />,
//       title: "Government-Recognized Polytechnic Diploma Courses",
//     },
//     {
//       icon: <FaChalkboardTeacher className="text-3xl text-[#E87722]" />,
//       title: "Experienced Faculty & Industry-Driven Curriculum",
//     },
//     {
//       icon: <FaFlask className="text-3xl text-[#E87722]" />,
//       title: "Modern Laboratories & Infrastructure",
//     },
//     {
//       icon: <FaHandshake className="text-3xl text-[#E87722]" />,
//       title: "Placement Support & Industry Tie-Ups",
//     },
//     {
//       icon: <FaRupeeSign className="text-3xl text-[#E87722]" />,
//       title: "Affordable Fee Structure",
//     },
//     {
//       icon: <FaShieldAlt className="text-3xl text-[#E87722]" />,
//       title: "Safe, Student-Friendly Campus Environment",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-br from-[#eef6fd] to-[#dceffc] px-4 md:px-10 py-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#E87722] relative inline-block">
//             Why Choose JIT?
//             <span className="block h-1 w-24 bg-[#f4a62f] mx-auto mt-2 rounded"></span>
//           </h2>
          
//           <div className="extra">
//             <p>
//               At JIT Polytechnic, we go beyond classrooms with industry visits,
//               workshops, and student-led events, fostering holistic growth.
//               Students thrive in an environment designed to help them grow,
//               lead, and succeed.
//             </p>
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-100 hover:border-orange-200 shadow-md hover:shadow-orange-200 rounded-2xl p-6 flex items-center justify-center gap-4 transform transition duration-300 hover:scale-[1.02]"
//             >
//               <div className="flex-shrink-0 bg-orange-100 p-3 rounded-full">
//                 {feature.icon}
//               </div>
//               <p className="text-gray-800 font-medium text-base leading-snug">
//                 {feature.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyJit;










import React from 'react';
import l from '../WhyJit/left.png';
import r from '../WhyJit/right.png';
import m from '../WhyJit/clg.jpg';
import {
  FaUniversity,
  FaWifi,
  FaChalkboardTeacher,
  FaFlask,
  FaHandshake,
  FaRupeeSign,
  FaShieldAlt
} from 'react-icons/fa';
import { ArrowBigRight } from 'lucide-react';


const WhyJIT = () => {
  return (
    <div className='mt-10'>
      {/* Header */}
      <div className="w-full bg-[#dceffc] py-4 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-[#e88e4a] mt-2"> Why Choose JIT?</h2>
      </div>

      {/* Main container with flex */}
      <div className="bg-[#dceffc] flex items-center justify-center h-[450px] w-full overflow-hidden px-10 -mt-8">

        {/* Left Side */}
        <div
          className="relative w-[150px] h-[300px]"
          style={{
            backgroundImage: `url(${l})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '126px 300px',
            backgroundPosition: 'left top',
          }}
        >  
        <div className="flex flex-col justify-between h-full">
          {/* FaUniversity block */}
          <div className="group flex flex-row-reverse items-center space-x-4 -mt-3">
            <div className="bg-orange-200 text-[#E87722] p-6 rounded-full text-xl border-[1px] border-orange-350 transition-transform duration-500 group-hover:animate-spin">
              <FaUniversity className='w-6 h-6'/>
            </div>
            <span className=" font-bold mr-6 transition-all duration-300 group-hover:-translate-y-1">
            Govt.Diploma Courses
            </span>
          </div>

          {/* FaFlask block */}
          <div className="group flex flex-row-reverse items-center space-x-4 mr-16">
            <div className="bg-orange-200 text-[#E87722] p-6 rounded-full text-xl border-[1px] border-orange-350 transition-transform duration-500 group-hover:animate-spin">
              <FaFlask className='w-6 h-6'  />
            </div>
            <span className=" font-bold mr-6 transition-all duration-300 group-hover:-translate-y-1">
            Modern Labs
            </span>
          </div>

          {/* FaChalkboardTeacher block */}
          <div className="group flex flex-row-reverse items-center space-x-3">
            <div className="bg-orange-200 text-[#E87722] p-6 rounded-full text-xl mr-6 -mb-1.5 border-[1px] border-orange-350 transition-transform duration-500 group-hover:animate-spin">
              <FaChalkboardTeacher className='w-6 h-6' />
            </div>
            <span className="font-bold mr-8 transition-all duration-300 group-hover:-translate-y-1">
            Experienced Faculty
            </span>
          </div>
        </div>
        </div>

        {/* Center Image */}
        <div className="">
           <img
            src={m}
            alt="Campus"
            className="w-90 h-90 rounded-full border-[14px] border-orange-200"  //border-t-[#dceffc] border-b-[#dceffc]
          /> 
        </div>

        {/* Right Side */}
        <div
          className="relative w-[150px] h-[300px]"
          style={{
            backgroundImage: `url(${r})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '126px 300px',
            backgroundPosition: 'right top',
          }}
        >


        <div className="flex flex-col justify-between h-full">
          {/* FaHandshake block */}
          <div className="group flex flex-row-reverse items-center space-x-2 justify-end  -mt-2 ml-5">
            <span className=" font-bold text-right ml-10 transition-all duration-300 group-hover:-translate-y-1">
              Placement Partnerships
            </span>
            <div className="bg-orange-200 text-[#E87722] border-[1px] border-orange-350 p-6 rounded-full text-xl transition-transform duration-500 group-hover:animate-spin">
              <FaHandshake  className='w-6 h-6'/>
            </div>
          </div>

          {/* FaRupeeSign block */}
          <div className="group flex flex-row-reverse items-center space-x-2 justify-end ml-20 mt-7">
            <span className=" font-bold text-right ml-4 transition-all duration-300 group-hover:-translate-y-1">
            Affordable Fees
            </span>
            <div className="bg-orange-200 text-[#E87722]  p-6 rounded-full text-xl transition-transform duration-500 group-hover:animate-spin mb-4 border-[1px] border-orange-350">
              <FaRupeeSign className='w-6 h-6' />
            </div>
          </div>

          {/* FaShieldAlt block */}
          <div className="group flex flex-row-reverse items-center justify-end ml-5 -mb-9">
            <span className=" font-bold text-right ml-8 transition-all duration-300 group-hover:-translate-y-1">
              Trusted Environment 
            </span>
            <div className="bg-orange-200 text-[#E87722]  p-6 rounded-full text-xl transition-transform duration-500 group-hover:animate-spin mb-8
            border-[1px] border-orange-350">
              <FaShieldAlt className='w-6 h-6' />
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default WhyJIT;






























// import React from "react";
// import example from '../WhyJit/building.jpg'
// import {
//   FaChalkboardTeacher,
//   FaUniversity,
//   FaFlask,
//   FaHandshake,
//   FaRupeeSign,
//   FaShieldAlt,
// } from "react-icons/fa";

// const features = [
//     {
//       icon: <FaUniversity className="text-2xl text-[#E87722]" />,
//       title: "Govt. Accredited Diploma Courses",
//     },
//     {
//       icon: <FaChalkboardTeacher className="text-2xl text-[#E87722]" />,
//       title: "Expert Faculty & Industry-Aligned Curriculum",
//     },
//     {
//       icon: <FaFlask className="text-2xl text-[#E87722]" />,
//       title: "Modern Laboratories & Infrastructure",
//     },
//     {
//       icon: <FaHandshake className="text-2xl text-[#E87722]" />,
//       title: "Placement Support & Industry Tie-Ups",
//     },
//     {
//       icon: <FaRupeeSign className="text-2xl text-[#E87722]" />,
//       title: "Affordable Fee Structure",
//     },
//     {
//       icon: <FaShieldAlt className="text-2xl text-[#E87722]" />,
//       title: "Safe & Friendly Learning Environment",
//     },
//   ];

// export default function WhyChooseJIT() {
//   return (
//     <div className="flex flex-col items-center justify-center bg-[#e0d9d4] py-10 px-4">
//       <h2 className="text-3xl md:text-3xl font-bold text-center text-[#E87722] mb-8">
//         Why Choose JIT Polytechnic?
//       </h2>
//       <div className="relative w-full max-w-6xl mx-auto">
//         {/* Center Image with Arcs */}
//         <div className="relative z-10 mx-auto w-[300px] h-[300px]">
//           {/* Top Arc */}
//           <div className="absolute top-[-20px] left-0 right-0 mx-auto w-[340px] h-[340px] border-[10px] border-[#E87722] rounded-full z-0 rotate-[45deg]"></div>
//           {/* Bottom Arc */}
//           <div className="absolute top-[-20px] left-0 right-0 mx-auto w-[340px] h-[340px] border-[10px] border-black rounded-full z-0 rotate-[45deg] opacity-60"></div>

//           {/* Campus Image */}
//           <div className="relative w-full h-full rounded-full overflow-hidden z-10">
//             <img
//               src={example} // Replace with your actual image path
//               alt="JIT Campus"
//               className="w-full h-full object-cover "
//             />
//           </div>
//         </div>
//         {/* Feature Circles */}
//         <div className="absolute inset-0 flex flex-col justify-between h-[320px] w-full pointer-events-none">
//           <div className="flex justify-between px-10">
//             <Feature text={features[0].title} icon={features[0].icon} />
//             <Feature text={features[3].title} icon={features[3].icon} />
//           </div>
//           <div className="flex justify-between px-4">
//             <div className="flex flex-col items-start gap-10">
//               <Feature text={features[1].title} icon={features[1].icon} />
//               <Feature text={features[2].title} icon={features[2].icon} />
//             </div>
//             <div className="flex flex-col items-end gap-10">
//               <Feature text={features[4].title} icon={features[4].icon} />
//               <Feature text={features[5].title} icon={features[5].icon} />
//             </div>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="relative z-10 flex justify-center mt-10">
//           <button className="bg-white text-[#E87722] px-6 py-2 rounded-full font-semibold hover:bg-[#f4a62f] transition duration-300">
//             Apply Now →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Feature({ text, icon }) {
//   return (
//     <div className="flex flex-col items-center text-center pointer-events-auto">
//       <div className="bg-white p-3 rounded-full mb-2">{icon}</div>
//       <p className="text-sm font-semibold max-w-[140px] leading-tight text-white">{text}</p>
//     </div>
//   );
// }



// import React from 'react';
// import {
//    FaChalkboardTeacher,
//    FaUniversity,
//    FaFlask,
//    FaHandshake,
//    FaRupeeSign,
//    FaShieldAlt,
//  } from "react-icons/fa";

// const features = [
//   {
//     // title: 'Safe',
//     icon: <FaUniversity className="text-3xl text-[#f4a62f]" />,
//     title: "Government-Recognized Polytechnic Diploma Courses",
//     bgColor: 'bg-yellow-100',
//   },
//   {
//     // title: 'Fast',
//     icon: <FaChalkboardTeacher className="text-3xl text-[#f4a62f]" />,
//     title: "Experienced Faculty & Industry-Driven Curriculum",
//     bgColor: 'bg-yellow-100',
//   },
//   {
//     // title: 'Low fee',
//     icon: <FaFlask className="text-3xl text-[#f4a62f]" />,
//     title: "Modern Laboratories & Infrastructure",
//     bgColor: 'bg-yellow-100',
//   },
//   {
//     // title: 'Quick Support',
//     icon: <FaHandshake className="text-3xl text-[#f4a62f]" />,
//     title: "Placement Support & Industry Tie-Ups",
//     bgColor: 'bg-yellow-100',
//   },
//   {
//     icon: <FaRupeeSign className="text-3xl text-[#f4a62f]" />,
//     title: "Affordable Fee Structure",
//     bgColor: 'bg-yellow-100',
//   },
//   {
//     icon: <FaShieldAlt className="text-3xl text-[#f4a62f]" />,
//     title: "Safe, Student-Friendly Campus Environment",
//     bgColor: 'bg-yellow-100',
//   },
// ];

// const WhyJit = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#eef6fd] to-[#dceffc] px-4 md:px-20 py-20">
//       <h2 className="text-3xl font-bold mb-10 text-center">Why choose JIT?</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//         {features.map((feature, index) => (
//           <div key={index} className="flex items-center gap-4">
//             <div
//               className={`w-14 h-14 flex items-center justify-center text-2xl rounded-full hover:bg-yellow-200 ${feature.bgColor}`}
//             >
//               {feature.icon}
//             </div>
//             <div className="text-left">
//               <h3 className="text-lg font-semibold">{feature.title}</h3>
//               {/* <p className="text-gray-600 text-sm">{feature.description}</p> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default WhyJit;


