import React from "react";

const DirectorsMessage = () => {
  return (
    <section className="px-5 py-10 bg-gradient-to-br from-[#fceae1] to-white text-gray-800">
      <div className="max-w-6xl mx-auto mt-13 md:mt-25 lg:mt-25">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#E87722] mb-8">
          Director's Message
        </h2>

        {/* Image and text side by side */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="w-full md:w-[280px] h-[340px] shrink-0 mx-auto md:mx-0 overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.XUQXkypDJat6KUinNDXE9QHaHa?pid=Api&P=0&h=220"
              alt="Mr. RK Upadhyay"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text next to image */}
          <div className="flex-1 text-[17px] leading-[1.9] text-gray-700 text-justify space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-[#E87722]">Mr. RK Upadhyay</h3>
              <p className=" font-medium mb-4">
                Director, KS Foundation and Charitable Trust
              </p>
            </div>
            <p>
              At KS Foundation, our vision is to empower young minds with
              education that goes beyond classrooms. We are committed to
              instilling values, discipline, and a spirit of innovation that
              enables students to become leaders of tomorrow.
            </p>

            <p>
              As an institution, we believe in holistic growth where academic
              excellence is balanced with character building and social
              responsibility. With dedication and teamwork, we strive to create
              a brighter future for every learner associated with us.
            </p>
          </div>
        </div>

        {/* Remaining content below image */}
        <div className="mt-6 text-[17px] leading-[1.9] text-gray-700 text-justify space-y-5">
          <p>
            Our mission is to nurture individuals who are not only knowledgeable
            but also compassionate, resilient, and visionary. Together, we aim
            to build a community where learning inspires change and education
            becomes a lifelong journey of growth and service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectorsMessage;
