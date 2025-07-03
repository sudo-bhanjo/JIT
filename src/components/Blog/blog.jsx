import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";
const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Serene Winter Walk in Misty Forest Landscape",
      description:
        "This image captures a tranquil winter scene in a dense coniferous forest. A narrow path, dusted with snow, winds through tall, bare trees",
      author: "Yaroslav Shuraev",
      date: "June 3, 2025",
      tags: ["Forest", "Nature"],
      image:
        "https://images.pexels.com/photos/32326740/pexels-photo-32326740/free-photo-of-serene-winter-walk-in-misty-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Vintage Van Parked by the Beach at Sunset",
      description:
        "This beautiful photo captures a retro-style van (likely a Volkswagen) parked near a beach during golden hour or sunset.",
      author: "Jane Doe",
      date: "June 2, 2025",
      tags: ["RoadTrip", ""],
      image:
        "https://images.pexels.com/photos/2983214/pexels-photo-2983214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Tailwind CSS for Beginners",
      description:
        "Get started with Tailwind and build sleek, responsive UIs quickly.",
      author: "John Smith",
      date: "June 1, 2025",
      tags: ["Tailwind", "Frontend"],
      image:
        "https://images.pexels.com/photos/698922/pexels-photo-698922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "JavaScript ES2025 Preview",
      description: "What to expect in the next generation of JavaScript.",
      author: "Alice",
      date: "May 31, 2025",
      tags: ["JavaScript", "ESNext"],
      image:
        "https://images.pexels.com/photos/5004898/pexels-photo-5004898.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Responsive Layouts with Flexbox",
      description: "Flexbox is still king — here’s how to use it effectively.",
      author: "Bob",
      date: "May 30, 2025",
      tags: ["CSS", "Flexbox"],
      image:
        "https://images.pexels.com/photos/30155127/pexels-photo-30155127/free-photo-of-aerial-view-of-bridge-in-winter-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Debugging Like a Pro",
      description: "Strategies for identifying and fixing bugs fast.",
      author: "Claire",
      date: "May 29, 2025",
      tags: ["Debugging", "Tools"],
      image:
        "https://images.pexels.com/photos/2029595/pexels-photo-2029595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "Understanding JSX",
      description: "What is JSX and how does it work under the hood?",
      author: "Aditya",
      date: "May 28, 2025",
      tags: ["React", "JSX"],
      image: "https://source.unsplash.com/featured/?jsx,code",
    },
    {
      id: 8,
      title: "REST APIs 101",
      description:
        "Learn how to work with RESTful APIs in frontend development.",
      author: "Sara",
      date: "May 27, 2025",
      tags: ["API", "REST"],
      image:
        "https://images.pexels.com/photos/2780553/pexels-photo-2780553.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      title: "Git for Beginners",
      description: "Learn Git basics and how to manage code like a pro.",
      author: "Liam",
      date: "May 26, 2025",
      tags: ["Git", "Version Control"],
      image: "https://source.unsplash.com/featured/?git,code",
    },
    {
      id: 10,
      title: "Boost Performance with Lazy Loading",
      description: "Speed up your site with smart image and component loading.",
      author: "Nina",
      date: "May 25, 2025",
      tags: ["Performance", "Lazy Loading"],
      image:
        "https://images.pexels.com/photos/31488362/pexels-photo-31488362/free-photo-of-aerial-view-of-horses-grazing-in-styria.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      title: "Intro to TypeScript",
      description: "Discover the power of TypeScript for large-scale apps.",
      author: "Jake",
      date: "May 24, 2025",
      tags: ["TypeScript", "Frontend"],
      image:
        "https://source.unsplash.com/https://images.pexels.com/photos/2084275/pexels-photo-2084275.jpeg?auto=compress&cs=tinysrgb&w=600/?typescript",
    },
    {
      id: 12,
      title: "Dark Mode Implementation",
      description: "Step-by-step guide to adding dark mode to your website.",
      author: "Emma",
      date: "May 23, 2025",
      tags: ["UI", "Dark Mode"],
      image:
        "https://source.unsplash.com/fehttps://images.pexels.com/photos/3753759/pexels-photo-3753759.jpeg?auto=compress&cs=tinysrgb&w=600atured/?darkmode",
    },
  ];
  const [cardsPerSlide, setCardsPerSlide] = useState(
    window.innerWidth < 768 ? 1 : 3
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = Math.ceil(blogPosts.length / cardsPerSlide);

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
    <>
      <section className="py-12 px-4 md:px-12 bg-white text-center relative overflow-hidden pt-32">
        <h2 className="text-3xl font-bold text-gray-800">Dev Blog Showcase</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
          Your gateway to skill, growth & success in engineering!{" "}
          <br className="hidden sm:inline" />
          Approved by{" "}
          <span className="font-semibold text-[#E87722]">AICTE</span> &{" "}
          <span className="font-semibold text-[#E87722]">WBSCTE</span>.
        </p>
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
                {blogPosts
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
                        <p className="text-base font-semibold text-black mb-2 group-hover:text-white">
                          {item.title}
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">
                          {item.name}
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
      <Footer />
    </>
  );
};
export default Blogs;
