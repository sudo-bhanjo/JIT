import React, { useState, useEffect } from "react";
import "./Hero.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";
const heroImages = [images.hi, images.hi1, images.hi2, images.hi3, images.hi4];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex, isTransitioning]);

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const heroSubtitles = [
    "Learn. Apply. Succeed — Your Journey Begins at JIT.",
    "Transforming Aspiration into Achievement!",
    "Your Future in Engineering Starts Here!",
    "Empowering the Next Generation of Innovators!",
    "Shaping Engineers for Tomorrow — Today!",
  ];

  return (
    <>
      {window.innerWidth <= 768 && (
        <div className="marquee-container">
          <marquee
            className="mobile-marquee"
            behavior="scroll"
            direction="left"
            scrollamount="6"
          >
            Admissions Open for 2025–2026 | Apply Now for Diploma Courses |
            Limited Seats Available – Enroll Today! | Join a Legacy of
            Excellence | Shape Your Future with Us | Kickstart Your Engineering
            Career Now! / For ADMISSION Related Queries Call 8509249386 |
            7001832474 | 7407750050 Office - 8348233384
          </marquee>
        </div>
      )}

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1 className="headline">Welcome to</h1>
            <h1 className="headl">Jalpaiguri Institute of Technology</h1>
            <p className="subheading">{heroSubtitles[currentImageIndex]}</p>
            <p className="description">Approved by AICTE & WBSCTE.</p>
            <div className="cta-buttons">
              {/* <button className="btn primary">Apply Now</button> */}
              <Link to="/ContactUs#enquiryy-form">
                <button className="btn primary">Apply Now</button>
              </Link>
              <Link to="/download-prospectus">
                <button className="btn secondary">Download Prospectus</button>
              </Link>

              {/* <button className="btn secondary">Download Prospectus</button> */}
              {/* <button className="btn primary">Visit Campus</button> */}
            </div>
          </div>

          <div className="arrow left" onClick={handlePrevSlide}>
            ❮
          </div>
          <div className="arrow right" onClick={handleNextSlide}>
            ❯
          </div>

          <div className="image-indicators">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => {
                  if (!isTransitioning && index !== currentImageIndex) {
                    setIsTransitioning(true);
                    setCurrentImageIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Info Cards
      <div className="info-cards">
        <div className="card blue">
          <h3>📚 Education Services</h3>
          <p>
            Seamlessly visualize quality electrical capital without superior
            collaboration and idea sharing listically
          </p>
          <a to="#">Read More →</a>
        </div>
        <div className="card orange">
          <h3>🌐 International Hubs</h3>
          <p>
            Seamlessly visualize quality electrical capital without superior
            collaboration and idea sharing listically
          </p>
          <a to="#">Read More →</a>
        </div>
        <div className="card darkblue">
          <h3>📝 Bachelor's and Master's</h3>
          <p>
            Seamlessly visualize quality electrical capital without superior
            collaboration and idea sharing listically
          </p>
          <a to="#">Read More →</a>
        </div>
      </div> */}
      </section>
    </>
  );
};

export default Hero;
