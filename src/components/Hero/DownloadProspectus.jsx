import React, { useState } from "react";
import Footer from "../Footer";

const DownloadProspectus = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with an API call or download logic
    alert(`Prospectus download link sent to ${formData.email}`);
    // Optionally trigger a download
    // window.open("/path/to/prospectus.pdf", "_blank");
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-14">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Get the Prospectus</h2>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#E87722] text-white py-2 rounded hover:bg-orange-500 transition"
        >
          Download Now
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default DownloadProspectus;
