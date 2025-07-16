import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAcademicsOpenMobile, setIsAcademicsOpenMobile] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleAcademicsMobile = () =>
    setIsAcademicsOpenMobile(!isAcademicsOpenMobile);

  const [isAboutOpen, setIsAboutOpen] = useState(false); // for desktop
  const [isAboutOpenMobile, setIsAboutOpenMobile] = useState(false); // for mobile
  const [isDeptOpen, setDeptOpen] = useState(false); // for desktop
  const [isDeptOpenMobile, setDeptOpenMobile] = useState(false); // for mobile

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to home first
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // Already on home, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchLower = searchQuery.toLowerCase();
    const sectionsToSearch = [
      "mission",
      "department",
      "about",
      "why",
      "facilities",
      "enquiry",
    ];
    for (let id of sectionsToSearch) {
      const section = document.getElementById(id);
      if (section && id.includes(searchLower)) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    alert(`No match found for "${searchQuery}"`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="w-full fixed top-0 md:top-12 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="logo" className="w-16 h-14" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("home")}
              className="text-gray-700 hover:text-[#E87722] hover:cursor-pointer font-bold"
            >
              Home
            </button>
            {/* <button onClick={() => handleNavClick("about")} className="text-gray-700 hover:text-[#E87722] hover:cursor-pointer font-bold">About Us</button> */}
            {/* About Us Dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="text-gray-700 hover:text-[#E87722] font-bold inline-flex items-center"
              >
                About Us <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isAboutOpen && (
                <div
                  className="absolute bg-white shadow-md mt-2 py-2 rounded w-56 z-10"
                  onMouseLeave={() => setIsAboutOpen(false)} // Optional auto-close
                >
                  <a
                    href="#about"
                    onClick={() => setIsAboutOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    About Us
                  </a>
                  <a
                    href="#mission"
                    onClick={() => setIsAboutOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    Mission & Vision
                  </a>
                  <Link
                    to="/admission-process"
                    onClick={() => setIsAboutOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    Admission Process
                  </Link>
                  <a
                    href="/Documents/AICTE1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsAboutOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    AICTE Approval
                  </a>

                  <a
                    href="/Documents/WBSCTE1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsAboutOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    WBSCTE Approval
                  </a>
                </div>
              )}
            </div>

            {/* Department Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDeptOpen(!isDeptOpen)}
                className="text-gray-700 hover:text-[#E87722] font-bold inline-flex items-center"
              >
                Department <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDeptOpen && (
                <div
                  className="absolute bg-white shadow-md mt-2 py-2 rounded w-56 z-10"
                  onMouseLeave={() => setDeptOpen(false)} // Optional auto-close
                >
                  <Link
                    to="/cse"
                    onClick={() => setDeptOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    Computer Science and Engineering
                  </Link>
                  <Link
                    to="/eee"
                    onClick={() => setDeptOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    Electrical Engineering
                  </Link>
                  {/* <Link
                    to="/ece"
                    onClick={() => setDeptOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    Electronics and Communication Engineering
                  </Link> */}
                  <Link
                    to="/civil"
                    onClick={() => setDeptOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    Civil Engineering
                  </Link>
                  <Link
                    to="/mec"
                    onClick={() => setDeptOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    Mechanical Engineering
                  </Link>
                </div>
              )}
            </div>
            {/* <button
              onClick={() => handleNavClick("department")}
              className="text-gray-700 hover:text-[#E87722] hover:cursor-pointer font-bold"
            >
              Department
            </button> */}
            <button
              onClick={() => handleNavClick("facilities")}
              className="text-gray-700 hover:text-[#E87722] hover:cursor-pointer font-bold"
            >
              Facilities
            </button>
            <button
              onClick={() => handleNavClick("placement")}
              className="text-gray-700 hover:text-[#E87722] hover:cursor-pointer font-bold"
            >
              Placement
            </button>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-[#E87722] font-bold"
            >
              Blog
            </Link>
            {/* Academics Dropdown - Clickable for Desktop */}
            {/* <div className="relative">
              <button
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                className="text-gray-700 hover:text-[#E87722] font-bold inline-flex items-center"
              >
                Academics <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isAcademicsOpen && (
                <div
                  className="absolute bg-white shadow-md mt-2 py-2 rounded w-48 z-10"
                  onMouseLeave={() => setIsAcademicsOpen(false)} // Optional auto-close
                >
                  <Link
                    to="/presidents-desk"
                    onClick={() => setIsAcademicsOpen(false)} // Close dropdown on click
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-[#E87722] font-bold"
                  >
                    President's Desk
                  </Link>
                </div>
              )}
            </div> */}
            {/* <a href="#blog" className="text-gray-700 hover:text-[#E87722] font-bold">Blog</a> */}
            {/* <a href="" className="text-gray-700 hover:text-[#E87722] font-bold">Contact</a> */}
            <Link
              to="/ContactUs"
              className="text-gray-700 hover:text-[#E87722] font-bold"
            >
              Contact
            </Link>
          </div>

          {/* Right - Search & CTA for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-[#f4a62f]"
            >
              <Search className="h-5 w-5" />
            </button>
            {isSearchOpen && (
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="border rounded px-3 py-1 focus:outline-none"
                />
              </form>
            )} */}
            <Link
              to="/admission"
              className="bg-[#E87722] hover:bg-[#3c254a] text-white px-6 py-2 font-medium rounded transition-colors"
            >
              ADMISSION OPEN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <button
              onClick={toggleSearch}
              className="text-gray-700 hover:text-[#E87722]"
            >
              <Search className="h-5 w-5" />
            </button> */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#E87722]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        {/* {isSearchOpen && (
          <div className="md:hidden mt-2 px-4">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm"
            >
              <Search className="h-5 w-5 text-gray-500 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search department, blogs..."
                className="w-full bg-transparent focus:outline-none text-sm"
              />
            </form>
          </div>
        )} */}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
          <button
            onClick={() => {
              handleNavClick("home");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium"
          >
            Home
          </button>
          {/* <button
      onClick={() => {
        handleNavClick("about");
        setIsMenuOpen(false);
      }}
      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium"
    >
      About Us
    </button> */}

          {/* Mobile About Us Dropdown */}
          <div className="block">
            <button
              onClick={() => setIsAboutOpenMobile(!isAboutOpenMobile)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium flex items-center justify-between"
            >
              About Us
              <ChevronDown className="w-4 h-4" />
            </button>
            {isAboutOpenMobile && (
              <div className="pl-6 mt-1">
                <a
                  href="#about"
                  onClick={() => {
                    setIsAboutOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  About Us
                </a>
                <a
                  href="#mission"
                  onClick={() => {
                    setIsAboutOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  Mission & Vision
                </a>
                <Link
                  to="/admission-process"
                  onClick={() => {
                    setIsAboutOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  Admission Process
                </Link>
                <a
                  href="/Documents/AICTE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsAboutOpen(false)}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  AICTE Approval
                </a>
                <a
                  href="/Documents/WBSCTE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsAboutOpen(false)}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  WBSCTE Approval
                </a>
              </div>
            )}
          </div>

          <div className="block">
            <button
              onClick={() => setDeptOpenMobile(!isDeptOpenMobile)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium flex items-center justify-between"
            >
              Department
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDeptOpenMobile && (
              <div className="pl-6 mt-1">
                <Link
                  to="/cse"
                  onClick={() => {
                    setDeptOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  Computer Science and Engineering
                </Link>

                <Link
                  to="/eee"
                  onClick={() => {
                    setDeptOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  Electrical Engineering
                </Link>

                {/* <Link
                  to="/ece"
                  onClick={() => {
                    setDeptOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  Electronics and Communication Engineering
                </Link> */}

                <Link
                  to="/civil"
                  onClick={() => {
                    setDeptOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  Civil Engineering
                </Link>

                <Link
                  to="/mec"
                  onClick={() => {
                    setDeptOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  Mechanical Engineering
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              handleNavClick("facilities");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium"
          >
            Facilities
          </button>
          <button
            onClick={() => {
              handleNavClick("placement");
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium"
          >
            Placement
          </button>
          <Link
            to="/blog"
            onClick={() => {
              setDeptOpenMobile(false);
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium"
          >
            Blogs
          </Link>

          {/* Mobile Academics Dropdown */}
          {/* <div className="block">
            <button
              onClick={toggleAcademicsMobile}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium flex items-center justify-between"
            >
              Academics
              <ChevronDown className="w-4 h-4" />
            </button>
            {isAcademicsOpenMobile && (
              <div className="pl-6 mt-1">
                <Link
                  to="/presidents-desk"
                  onClick={() => {
                    setIsAcademicsOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-600 hover:text-[#E87722] text-sm"
                >
                  President's Desk
                </Link>
              </div>
            )}
          </div> */}

          {/* <button
      onClick={() => {
        handleNavClick("contact");
        setIsMenuOpen(false);
      }}
      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium"
    >
      Contact
    </button> */}

          <button
            onClick={() => {
              navigate("/ContactUs"); // Navigate to Contact Page
              setIsMenuOpen(false); // Close mobile menu
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#E87722] font-medium"
          >
            Contact
          </button>

          <Link
            to="/ContactUs#enquiryy-form"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 mt-4 bg-[#E87722] hover:bg-[#3c254a] text-white rounded-md font-medium text-center"
          >
            ADMISSION OPEN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
