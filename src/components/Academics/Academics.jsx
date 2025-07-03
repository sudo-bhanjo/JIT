import React from "react";
import GraduatePrograms from "../GraduatePrograms/GraduatePrograms";
const AboutAcademics = () => {
  return (
    <div className="px-6 md:px-20 py-12 min-h-screen">
      <h1 style={{ color: 'black' }} className="text-4xl font-bold mb-8 border-b-4 border-blue-500 inline-block">
        About Academics
      </h1>
      <p className="mb-4">
        In response to the pressing need for skilled technical professionals and
        mindful of the fiscal challenges confronting government initiatives, the
        KS Foundation and Charitable Trust embarked on a pioneering mission.
        Recognizing the critical role of education in addressing societal needs
        and fostering economic growth, they made a significant investment in the
        establishment of Jalpaiguri Institute of Technology Polytechnic College
        in 2015.
      </p>
      <p className="mb-4">
        At the heart of this endeavour lies a commitment to supplementing the
        efforts of the state government in expanding access to technical
        education. By founding this institution, the Foundation aimed to bridge
        the gap between demand and supply in the workforce, particularly in
        sectors requiring specialized technical expertise. Through strategic
        collaboration and proactive engagement, the College seeks to contribute
        to the overarching goal of empowering individuals and communities
        through education.
      </p>
      <p className="mb-4">
        With a vision firmly rooted in the principles of inclusivity and
        excellence, Jalpaiguri Institute of Technology Polytechnic College
        aspires to be a beacon of innovation and learning in the region. By
        providing a nurturing and conducive environment for academic growth, the
        College endeavors to cultivate a new generation of skilled professionals
        equipped to tackle the challenges of the modern world.
      </p>
      <p className="mb-4">
        Driven by the ethos of social responsibility and guided by principles of
        ethical leadership, the College is committed to fostering holistic
        development among its students. Through a comprehensive academic
        curriculum, supplemented by practical training and experiential learning
        opportunities, students are empowered to explore their potential and
        chart their paths to success.
      </p>
      <p>
        With state-of-the-art facilities, dedicated faculty, and a dynamic
        learning environment, Jalpaiguri Institute of Technology Polytechnic
        College stands as a testament to the transformative power of education.
        As it continues to evolve and innovate, the College remains steadfast in
        its mission to empower individuals, transform communities, and shape a
        brighter future for generations to come.
      </p>

      {/* Add the GraduatePrograms component here */}
      <GraduatePrograms />
    </div>
  );
};

export default AboutAcademics;
