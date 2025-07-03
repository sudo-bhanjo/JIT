import React from "react";
import "./Administration.css";
import GraduatePrograms from "../GraduatePrograms/GraduatePrograms";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import Boss from "./Admin-assets/boss.png";
import President from "./Admin-assets/president.png";
import Group from "./Admin-assets/group.png";
const Administation = () => {
  const members = [
    {
      id: 1,
      name: "Mr. Kajal Sarkar",
      post: "President,KS Foundation and Charitable trust",
      image: President,
    },
    {
      id: 2,
      name: "Dr. Ashim Kumar Bhadra",
      post: "Principal, JALPAIGURI INSTITUTE OF TECHNOLOGY PTC, Jalpaiguri.",
      image: Boss,
    },
    {
      id: 3,
      name: "Members of Governing Body",
      post: "JALPAIGURI INSTITUTE OF TECHNOLOGY Polytechnic College",
      image: Group,
    },
  ];
  return (
    <div className="admin-container">
      <h1 className="admin-heading">Administration</h1>
      <p className="admin-text">
        The College Administration led by the Administrative officer & Assistant
        Academic Head, works with students, academic and support staff to ensure
        the effective administration of all matters of student recruitment,
        admissions, enrollment, teaching and assessment time-tabling, the
        recording and processing of marks, student achievement statistics and
        course approval, monitoring and review. Student support and guidance are
        also integral parts of College Administration. The College
        Administration also processes student's complaints, academic appeals,
        student disciplinary cases and issues related to data protection and
        freedom of information. In spite of all the achievements, there are
        always room for further development. We need to expand our existing
        building in very near future. But as we have seen in the past, with the
        support from all quarters, we believe that we will be able to tide over
        all the hurdles and become a model of technical education among the
        polytechnics.
      </p>
      <div className="team">
        <span className="icon">🎓</span> Our Team
      </div>
      <div className="team-desc">
        <h1>Meet Our Administration</h1>
      </div>
      <div className="admin-grid">
        {members.map((member) => (
          <div key={member.id} className="admin-card">
            <div className="img-wrapper">
              <img src={member.image} alt="" />
            </div>
            <div className="admin-content">
              <h2>{member.name}</h2>
              <p>{member.post}</p>
              <div className="admin-socials">
                <a to="#">
                  <FaFacebookF />
                </a>
                <a to="#">
                  <FaInstagram />
                </a>
                <a to="#">
                  <FaTwitter />
                </a>
                <a to="#">
                  <FaGoogle />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <GraduatePrograms />
    </div>
  );
};

export default Administation;
