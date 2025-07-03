import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Computer from "./act-assets/comp.webp";
import Transport from "./act-assets/Transport.webp";
import Sports from "./act-assets/Sports.webp";
// import Lab from "./act-assets/Lab.webp";
// import LAB from "./act-assets/LAB.jpg";
import LABS from "./act-assets/LABS.jpg";
import Lib from "./act-assets/Lib.webp";
import Placement from "./act-assets/Placement.webp";
import Wifi from "./act-assets/Wifi.webp";

const Activity = () => {
  const facilities = [
    {
      id: 1,
      title: "Modern Computer Labs",
      description: "Equipped with updated systems and software.",
      image: Computer,
    },
    {
      id: 2,
      title: "Advanced Laboratories",
      description: "For hands-on technical and experimental learning.",
      image: LABS,
    },
    {
      id: 4,
      title: "Sports & Recreation",
      description: "Encouraging a healthy, active campus lifestyle.",
      image: Sports,
    },
    {
      id: 5,
      title: "Institutional Transport Infrastructure",
      description:
        "Ensuring safe, reliable, and convenient daily commuting for all students.",
      image: Transport,
    },
    {
      id: 6,
      title: "Wi-Fi Enabled Classrooms",
      description:
        "Empowering students with seamless connectivity for tech-enabled learning.",
      image: Wifi,
    },
    {
      id: 7,
      title: "Dedicated Training and Placement Cell",
      description:
        "Helping students grow and seize every opportunity for a brighter future.",
      image: Placement,
    },
  ];

  const [cardsPerSlide, setCardsPerSlide] = useState(
    window.innerWidth < 768 ? 1 : 3
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = Math.ceil(facilities.length / cardsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      const updatedCardsPerSlide = window.innerWidth < 768 ? 1 : 3;
      setCardsPerSlide((prev) => {
        if (prev !== updatedCardsPerSlide) {
          setCurrentSlide(0); // Reset on layout change
        }
        return updatedCardsPerSlide;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optional: auto slide every 5 sec like Hero
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="py-12 px-4 md:px-12 bg-white text-center relative overflow-hidden">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Campus Facilities </h2>
        <p className="text-gray-600 max-w-7xl mx-auto text-lg pt-2">
          A great learning experience is backed by modern infrastructure and
          student-friendly amenities. At JIT, we ensure that every learner has
          access to resources that encourage growth and innovation.
        </p>
      </div>

      {/* Navigation Arrows (visible on all screen sizes) */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#E87722] text-white text-2xl rounded-full h-10 w-10 z-10 flex items-center justify-center"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#E87722] text-white text-2xl rounded-full h-10 w-10 z-10 flex items-center justify-center"
      >
        ❯
      </button>

      {/* Slider */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex justify-center gap-6 flex-wrap w-full px-4 py-4"
              style={{ width: `${100 / totalSlides}%` }}
            >
              {facilities
                .slice(
                  slideIndex * cardsPerSlide,
                  slideIndex * cardsPerSlide + cardsPerSlide
                )
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-xl shadow-md max-w-sm flex-1 transform transition duration-300 
  hover:bg-[#3c254a] hover:text-white focus:bg-[#3c254a] focus:text-white active:bg-[#3c254a] active:text-white group overflow-hidden"
                  >
                    {/* Image: full width, no padding, no borders */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Content */}
                    <div className="p-6">
                      {/* <p className="text-base font-semibold text-black mb-2 group-hover:text-white">
                        {item.title}
                      </p> */}

                      <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 group-hover:text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activity;
