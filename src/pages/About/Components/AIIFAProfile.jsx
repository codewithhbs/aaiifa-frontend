import React from "react";
import { Link } from "react-router-dom";
import { FaIndustry } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="about-us-section-image-text">
      {/* Decorative Elements */}
      <div className="about-us-decorative-ring-top" aria-hidden="true"></div>
      <div className="about-us-decorative-dots" aria-hidden="true"></div>
      <div className="about-us-decorative-shape-bottom" aria-hidden="true"></div>

      <div className="about-us-container">
        {/* ================= MAIN GRID CARD ================= */}
        <div className="about-us-card">
          {/* ===== LEFT: IMAGE COLUMN ===== */}
          <div className="about-us-image-column">
            <div className="about-us-main-image-wrapper">
              <figure className="aiifa-profile-image">
                <img
                  src="media/about/about1.jpg"
                  alt="AIIFA Office Building"
                  className="img-fluid"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* Floating Counter */}
            <div className="about-us-counter-card">
              <div className="counter-icon-wrapper">
                <FaIndustry className="counter-icon" />
              </div>
              <div className="counter-details">
                <p className="counter-number-new">27%</p>
                <p className="counter-label-new">
                  India's Domestic Crude Steel Production
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: CONTENT COLUMN ===== */}
          <div className="about-us-content-column">
            <p className="our-team-subtitle">ABOUT US</p>

            <h2 className="our-team-title">
              Know About Our Organization
            </h2>

            <p className="about-us-description">
              <strong>AIIFA Sustainable Steel Manufacturers Association</strong>{" "}
              is a premier industry body driving sustainable growth across
              India’s steel manufacturing sector. Representing over 1,800
              members—including induction furnace units, rolling mills, casting
              units, fabricators, and manufacturers—AIIFA advocates for
              environmentally responsible and economically viable practices
              aligned with national development goals and global competitiveness.
            </p>

            <p className="about-us-description">
              Headquartered in New Delhi with twelve regional chapters across
              major industrial zones, AIIFA serves as a key interface between
              industry stakeholders and government bodies. It actively engages
              in policy advocacy, facilitates implementation of government
              schemes, and collaborates on R&amp;D initiatives with relevant
              ministries and institutions.
            </p>

          </div>
        </div>

        {/* ================= FULL-WIDTH EXTENDED CONTENT ================= */}
        <div className="about-us-extended-content pt-4">
          <p className="about-us-description">
            The association plays a critical role in promoting advanced
            steel-making and processing technologies, enabling its members to
            enhance product quality, reduce greenhouse gas emissions, and expand
            their global footprint. Through its flagship national conferences
            – cum – exhibition and annual industry meets, AIIFA fosters
            strategic dialogue, shares best practices, and strengthens
            alignment with the government’s target of achieving 300 million
            tonnes of steel capacity by 2030.
          </p>

          <p className="about-us-description">
            By translating policy engagement into actionable outcomes, AIIFA
            continues to champion innovation, efficiency, and sustainability—
            reinforcing its leadership in shaping a future-ready,
            low-carbon, and resilient steel sector for India.
          </p>
        </div>
      </div>
    </section>
  );
}
