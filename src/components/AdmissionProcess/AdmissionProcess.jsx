

import React, { useState, useEffect } from "react";
import Footer from "../Footer";
const AdmissionProcess = () => {
  const eligibilitySlides = [
    {
      id: 1,
      title: "Eligibility for Regular Admission",
      description:
        "Must have passed Class 10 with Mathematics and Physical Science.",
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600", // you can replace with relevant one
    },
    {
      id: 2,
      title: "Eligibility for Lateral Entry",
      description:
        "Lateral Entry available for Class 12 (Vocational) or ITI students.",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600", // replace with relevant one
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % eligibilitySlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + eligibilitySlides.length) % eligibilitySlides.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <>
      <section className="py-12 px-4 md:px-12 bg-white text-center relative overflow-hidden pt-32">
        <h2 className="text-3xl mb-2 font-bold text-gray-800">
          Admission Process
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-5 max-w-3xl mx-auto">
          We welcome students who have successfully completed{" "}
          <span className="font-semibold text-[#E87722]">
            Class 10 (Madhyamik)
          </span>{" "}
          or equivalent. <br className="hidden sm:inline" />
          Admissions are based on merit and follow the norms of the -{" "}
          <br className="hidden sm:inline" />
          <span className="font-semibold text-[#E87722]">
            West Bengal State Council of Technical Education (WBSCTE)
          </span>
          .
        </p>

        <p className="text-black-600 text-base sm:text-xl mb-2 max-w-3xl mx-auto font-bold">
          Eligibility :
        </p>

      {/* Arrows */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-100 mt-35 transform -translate-y-1/2 bg-[#E87722] text-white text-2xl rounded-full h-10 w-10 z-10 flex items-center justify-center"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-100 mt-35 transform -translate-y-1/2 bg-[#E87722] text-white text-2xl rounded-full h-10 w-10 z-10 flex items-center justify-center"
      >
        ❯
      </button> */}


      {/* Left Arrow */}
<button
  onClick={handlePrev}
  className="absolute top-1/2 left-3 sm:left-6 md:left-8 transform -translate-y-1/2 bg-[#E87722] text-white text-lg sm:text-xl rounded-full h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 z-10 flex items-center justify-center shadow-md hover:scale-105 transition"
  aria-label="Previous Slide"
>
  ❮
</button>

{/* Right Arrow */}
<button
  onClick={handleNext}
  className="absolute top-1/2 right-3 sm:right-6 md:right-8 transform -translate-y-1/2 bg-[#E87722] text-white text-lg sm:text-xl rounded-full h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 z-10 flex items-center justify-center shadow-md hover:scale-105 transition"
  aria-label="Next Slide"
>
  ❯
</button>

        {/* Slider */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${100 * eligibilitySlides.length}%`,
              transform: `translateX(-${
                (100 / eligibilitySlides.length) * currentSlide
              }%)`,
            }}
          >
            {eligibilitySlides.map((item, index) => (
              <div
                key={item.id}
                className="w-full flex justify-center items-center px-4 py-6"
                style={{ width: `${100 / eligibilitySlides.length}%` }}
              >
                <div className="bg-gray-100 rounded-xl shadow-md max-w-md w-full transform transition duration-300 hover:bg-[#3c254a] hover:text-white group overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 group-hover:text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdmissionProcess;
