import React from "react";

const PrincipalsMessage = () => {
         return (
    <section className="px-5 py-10 bg-gradient-to-br from-[#fceae1] to-white text-gray-800">
      <div className="max-w-6xl mx-auto mt-13 md:mt-25 lg:mt-25">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#E87722] mb-8">
          Principal's Message
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
                Principal, KS Foundation and Charitable Trust
              </p>
            </div>
            <p>
               Education is the key that unlocks the doors of opportunity. At our
            institution, we aim to provide not just knowledge, but also values
            that inspire students to dream, innovate, and lead with integrity.

            </p>

            <p>
             We believe in creating an environment where curiosity thrives,
            learning becomes meaningful, and every learner is motivated to
            achieve excellence. Together, let us continue to shape a brighter
            future.

 
            </p>
          </div>
        </div>

        {/* Remaining content below image */}
        <div className="mt-6 text-[17px] leading-[1.9] text-gray-700 text-justify space-y-5">
          <p>
             Our mission is to nurture not only academic excellence but also the
            personal growth of each student. We strive to create a supportive
             learning environment where curiosity is encouraged, creativity is
              celebrated, and character is built alongside knowledge.


          </p>
          
        </div>
      </div>
    </section>
  );
};

export default PrincipalsMessage;
