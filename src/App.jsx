import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/Hero/About/About";
import GraduatePrograms from "./components/GraduatePrograms/GraduatePrograms";
import FacilitiesContact from "./components/Facilities/FacilitiesContact";
import Footer from "./components/Footer";
import Activity from "./components/Activity/Activity";
import Academics from "./components/Academics/Academics";
import Rules from "./components/Academics/RulesandRegulations";
import ContactUs from "./components/ContactUs/ContactUs";
import Administration from "./components/Administration/Administration";
import Admission from "./components/Academics/Admission";
import WhyJit from "./components/WhyJit/WhyJit";
import TestimonialSection from "./components/Testimonials/Testimonials";
import GetInTouchButton from "./components/GetInTouchButton";
import MissionVision from "./components/MissionVission/MissionVision";
import SearchResults from "./components/SearchResults";
import Exposure from "./components/WhyJit/Exposure";
import PlacementSection from "./components/Placement/PlacementSection";
import PresidentsDesk from "./components/PresidentsDesk/PresidentsDesk.jsx";
import Blog from "./components/Blog/blog.jsx";
import CSE from "./components/GraduatePrograms/CSE.jsx";
import Civil from "./components/GraduatePrograms/Civil.jsx";
import Mec from "./components/GraduatePrograms/Mech.jsx";
import EEE from "./components/GraduatePrograms/EEE.jsx";
import ECE from "./components/GraduatePrograms/ECE.jsx";
import DownloadProspectus from "./components/Hero/DownloadProspectus.jsx";
import AdmissionProcess from "./components/AdmissionProcess/AdmissionProcess.jsx";
import Humanitics_general from "./components/GraduatePrograms/Humanitics_general.jsx";

// main
const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // Add timeout to ensure DOM is ready
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      {/* <Router> */}
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="mission">
                <MissionVision />
              </div>
              {/* <Vision /> */}
              <div id="department">
                <GraduatePrograms />
              </div>
              <div id="why">{/* <WhyJit /> */}</div>
              <Exposure />
              <div id="facilities">
                <Activity />
              </div>
              <div id="placement">
                {/* <FacilitiesContact /> */}
                <PlacementSection />
              </div>
              <TestimonialSection />
              {/* <Highereducation/> */}
              <Footer />
            </>
          }
        />
        <Route path="/academics/about" element={<Academics />} />
        <Route path="/administration" element={<Administration />} />
        <Route path ="/admission-process" element = {<AdmissionProcess />} />
        <Route path = "/download-prospectus" element = {<DownloadProspectus />} />
        <Route path="/academics/rules" element={<Rules />} />
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/academics/Admission" element={<Admission />}></Route>
        <Route path="/search" element={<SearchResults />} />
        <Route path="/presidents-desk" element={<PresidentsDesk />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cse" element={<CSE />} />
        <Route path="/eee" element={<EEE />} />
        <Route path="/mec" element={<Mec />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/ece" element={<ECE />} />
        <Route path="/general" element={<Humanitics_general />} />
      </Routes>
      <GetInTouchButton />
      {/* <Footer /> */}
      {/* </Router> */}
    </>
  );
};

export default App;
