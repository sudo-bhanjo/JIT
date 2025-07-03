// import React, { useState } from 'react';
// import './Testimonials.css';

// const testimonials = [
//   {
//     name: 'Rahul Saha',
//     role: 'Diploma in Mechanical Engineering',
//     img: 'https://randomuser.me/api/portraits/men/32.jpg',
//     text: 'Studying at JIT was the best decision for my career. The faculty not only focuses on technical knowledge but also prepares us for real-world challenges.',
//   },
//   {
//     name: 'Ankita Roy',
//     role: 'Diploma in Computer Science',
//     img: 'https://randomuser.me/api/portraits/women/65.jpg',
//     text: 'The placement cell at JIT helped me land my first job before graduation. The training sessions were truly helpful, covering aptitude, soft skills, resume building etc',
//   },
//   {
//     name: 'Sourav Das',
//     role: 'Diploma in Electrical Engineering',
//     img: 'https://randomuser.me/api/portraits/men/75.jpg',
//     text: 'JIT gave me more than just a diploma — it gave me confidence and the right skill set to step into the professional world. The hands-on projects, supportive faculty.',
//   },
//   // {
//   //   name: 'Emily Davis',
//   //   role: 'Frontend Developer',
//   //   img: 'https://randomuser.me/api/portraits/women/42.jpg',
//   //   text: 'Mauris ac ex vel justo congue scelerisque. Aliquam erat volutpat. Phasellus suscipit, sapien non feugiat fermentum, dolor justo varius elit.',
//   // },
//   // {
//   //   name: 'Chris Evans',
//   //   role: 'Full Stack Engineer',
//   //   img: 'https://randomuser.me/api/portraits/men/27.jpg',
//   //   text: 'Integer condimentum felis nec diam pulvinar, ut laoreet lorem tincidunt. Nullam sed risus ut nibh efficitur ultrices.',
//   // },
//   // {
//   //   name: 'Sophia Turner',
//   //   role: 'Product Manager',
//   //   img: 'https://randomuser.me/api/portraits/women/19.jpg',
//   //   text: 'Donec eget velit in urna varius sagittis. Aenean facilisis ligula sit amet mi dapibus, at tincidunt nunc rutrum.',
//   // },
//   // {
//   //   name: 'Liam Johnson',
//   //   role: 'Frontend Developer',
//   //   img: 'https://randomuser.me/api/portraits/men/32.jpg',
//   //   text: 'Curabitur fermentum, erat vel bibendum efficitur, nulla sapien tristique metus, vel tincidunt ipsum metus eget leo.',
//   // },
//   // {
//   //   name: 'Ava Martinez',
//   //   role: 'UX Designer',
//   //   img: 'https://randomuser.me/api/portraits/women/45.jpg',
//   //   text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer non justo nulla.',
//   // },
//   // {
//   //   name: 'Noah Smith',
//   //   role: 'Backend Engineer',
//   //   img: 'https://randomuser.me/api/portraits/men/41.jpg',
//   //   text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque suscipit velit et purus tincidunt.',
//   // }
  
// ];

// const TestimonialSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 3;
//   const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="testimonial-section">
//       <div className="heading">
//         <p className="subtitle"></p>
//         <h1>What Our Students Says</h1>
//       </div>

//       <div className="slider-container">
//         <div
//           className="slider"
//           style={{
//             transform: `translateX(-${currentSlide * 100}%)`,
//           }}
//         >
//           {Array.from({ length: totalSlides }).map((_, i) => (
//             <div className="slide" key={i}>
//               {testimonials.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide).map((item, index) => (
//                 <div className="card" key={index}>
//                   <div className="quote-icon">❝❞</div>
//                   <p className="text">{item.text}</p>
//                   <img src={item.img} alt={item.name} className="avatar" />
//                   <h4>{item.name}</h4>
//                   <p className="role">{item.role}</p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="dots">
//         {Array.from({ length: totalSlides }).map((_, i) => (
//           <span
//             key={i}
//             className={`dot ${i === currentSlide ? 'active' : ''}`}
//             onClick={() => handleDotClick(i)}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

// import React, { useState, useEffect } from 'react';

// const testimonials = [
//   {
//     name: 'Rahul Saha',
//     role: 'Diploma in Mechanical Engineering',
//     img: 'https://randomuser.me/api/portraits/men/32.jpg',
//     text: 'Studying at JIT was the best decision for my career. The faculty not only focuses on technical knowledge but also prepares us for real-world challenges.',
//   },
//   {
//     name: 'Ankita Roy',
//     role: 'Diploma in Computer Science',
//     img: 'https://randomuser.me/api/portraits/women/65.jpg',
//     text: 'The placement cell at JIT helped me land my first job before graduation. The training sessions were truly helpful, covering aptitude, soft skills, resume building etc',
//   },
//   {
//     name: 'Sourav Das',
//     role: 'Diploma in Electrical Engineering',
//     img: 'https://randomuser.me/api/portraits/men/75.jpg',
//     text: 'JIT gave me more than just a diploma — it gave me confidence and the right skill set to step into the professional world. The hands-on projects, supportive faculty.',
//   },
// ];

// const TestimonialSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [cardsPerSlide, setCardsPerSlide] = useState(3);

//   useEffect(() => {
//     const updateCardsPerSlide = () => {
//       setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);
//     };

//     updateCardsPerSlide();
//     window.addEventListener('resize', updateCardsPerSlide);
//     return () => window.removeEventListener('resize', updateCardsPerSlide);
//   }, []);

//   const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <section className="py-12 px-4 md:px-12 bg-white text-center relative">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">What Our Students Say</h1>
//       </div>

//       <div className="relative overflow-hidden">
//         <button
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-300 hover:text-amber-50 p-2 rounded-full text-2xl"
//           onClick={prevSlide}
//         >
//           ‹
//         </button>

//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             width: `${100 * totalSlides}%`,
//             transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
//           }}
//         >
//           {Array.from({ length: totalSlides }).map((_, i) => (
//             <div
//               key={i}
//               className="flex justify-center gap-6 flex-wrap w-full px-4 py-4"
//               style={{ width: `${100 / totalSlides}%` }}
//             >
//               {testimonials
//                 .slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide)
//                 .map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-100 hover:bg-purple-900 p-6 rounded-xl shadow-md max-w-sm flex-1"
//                   >
//                     <div className="text-4xl text-gray-400 mb-2">❝❞</div>
//                     <p className="text-gray-700 italic mb-4">{item.text}</p>
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-16 h-16 rounded-full mx-auto mb-2"
//                     />
//                     <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
//                     <p className="text-sm text-gray-500">{item.role}</p>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>

//         <button
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full text-2xl"
//           onClick={nextSlide}
//         >
//           ›
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rahul Saha',
    role: 'Diploma in Mechanical Engineering',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Studying at JIT was the best decision for my career. The faculty not only focuses on technical knowledge but also prepares us for real-world challenges.',
  },
  {
    name: 'Ankita Roy',
    role: 'Diploma in Computer Science',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'The placement cell at JIT helped me land my first job before graduation. The training sessions were truly helpful, covering aptitude, soft skills, resume building etc',
  },
  {
    name: 'Sourav Das',
    role: 'Diploma in Electrical Engineering',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: 'JIT gave me more than just a diploma — it gave me confidence and the right skill set to step into the professional world.',
  },
  {
    name: 'Riya Singh',
    role: 'Diploma in Civil Engineering',
    img: 'https://randomuser.me/api/portraits/women/72.jpg',
    text: 'Excellent infrastructure and cooperative teachers. Loved every part of my JIT journey.',
  },
  {
    name: 'Aman Verma',
    role: 'Diploma in Electronics',
    img: 'https://randomuser.me/api/portraits/men/49.jpg',
    text: 'Labs were very well-equipped. We got lots of hands-on experience that helped during placements.',
  },
  {
    name: 'Sneha Mukherjee',
    role: 'Diploma in IT',
    img: 'https://randomuser.me/api/portraits/women/43.jpg',
    text: 'The best part was the group projects and exposure to real-world tasks. We learned teamwork and time management.',
  },
  {
    name: 'Ankita Roy',
    role: 'Diploma in Computer Science',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'The placement cell at JIT helped me land my first job before graduation. The training sessions were truly helpful, covering aptitude, soft skills, resume building etc',
  },
  {
    name: 'Sourav Das',
    role: 'Diploma in Electrical Engineering',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: 'JIT gave me more than just a diploma — it gave me confidence and the right skill set to step into the professional world.',
  },
  {
    name: 'Riya Singh',
    role: 'Diploma in Civil Engineering',
    img: 'https://randomuser.me/api/portraits/women/72.jpg',
    text: 'Excellent infrastructure and cooperative teachers. Loved every part of my JIT journey.',
  },
  {
    name: 'Aman Verma',
    role: 'Diploma in Electronics',
    img: 'https://randomuser.me/api/portraits/men/49.jpg',
    text: 'Labs were very well-equipped. We got lots of hands-on experience that helped during placements.',
  },
  {
    name: 'Sneha Mukherjee',
    role: 'Diploma in IT',
    img: 'https://randomuser.me/api/portraits/women/43.jpg',
    text: 'The best part was the group projects and exposure to real-world tasks. We learned teamwork and time management.',
  },
];

const TestimonialSection = () => {
  const [cardsPerSlide, setCardsPerSlide] = useState(window.innerWidth < 768 ? 1 : 3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        <h2 className="text-3xl font-bold text-gray-800">What Our Students Say</h2>
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
              {testimonials
                .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-xl shadow-md max-w-sm flex-1 transform transition duration-300 
  hover:bg-[#3c254a] hover:text-white focus:bg-[#3c254a] focus:text-white active:bg-[#3c254a] active:text-white group"
                  >
                    <div className="text-4xl text-[#E87722] mb-2 group-hover:text-[#E87722]">❝❞</div>
                    {/* <p className="text-gray-700 italic mb-4 group-hover:text-white">{item.text}</p> */}
                    <p className="text-gray-700 italic mb-4 group-hover:text-white group-focus:text-white group-active:text-white">{item.text}</p>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mx-auto mb-2"
                    />
                    {/* <h4 className="font-semibold text-lg text-gray-800 group-hover:text-white">{item.name}</h4> */}
                    <h4 className="font-semibold text-lg text-gray-800 group-hover:text-white group-focus:text-white group-active:text-white">{item.name}</h4>
                    {/* <p className="text-sm text-gray-500 group-hover:text-white">{item.role}</p> */}
                    <p className="text-sm text-gray-500 group-hover:text-white group-focus:text-white group-active:text-white">{item.role}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
