import React from 'react';
import { Link } from "react-router-dom";
import { FaIndustry } from "react-icons/fa";


export default function AboutUsSection() {
    return (
        <section className="about-us-section-image-text ">
            {/* Background Decorative Elements */}
            <div className="about-us-decorative-ring-top"></div> {/* New ring at top-right */}
            <div className="about-us-decorative-dots"></div> {/* New dot pattern */}
            <div className="about-us-decorative-shape-bottom"></div> {/* New bottom shape */}
            
            <div className="about-us-container">
                <div className="about-us-card">
                    {/* Left Column: Image and Floating Counter */}
                    <div className="about-us-image-column">
                        <div className="about-us-main-image-wrapper">
                            <div className="aiifa-profile-image">
              <img src="media/about/about1.jpg" alt="AIIFA Office" className="img-fluid" />
            </div>
                            
                        </div>
                        <div className="about-us-counter-card">
                                <div className="counter-icon-wrapper">
                                    <FaIndustry className="counter-icon" />
                                </div>
                                <div className="counter-details">
                                    <p className="counter-number-new">27%</p> {/* Changed content */}
                                    <p className="counter-label-new">India's Domestic Crude Steel Production</p> {/* Changed content */}
                                </div>
                            </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="about-us-content-column">
                        <p className="our-team-subtitle">ABOUT US</p> {/* Reusing existing subtitle class */}
                        <h2 className="our-team-title"> Know About Our Organization</h2> {/* Reusing existing title class */}
                        
                        <p className="about-us-description">
                            The All India Induction Furnaces Association (AIIFA) represents a major segment of India’s steel sector, especially units operating through Electric Induction Furnaces. With over 1000 furnace units and 1200 rolling mills nationwide, the industry produces nearly 30 million tonnes of steel annually—about 27% of the country’s crude steel output.
                        </p>
                        <p className="about-us-description">
                            It provides direct employment to over 2 million people and supports 3 million more. AIIFA works as a vital link between the Government and industry, promoting schemes, guiding research participation, addressing sectoral issues, and spreading awareness of policies to enhance quality, capacity, and reduce emissions.
                        </p>
                        
                        <button className="about-us-btn">
                            <Link to="/about-us" className="text-white">Read More</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}