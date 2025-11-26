import React, { useState } from "react";
import { Search } from "lucide-react";
import './style.css'

const teamMembers = [
  {
    name: "Shri Yogesh Mandhani",
    title: "President",
    company: "Varad Ferro Alloys Pvt. Ltd.",
    img: "media/team/Ygesh-Mandhani-Ji-Image.jpg",
  },
  {
    name: "Shri Kamal Aggarwal",
    title: "Hon. Secretary General",
    company: "M/s NIFS Steels",
    img: "media/team/NIFS-Steels-Kamal-Sir-photo.jpg",
  },
  {
    name: "Shri Gopal Gupta",
    title: "President Emeritus",
    company: "M/s Laxcon Steel Ltd",
    img: "media/team/Gopal-sir-photo-nc.jpg",
  },
  {
    name: "Shri Jitendra Singh",
    title: "Former President",
    company: "M/s ISC Machines Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-jitendra-singh.jpg",
  },
  {
    name: "Shri K.K. Garg",
    title: "Former President",
    company: "Sharu Steels Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-k. k.-garg.jpg",
  },
  {
    name: "Shri Sandeep Jain",
    title: "Former President",
    company: "Trishala Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/sandeep.jpg",
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Former President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "media/team/g2.png",
  },
  {
    name: "Shri Ashok Garg",
    title: "Sr. Vice President ",
    company: "Treasurer",
    img: "media/team/ashok-garg.png",
  },
];

export default function GoverningBodies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      
      <section className="our-team-section">
        <div className="our-team-container">
          <p className="our-team-subtitle mb-4">Our GOVERNING BODIES</p>
          {/* <h2 className="our-team-title text-white">Our Team</h2> */}

          {/* Search Bar */}
          

          <div className="our-team-grid">
            {filteredMembers.map((member, index) => (
              <div className="our-team-card" key={index}>
                <div className="our-team-img-wrapper">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="our-team-img"
                  />
                </div>
                <h4 className="our-team-name">{member.name}</h4>
                <p className="our-team-role">{member.title}</p>
                <p className="our-team-company">{member.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
