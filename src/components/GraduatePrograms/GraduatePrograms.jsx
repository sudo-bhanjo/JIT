import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import computer from "../../assets/programming.png";
import civil from "../../assets/civil.png";
import elect from "../../assets/electricity.png";
import mech from "../../assets/mechanical.png";
import ckt from "../../assets/ckt.png";
import girl from "../../assets/middle-image.jpg";
import courses from "../../assets/courses.jpg";
import { filter } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const fadeInFrom = (direction = "left") => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
};

const AnimatedCard = ({ children, direction }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInFrom(direction)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const CoursesSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Delay slightly to allow DOM to mount
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  const navigate = useNavigate();
  return (
    <div
      id="departments"
      className="flex flex-col items-center justify-center bg-white mb-4"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 pb-2">
          Our Diploma Courses
        </h1>
        <div className="max-w-7xl mx-auto px-2">
          {/* <div className="bg-orange-50 border-l-4 border-orange-400 rounded-md px-6 py-4 shadow-sm"> */}
          <p className="text-gray-600 max-w-7xl mx-auto text-lg pt-2">
            Each course is designed to equip students with core engineering
            knowledge, technical proficiency, and practical exposure through
            workshops, labs, and industry visits. We offer AICTE-approved and
            state-recognized 3-year diploma engineering courses in the following
            streams:
          </p>
          {/* </div> */}
        </div>
      </div>

      <div className="grid grid-rows-5 grid-cols-1 sm:grid-rows-2 sm:grid-cols-3 gap-4 w-full max-w-6xl">
        {/* Box 1 - Computer Science */}
        <AnimatedCard direction="left">
          <div className=" bg-white p-4  flex flex-col items-center">
            <img
              src={computer}
              alt="Computer Science"
              className="h-30 object-cover mt-4"
            />
            <button
              className="bg-[#3c254a] text-white p-2 rounded mt-1 cursor-pointer"
              onClick={() => {
                console.log("Clicked the computer Science");
                navigate("/cse");
              }}
            >
              Computer Science and Engineering
            </button>
            <p className="text-[#1A202C] m-2 text-center">
              Gain in-demand IT skills in programming, networking & software
            </p>
          </div>
        </AnimatedCard>

        {/* Center Image Box (unchanged) */}
        <div className="row-span-2 border bg-white shadow-md overflow-hidden">
          <img
            src={courses}
            alt="Library Student"
            className="w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Box 3 - Mechanical Engineering */}
        <AnimatedCard direction="right">
          <div className=" bg-white p-4  flex flex-col items-center">
            <img
              src={mech}
              alt="Mechanical Engineering"
              className=" h-30 object-cover mt-4"
            />
            <button
              className="bg-[#3c254a] text-white p-2 rounded mt-1 cursor-pointer"
              onClick={() => navigate("/Mec")}
            >
              Mechanical Engineering
            </button>
            <p className="text-[#1A202C] m-2 text-center">
              Master core mechanical concepts for innovation and production
            </p>
          </div>
        </AnimatedCard>

        {/* Box 2 - Electrical Engineering */}
        <AnimatedCard direction="left">
          <div className="bg-white p-4  flex flex-col items-center">
            <img
              src={elect}
              alt="Electrical Engineering"
              className="h-30 object-cover mt-2"
            />
            <button
              className="bg-[#3c254a] text-white p-2 rounded mt-2 cursor-pointer"
              onClick={() => navigate("/EEE")}
            >
              Electrical Engineering
            </button>
            <p className="text-[#1A202C] m-2 text-center">
              Power up your career in electrical systems and automation
            </p>
          </div>
        </AnimatedCard>

        {/* Box 4 - Civil Engineering */}
        <AnimatedCard direction="right">
          <div className=" bg-white p-4 flex flex-col items-center">
            <img
              src={civil}
              alt="Civil Engineering"
              className="h-30 object-cover mt-2"
            />
            <button
              className="bg-[#3c254a] text-white p-2 rounded mt-2 cursor-pointer"
              onClick={() => navigate("/Civil")}
            >
              Civil Engineering
            </button>
            <p className="text-[#1A202C] m-2 text-center">
              Build the future of infrastructure and development
            </p>
          </div>
        </AnimatedCard>

        {/* <div className="col-span-full flex justify-center">
          <AnimatedCard direction="right">
            <div className="bg-white p-4 flex flex-col items-center">
              <img
                src={ckt}
                alt="Civil Engineering"
                className="h-30 object-cover mt-2"
              />
              <button
                className="bg-[#3c254a] text-white p-2 rounded mt-2 cursor-pointer"
                onClick={() => navigate("/ECE")}
              >
                Electronics and Communication Engineering
              </button>
              <p className="text-[#1A202C] m-2">
                Explore embedded systems, communication tech & IoT
              </p>
            </div>
          </AnimatedCard>
        </div> */}
      </div>
    </div>
  );
};

export default CoursesSection;

// import React from "react";
// import computer from "../../assets/comp.webp";
// import civil from "../../assets/civil.webp";
// import elect from "../../assets/elect.webp";
// import mech from "../../assets/mech.webp";
// import girl from "../../assets/middle-image.jpg"
// const CoursesSection = () => {
//   return (
//     <div className="p-4 flex flex-col items-center justify-center bg-white">
//       <div className="text-center mb-6">
//         <h1 className="text-lg font-bold text-center">Courses We Offer</h1>
//         <p className="text-sm text-gray-600 mt-1">
//           Explore diverse diploma programs tailored for hands-on learning and career readiness:
//         </p>
//       </div>

//       <div className="grid grid-rows-5 grid-cols-1 sm:grid-rows-2 sm:grid-cols-3 gap-4 w-full max-w-6xl">
//         {/* Box 1 - Computer Science */}
//         <div className="program-card bg-[#f8f4ffec] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500 hover:scale-105 hover:bg-[#6f78de] ">
//           <img src={computer} alt="Computer Science" className="w-full h-40 object-cover" />
//           <div className="program-content p-4">
//             <span className="inline-flex items-center px-3 py-1 bg-orange-400 text-white text-xs font-semibold rounded-full mb-3">
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.862 2.653a1 1 0 00.95.69h2.786c.969 0 1.371 1.24.588 1.81l-2.256 1.64a1 1 0 00-.364 1.118l.863 2.653c.3.921-.755 1.688-1.538 1.118l-2.256-1.64a1 1 0 00-1.176 0l-2.256 1.64c-.783.57-1.838-.197-1.538-1.118l.863-2.653a1 1 0 00-.364-1.118l-2.256-1.64c-.783-.57-.38-1.81.588-1.81h2.786a1 1 0 00.95-.69l.862-2.653z" />
//               </svg>
//               Technology
//             </span>
//             <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-white">Diploma in Computer Science and Technology</h2>
//             <p className="text-sm text-gray-600 hover:text-white">Focus on programming, algorithms, AI, and software development.</p>
//           </div>
//         </div>

//         {/* Center Image Box*/}
//         <div className="row-span-2 border bg-white shadow-md overflow-hidden">
//           <img
//             src={girl}
//             alt="Library Student"
//             className="w-full h-full object-cover shadow-md"
//           />
//         </div>

//         {/* Box 3 - Civil Engineering */}
//         <div className="program-card bg-[#f8f4ffec] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500 hover:scale-105 hover:bg-[#6f78de] ">
//           <img src={civil} alt="Civil Engineering" className="w-full h-40 object-cover" />
//           <div className="program-content p-4">
//             <span className="inline-flex items-center px-3 py-1 bg-orange-400 text-white text-xs font-semibold rounded-full mb-3">
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.862 2.653a1 1 0 00.95.69h2.786c.969 0 1.371 1.24.588 1.81l-2.256 1.64a1 1 0 00-.364 1.118l.863 2.653c.3.921-.755 1.688-1.538 1.118l-2.256-1.64a1 1 0 00-1.176 0l-2.256 1.64c-.783.57-1.838-.197-1.538-1.118l.863-2.653a1 1 0 00-.364-1.118l-2.256-1.64c-.783-.57-.38-1.81.588-1.81h2.786a1 1 0 00.95-.69l.862-2.653z" />
//               </svg>
//               Engineering
//             </span>
//             <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-white">Diploma in Civil Engineering</h2>
//             <p className="text-sm text-gray-600 hover:text-white">Learn about construction, infrastructure, and structural analysis.</p>
//           </div>
//         </div>

//         {/* Box 2 - Mechanical Engineering */}
//         <div className="program-card bg-[#f8f4ffec] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500 hover:scale-105 hover:bg-[#6f78de] hover:text-white">
//           <img src={mech} alt="Mechanical Engineering" className="w-full h-40 object-cover" />
//           <div className="program-content p-4">
//             <span className="inline-flex items-center px-3 py-1 bg-orange-400 text-white text-xs font-semibold rounded-full mb-3">
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.862 2.653a1 1 0 00.95.69h2.786c.969 0 1.371 1.24.588 1.81l-2.256 1.64a1 1 0 00-.364 1.118l.863 2.653c.3.921-.755 1.688-1.538 1.118l-2.256-1.64a1 1 0 00-1.176 0l-2.256 1.64c-.783.57-1.838-.197-1.538-1.118l.863-2.653a1 1 0 00-.364-1.118l-2.256-1.64c-.783-.57-.38-1.81.588-1.81h2.786a1 1 0 00.95-.69l.862-2.653z" />
//               </svg>
//               Engineering
//             </span>
//             <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-white">Diploma in Mechanical Engineering</h2>
//             <p className="text-sm text-gray-600 hover:text-white">Study mechanics, thermodynamics, and manufacturing processes.</p>
//           </div>
//         </div>

//         {/* Box 4 - Electrical Engineering */}
//         <div className="program-card bg-[#f8f4ffec] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500 hover:scale-105 hover:bg-[#6f78de] ">
//           <img src={elect} alt="Electrical Engineering" className="w-full h-40 object-cover" />
//           <div className="program-content p-4">
//             <span className="inline-flex items-center px-3 py-1 bg-orange-400 text-white text-xs font-semibold rounded-full mb-3">
//               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l.862 2.653a1 1 0 00.95.69h2.786c.969 0 1.371 1.24.588 1.81l-2.256 1.64a1 1 0 00-.364 1.118l.863 2.653c.3.921-.755 1.688-1.538 1.118l-2.256-1.64a1 1 0 00-1.176 0l-2.256 1.64c-.783.57-1.838-.197-1.538-1.118l.863-2.653a1 1 0 00-.364-1.118l-2.256-1.64c-.783-.57-.38-1.81.588-1.81h2.786a1 1 0 00.95-.69l.862-2.653z" />
//               </svg>
//               Engineering
//             </span>
//             <h2 className="text-lg font-semibold text-gray-800 mb-1 hover:text-white">Diploma in Electrical Engineering</h2>
//             <p className="text-sm text-gray-600 hover:text-white">Explore circuits, power systems, and electrical machines.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursesSection;

// import React from "react";
// import "./GraduatePrograms.css";
// import computer from "../../assets/comp.webp";
// import civil from "../../assets/civil.webp";
// import elect from "../../assets/elect.webp";
// import human from "../../assets/human.webp";
// import mech from "../../assets/mech.webp";

// const GraduatePrograms = () => {
//   const programs = [
//     {
//       id: 1,
//       title: "Diploma in Computer Science and Technology",
//       category: "Technology",
//       description:
//         "Focus on programming, algorithms, AI, and software development.",
//       image: computer,
//     },
//     {
//       id: 2,
//       title: "Diploma in Mechanical Engineering",
//       category: "Engineering",
//       description:
//         "Study mechanics, thermodynamics, and manufacturing processes.",
//       image: mech,
//     },
//     {
//       id: 3,
//       title: "Diploma in Civil Engineering",
//       category: "Engineering",
//       description:
//         "Learn about construction, infrastructure, and structural analysis.",
//       image: civil,
//     },
//     {
//       id: 4,
//       title: "Diploma in Electrical Engineering",
//       category: "Engineering",
//       description: "Explore circuits, power systems, and electrical machines.",
//       image: elect,
//     },
//     // {
//     //   id: 5,
//     //   title: "Diploma in Humanities and Basic Science",
//     //   category: "Technology",
//     //   description:
//     //     "Engineering Students, entering into the vast curriculum of Engineering Course from a small periphery of school life, get a huge support.",
//     //   image: human,
//     // },
//     // {
//     //   id: 6,
//     //   title: "Diploma in Information Technology",
//     //   category: "Technology",
//     //   description:
//     //     "Focus on networks, databases, cybersecurity, and web development.",
//     //   image:
//     //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//     // },
//     // {
//     //   id: 7,
//     //   title: "Diploma in Artificial Intelligence and Data Science",
//     //   category: "Technology",
//     //   description:
//     //     "Learn machine learning, data analytics, and AI applications.",
//     //   image:
//     //     "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//     // },
//     // {
//     //   id: 8,
//     //   title: "Diploma in Biotechnology",
//     //   category: "Science",
//     //   description:
//     //     "Study genetic engineering, molecular biology, and bioinformatics.",
//     //   image: images.bte,
//     // },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="graduate-programs-container">

//           <div className="header">
//             <div className="title-nav">
//               <h1 className="head1">Courses We Offer</h1>
//             </div>
//             <div className="our-courses">
//               <span className="icon1"></span>Explore diverse diploma programs
//               tailored for hands-on learning and career readiness:
//             </div>
//           </div>

//       <div className="programs-grid">
//         {programs.map((program) => (
//           <div className="program-card" key={program.id}>
//             <div className="program-image">
//               <img src={program.image} alt={program.title} />
//               <div className="category-badge">
//                 <span className="icon">🎓</span> {program.category}
//               </div>
//             </div>
//             <div className="program-content">
//               <h2>{program.title}</h2>
//               <p>{program.description}</p>
//               {/* <div className="read-more">
//                 <a to="#">Read More →</a>
//                 <span className="book-icon">📖</span>
//               </div> */}
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="scroll-top-button" onClick={scrollToTop}>
//         ↑
//       </button>
//     </div>
//   );
// };

// export default GraduatePrograms;
