import {
  Headset,
  MailIcon,
  MapPinHouseIcon,
  NotebookTabsIcon,
  PhoneIcon,
} from "lucide-react";
import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  return (
    <>
      <div className="min-h-screen bg-[#F9F8F8] px-4 sm:px-6 lg:px-12 pt-50 pb-10 flex flex-col lg:flex-row gap-8">
        {/* Campus Section */}
        <div className="bg-white rounded-xl p-6 flex-1 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Campus</h2>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <MapPinHouseIcon color="#ff7a52" />
              <p className="font-semibold text-base sm:text-lg">Address</p>
            </div>
            <p className="text-gray-700 mt-2 pl-[35px] text-sm sm:text-base">
              JALPAIGURI INSTITUTE OF TECHNOLOGY Polytechnic College,
              <br />
              Jalpaiguri, Chewara Para, (Near Raninagar BSF Camp)
              <br />
              Post – Patkata, P.S. Kotwali,
              <br />
              Dist – Jalpaiguri.
              <br />
              Land Mark: Raninagar BSF Camp, Jalpaiguri. National Highway: NH
              31D
            </p>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <PhoneIcon color="#ff7a52" />
              <p className="font-semibold text-base sm:text-lg">Phone Number</p>
            </div>
            <p className="text-gray-700 mt-2 pl-[35px] text-sm sm:text-base">
              85092 49386 (Campus), 83482 33384, 85092 49386
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2">
              <MailIcon color="#ff7a52" />
              <p className="font-semibold text-base sm:text-lg">Email ID</p>
            </div>
            <p className="text-gray-700 mt-2 pl-[35px] text-sm sm:text-base">
              jalpaiguri.institute.technology@gmail.com
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.278289655287!2d8.75872391485649!3d26.49148868330813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4d0611a5e946b%3A0xf77c4414f2b65a06!2sRaninagar%20BSF%20Camp!5e0!3m2!1sen!2sin!4v1683875015212!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="campus-map"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* General & Placement Section */}
        <div className="bg-white rounded-xl p-6 flex-1 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              General Information (Admission)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <div>
                <div className="flex items-center gap-2">
                  <MailIcon color="#ff7a52" />
                  <span className="font-semibold">
                    To know more, please mail us at:
                  </span>
                </div>
                <p className="pl-[35px]">jalpaiguri.institute.technology@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <PhoneIcon color="#ff7a52" />
                  <span className="font-semibold">
                    Contact with Santanu Dey:
                  </span>
                </div>
                <p className="pl-[35px]">85092 49386</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Training & Placement/Educational Verification
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <div>
                <div className="flex items-center gap-2">
                  <MailIcon color="#ff7a52" />
                  <span className="font-semibold">
                    For placement purpose please mail us at:
                  </span>
                </div>
                <p className="pl-[35px]">jalpaiguri.institute.technology@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <PhoneIcon color="#ff7a52" />
                  <span className="font-semibold">
                    Contact with Santanu Dey:
                  </span>
                </div>
                <p className="pl-[35px]">85092 49386</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Corporate Office
            </h2>
            <div className="flex items-center gap-2">
              <MapPinHouseIcon color="#ff7a52" />
              {/* <strong>Address</strong> */}
              <p className="text-gray-600 pl-[5px] text-sm sm:text-base">
                KS Foundation and Charitable Trust, Lotus Tower, 4th Floor,
                Sevoke Road, Siliguri - 734001
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">
              Women Help Line
            </h2>
            <div className="space-y-2 text-sm sm:text-base text-gray-700">
              <div>
                <div className="flex items-center gap-2">
                  <Headset color="#ff7a52" />
                  {/* <strong>Telephone Number</strong> */}
                  <span className="text-gray-600 pl-[5px]">8348233384</span>
                </div>
                <span className="text-gray-600 pl-[37px]">7319407857</span>
              </div>
              {/* <div>
                <div className="flex items-center gap-2">
                  <Headset color="#ff7a52" />
                  <strong>Contact Number</strong>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* === ADMISSION ENQUIRY FORM === */}
      <div
        id="enquiryy-form"
        className="max-w-4xl bg-[#F9F8F8] mx-auto m-4 p-6 sm:p-8 rounded-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Admission Enquiry
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          Fill the form and submit, our executive will contact you soon
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg outline-0 px-4 py-3 w-full"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="border border-gray-300 rounded-lg outline-0 px-4 py-3 w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg outline-0 px-4 py-3 w-full"
            />
            <select className="border border-gray-300 outline-0 rounded-lg px-4 py-3 w-full text-gray-500">
              <option>Select Courses</option>
              <option>Civil Engineering</option>
              <option>Computer Sc. & Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Electrical Engineering</option>
              {/* <option>General Science</option> */}
            </select>
          </div>

          <textarea
            placeholder="Message"
            rows="5"
            className="border border-gray-300 rounded-lg outline-0 px-4 py-3 w-full"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#E87722] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 hover:bg-[#3c254a] transition-transform"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
