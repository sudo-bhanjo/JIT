import React from "react";

const FacilitiesContact = () => {
  return (
    // <div className="flex flex-col md:flex-row w-full min-h-screen font-sans bg-gradient-to-r from-orange-50 via-white to-orange-100">
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100 font-sans">
      {/* Left Section */}
      {/* <div className="w-full md:w-1/2 bg-[#FFF7EB] text-[#4B2E1E] px-12 py-16">
        <h2
          className="text-4xl font-bold mb-10 border-b-4"
          style={{ borderColor: "#f4a62f" }}
        >
          Facilities We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm">
          {[
            {
              icon: "📶",
              title: "Internet Facilities",
              desc: "Reliable, fast internet for academic and entertainment needs.",
            },
            {
              icon: "🛏️",
              title: "Hostel Accommodation",
              desc: "Safe and comfortable lodging for all students.",
            },
            {
              icon: "🏈",
              title: "Sports & Recreation",
              desc: "Encouraging fitness with modern sports infrastructure.",
            },
            {
              icon: "👨‍🏫",
              title: "Training & Placement Cell",
              desc: "Empowering careers through industry exposure.",
            },
            {
              icon: "🧑‍💼",
              title: "Grooming Of Students",
              desc: "Preparing students for global opportunities.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition space-y-2 border"
              style={{ borderColor: "#f4a62f" }}
            >
              <div className="text-3xl">{item.icon}</div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "#f4a62f" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Right Section */}
      {/* <div className="w-full md:w-1/2 bg-white text-[#4B2E1E] px-12 py-16 flex items-center justify-center shadow-inner">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-8 border-b-4 pb-3 w-fit" style={{ borderColor: '#ff6347' }}>
            Make A Contact
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none border shadow-sm focus:ring-2"
              style={{
                borderColor: '#ffe3dc',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none border shadow-sm focus:ring-2"
              style={{
                borderColor: '#ffe3dc',
              }}
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none border shadow-sm focus:ring-2"
              style={{
                borderColor: '#ffe3dc',
              }}
            />
            <textarea
              placeholder="Write Comments"
              className="w-full px-4 py-3 rounded-lg bg-white text-black h-32 outline-none border shadow-sm resize-none focus:ring-2"
              style={{
                borderColor: '#ffe3dc',
              }}
            />
            <button
              type="submit"
              className="text-white px-6 py-3 rounded-lg transition-all w-full shadow-lg font-semibold"
              style={{ backgroundColor: '#ff6347' }}
            >
              Submit Now →
            </button>
          </form>
        </div>
      </div> */}

      <div className="w-[900px] h- bg-white text-[#4B2E1E] px-12 py-16 flex items-center justify-center shadow-inner">
        <div className="w-full max-w-md">
          <h2
            className="text-4xl font-bold mb-8 border-b-4 pb-3 w-fit"
            style={{ borderColor: "#E87722" }}
          >
            Admission Enquiry
          </h2>

          <form className="space-y-6">
            <select
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none border shadow-sm focus:ring-2"
              style={{ borderColor: "#ffe3dc" }}
            >
              <option value="">Select Course</option>
              <option value="btech">Civil Engineering</option>
              <option value="mba">Computer Science</option>
              <option value="bca">Mechanica Engineering</option>
              <option value="mtech">Electrical Engineering</option>
              <option value="mca">General Science</option>
            </select>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none border shadow-sm focus:ring-2"
              style={{ borderColor: "#E87722" }}
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none border shadow-sm focus:ring-2"
              style={{ borderColor: "#E87722" }}
            />

            <button
              type="submit"
              className="text-white px-6 py-3 rounded-lg transition-all w-full shadow-lg font-semibold"
              style={{ backgroundColor: "#E87722" }}
            >
              Enquiry Now →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesContact;
