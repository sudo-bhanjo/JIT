import React from 'react';

const PresidentsDesk = () => {
  return (
    <section className="px-5 py-10 bg-gradient-to-br from-[#fceae1] to-white text-gray-800">
      <div className="max-w-6xl mx-auto mt-13 md:mt-25 lg:mt-25">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#E87722] mb-8">
          President's Desk
        </h2>

        {/* Image and text side by side */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="w-full md:w-[280px] h-[340px] shrink-0 mx-auto md:mx-0 overflow-hidden rounded-xl shadow-lg">
            <img
              src="/kajal.jpeg"
              alt="Mr. Kajal Sarkar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text next to image */}
          <div className="flex-1 text-[17px] leading-[1.9] text-gray-700 text-justify space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-[#E87722]">Mr. Kajal Sarkar</h3>
              <p className=" font-medium mb-4">
                President, KS Foundation and Charitable Trust
              </p>
            </div>
            <p>
              What one sincerely hopes and dreams of can indeed become reality 
              — when supported by dedication and consistent effort. At <strong>Jalpaiguri Institute 
              of Technology (JIT) Polytechnic College</strong>, we aspire to establish ourselves as a premier
               institution in the field of engineering education.

            </p>

            <p>
              With a vision to create a <strong>center of excellence</strong>, we believe that a united and
               progressive academic environment should inspire strong recognition and respect
                across all sections of society. Our goal is for the ambitious and aspiring youth 
                to find a home here — an institution that not only imparts technical knowledge but
                 also nurtures values such as <strong>discipline, integrity, moral strength, and courteous conduct</strong>.

            </p>
          </div>
        </div>

        {/* Remaining content below image */}
        <div className="mt-6 text-[17px] leading-[1.9] text-gray-700 text-justify space-y-5">
          <p>
            We recognize that these qualities are increasingly rare in today’s 
            fast-paced world, often due to limited access to quality education.
             At JIT, we are committed to creating a space where young minds can grow,
              not just academically but as well-rounded individuals, prepared for success
               in both their careers and personal lives.

          </p>
          
        </div>
      </div>
    </section>
  );
};

export default PresidentsDesk;
