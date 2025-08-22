import React, { useState } from 'react';

const GetInTouchButton = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <>
      {/* Button Animation & Position */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          showForm
            ? 'top-[325px] right-[284px] rotate-90'
            : 'top-1/2 right-[-35px] -translate-y-1/2 rotate-90'
        }`}
      >
        <button
          className="bg-[#E87722] text-white text-sm font-semibold px-2 py-1 rounded-t-md shadow-lg hover:bg-[#3c254a] transition"
          onClick={toggleForm}
        >
          Enquire Now
        </button>
      </div>

      {/* Animated Form Sliding */}
      <div
        className={`fixed top-36 z-40 bg-white border border-gray-300 rounded-lg shadow-xl w-80 p-4 transition-all duration-500 ease-in-out ${
          showForm
            ? 'right-0 opacity-100 scale-100'
            : '-right-[400px] opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Close Button (Optional X) */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 font-bold text-lg"
          onClick={toggleForm}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
          Admissions Open 2025-26
        </h2>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Enter Name *"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <input
            type="email"
            placeholder="Enter Email Address *"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 text-sm text-gray-600 rounded-l-md">
              +91
            </span>
            <input
              type="text"
              placeholder="Enter Mobile Number *"
              className="w-full px-3 py-2 border border-gray-300 rounded-r-md text-sm"
            />
          </div>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>Select State *</option>
          </select>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>Select City *</option>
          </select>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>Select Course *</option>
          </select>
          <label className="inline-flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            I agree to receive information
          </label>
          <button
            type="submit"
            className="w-full bg-[#E87722] text-white py-2 rounded-md text-sm hover:bg-[#3c254a] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default GetInTouchButton;
