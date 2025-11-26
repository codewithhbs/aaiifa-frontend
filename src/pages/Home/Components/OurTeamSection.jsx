import React from "react";

const TeamMemberCard = ({ name, title, company, img }) => (
  <div className="our-team-card">
    <div className="our-team-img-wrapper">
      <img
       
        src={img}
        alt={`Portrait of ${name}`}
        className="our-team-img"
        loading="lazy"
      />
    </div>
    <h4 className="our-team-name">{name}</h4>
    <p className="our-team-role">{title}</p>
    <p className="our-team-company">{company}</p>
  </div>
);


const teamMembers = [
  {
    name: "Shri Yogesh Mandhani",
    title: "President",
    company: "Varad Ferro Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/Ygesh-Mandhani-Ji-Image.jpg",
  },
  {
    name: "Shri Gopal Gupta",
    title: "President Emeritus",
    company: "M/s Laxcon Steel Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/Gopal-sir-photo-nc.jpg",
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Immediate Past President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/g2.png",
  },
  {
    name: "Shri Ashok Garg",
    title: "Sr. Vice President",
    company: "Treasurer",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/ashok-garg.png",
  },
  {
    name: "Shri Kamal Aggarwal",
    title: "Hon. Secretary General",
    company: "M/s NIFS Steels",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/NIFS-Steels-Kamal-Sir-photo.jpg",
  },
  {
    name: "Shri Jitendra Singh",
    title: "Patron",
    company: "M/s ISC Machines Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/jitendra.jpg",
  },
  {
    name: "Shri Sandeep Jain",
    title: "Patron",
    company: "Trishala Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/sandeep.jpg",
  },
  {
    name: "Shri Ashok Surana",
    title: "Patron",
    company: "M/s Shobha Enterprises",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/surana.jpg",
  },
];

export default function OurTeamSection() {
  return (
    <section className="our-team-section">
      {/* Use a centralized container for padding and max-width */}
      <div className="our-team-container">
        {/* The subtitle and title should be semantic, possibly in a header element */}
        <header className="our-team-header">
          <p className="our-team-subtitle">NATIONAL MEMBER</p>
          <h2 className="our-team-title text-light">Meet Our Team</h2>
        </header>

        <div className="our-team-grid">
          {teamMembers.map((member, index) => (
            // NOTE: Using 'index' as a key is okay for static lists, but for production,
            // ensure your 'teamMembers' data has a unique ID and use that instead.
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>

        {/* Improved Button: An anchor tag (<a>) is the correct semantic element for a link */}
        <a href="/national-member" className="our-team-btn" aria-label="View the full list of national members">
          View All
        </a>
      </div>
    </section>
  );
}