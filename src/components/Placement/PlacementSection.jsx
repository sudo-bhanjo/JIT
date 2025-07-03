import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlacementSection = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const students = [
    {
      name: "Sunpreet Kaur",
      package: "28 LPA",
      image: "/photo1.jpg",
      company: "Google",
      companyLogo: "/google.png",
    },
    {
      name: "Yushika",
      package: "26 LPA",
      image: "/photo2.jpg",
      company: "Amazon",
      companyLogo: "/amazon.jpg",
    },
    {
      name: "Rahul Kumar",
      package: "20 LPA",
      image: "/photo3.jpg",
      company: "Cisco",
      companyLogo: "/cisco.jpg",
    },
  ];

  const stats = [
    { label: "Placement Offers", value: 450 },
    { label: "Highest Package", value: 700000, isCurrency: true },
    { label: "Recruiters", value: 20 },
    { label: "50 LPA by 9+ Companies", value: 50 },
    { label: "25–30 LPA by 200+ Companies", value: 30 },
    { label: "10 LPA by 500+ Companies", value: 10 },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-orange-50 py-16 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4"
        style={{ color: "#E87722" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Placement Pathways: 100% Assured Placements
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 mb-12 text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Bridging Education & Employment for Endless Opportunities!
      </motion.p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Stats Block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center text-lg font-semibold text-[#E87722]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 hover:scale-105 transition transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#E87722]">
                {stat.isCurrency ? "₹" : ""}
                <CountUp end={stat.value} duration={2} separator="," />
                {stat.label.includes("LPA") && " LPA"}
              </div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats Block with Dashed Black Internal Dividers */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 w-full">
  {stats.map((stat, index) => {
    const isRightCol = (index + 1) % 3 === 0;
    const isBottomRow = index >= stats.length - 3;

    return (
      <motion.div
        key={index}
        className={`
          p-6 text-center font-semibold text-[#E87722]
          border-black border-dashed
          ${!isRightCol ? 'border-r' : ''}
          ${!isBottomRow ? 'border-b' : ''}
        `}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="text-2xl md:text-3xl font-bold">
          {stat.isCurrency ? '₹' : ''}
          <CountUp end={stat.value} duration={2} separator="," />
          {stat.label.includes('LPA') && ' LPA'}
        </div>
        <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
      </motion.div>
    );
  })}
</div> */}

        {/* Slider Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden"
        >
          <Slider {...sliderSettings}>
            {students.map((student, index) => (
              <div key={index} className="px-4 flex justify-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 overflow-hidden rounded-full shadow-lg transform group-hover:scale-105 transition duration-300">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-lg md:text-xl text-gray-800">
                    {student.name}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-[#E87722]">
                    {student.package}
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <img
                      src={student.companyLogo}
                      alt={student.company}
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                    <span className="text-sm text-gray-600">
                      {student.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementSection;
