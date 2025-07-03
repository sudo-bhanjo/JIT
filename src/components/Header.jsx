import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  Facebook,
  Instagram,
  MailCheckIcon,
  PhoneCallIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <header className="head pr-2">
      {/* <div className="logo">
<div className="marquee-container">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              Admissions Open for 2025–2026 | Apply Now for Diploma Courses |
              Limited Seats Available – Enroll Today! | Join a Legacy of
              Excellence | Shape Your Future with Us | Kickstart Your
              Engineering Career Now!
            </div>
            <div className="marquee-content">
              For ADMISSION Related Queries Call 8509249386 | 7001832474 | 7407750050 Office - 8348233384
            </div>
          </div>
        </div>
      </div> */}
      <div className="logo bg-[#E87722] overflow-hidden">
        <div
          className="marquee-wrapper flex whitespace-nowrap animate-marquee gap-12"
          style={{ animationDuration: "30s" }}
        >
          <div className="marquee-content text-white font-semibold text-base md:text-lg">
            Admissions Open for 2025–2026 | Apply Now for Diploma Courses |
            Limited Seats Available – Enroll Today! | Join a Legacy of
            Excellence | Shape Your Future with Us | Kickstart Your Engineering
            Career Now!
          </div>
          <div className="marquee-content text-white font-semibold text-base md:text-lg">
            For ADMISSION Related Queries Call 8509249386 | 7001832474 |
            7407750050 Office - 8348233384
          </div>

          {/* Repeat for seamless scroll */}
          <div className="marquee-content text-white font-semibold text-base md:text-lg">
            Admissions Open for 2025–2026 | Apply Now for Diploma Courses |
            Limited Seats Available – Enroll Today! | Join a Legacy of
            Excellence | Shape Your Future with Us | Kickstart Your Engineering
            Career Now!
          </div>
          <div className="marquee-content text-white font-semibold text-base md:text-lg">
            For ADMISSION Related Queries Call 8509249386 | 7001832474 |
            7407750050 Office - 8348233384
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center h-[50px] w-[60%]">
        <div className="flex items-center gap-x-8 text-white pl-3">
          {/* <h3>Follow us</h3> */}
          {/* <FaFacebook size={22} className="hover:cursor-pointer" />
          <FaInstagram size={22} className="hover:cursor-pointer" /> */}
          {/* <FaWhatsapp size={22} className="hover:cursor-pointer" /> */}
          {/* <FaYoutube size={22} className="hover:cursor-pointer" /> */}

          <a
            href="https://www.facebook.com/share/1GAPbRyXdW/?mibextid=wwXIfr"
            target="_blank"
            rel="facebook"
          >
            <FaFacebook size={22} className="hover:cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/jitpolytech.in?igsh=MTdzdXJ2enNxN200cA=="
            target="_blank"
            rel="instagram"
          >
            <FaInstagram size={22} className="hover:cursor-pointer" />
          </a>
          <a href="https://wa.me/yourNumber" target="_blank" rel="whatsapp">
            <FaWhatsapp size={22} className="hover:cursor-pointer" />
          </a>
        </div>
        <div className="detail">
          <PhoneCallIcon size={28} color="#f4a62f" fontWeight={100} />
          <div className="det">
            <p className="num">+91 8509 249 386</p>
          </div>
        </div>
        <div className="detail">
          <MailCheckIcon size={28} color="#f4a62f" fontWeight={300} />
          <div className="det">
            <a
              href="mailto:jalpaiguri.institute.technology@gmail.com"
              className="mail"
            >
              jalpaiguri.institute.technology@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
