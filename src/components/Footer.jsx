import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3c254a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Academics */}
        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative after:block after:w-16 after:h-[2px] after:bg-[#f79f34ec] after:mt-2">
            Academics
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                About Academics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Admission
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Rules & Regulations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Exploration with Expression
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Student Grievances Cell
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Mandatory Disclosure
              </a>
            </li>
            <li className="hidden sm:block">
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Affiliation
              </a>
            </li>
            <li className="sm:hidden">
              <button className="text-[#E87722]">More...</button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative after:block after:w-16 after:h-[2px] after:bg-[#E87722] after:mt-2">
            Administration
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Administration
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                President's Desk
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Principal's Message
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Director's Message
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Governing Body
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Alumni
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative after:block after:w-16 after:h-[2px] after:bg-[#E87722] after:mt-2">
            Departments
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Civil Engineering
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Computer Science & Engineering
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Mechanical Engineering
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Electrical Engineering
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Humanities & Basic Science
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative after:block after:w-16 after:h-[2px] after:bg-[#E87722] after:mt-2">
            Facilities
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Central Library
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Hostel Accommodation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Sports and Recreation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#E87722] transition-colors duration-200"
              >
                Other Facilities
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 md:col-span-3 lg:col-span-1">
          <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative after:block after:w-16 after:h-[2px] after:bg-[#E87722] after:mt-2">
            Contact us
          </p>
          <ul className="space-y-4 sm:space-y-6 text-sm text-gray-300">
            {/* Phone */}
            <li className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 bg-[#E87722] p-2 sm:p-3 rounded-full">
                <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="pt-1">
                +91 85092 49386
                <br />
                +91 83482 33384
              </span>
            </li>
            {/* Email */}
            <li className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 bg-[#E87722] p-2 sm:p-3 rounded-full">
                <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="pt-1 break-all">
                jalpaiguri.institute.technology@gmail.com
              </span>
            </li>
            {/* Address */}
            <li className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 bg-[#E87722] p-2 sm:p-3 rounded-full">
                <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="pt-1">
                Chewara Para, (Near Raninagar BSF Camp), Post – Patkata, P.S.
                Kotwali, Dist – Jalpaiguri.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E87722] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-white text-xs sm:text-sm gap-4">
          <div className="flex items-center justify-center gap-2">
            <img
              src="https://jitpolytech.in/assets/images/All_India_Council_for_Technical_Education_logo.png"
              alt="AICTE Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <img
              src="https://jitpolytech.in/assets/images/West_Bengal_State_Council_of_Technical_Education_Logo.png"
              alt="WBSCTE Logo"
              className="h-8 sm:h-10 object-contain"
            />
          </div>
          <div className="text-center sm:text-right">
            &copy; 2025 Jalpaiguri Institute of Technology. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            Designed by Simtrak Solutions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
