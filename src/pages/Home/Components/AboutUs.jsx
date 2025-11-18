import React from 'react';
import Img from '../Images/abt1.jpg'; // Ensure this path is correct
import { Link } from "react-router-dom";
import { FaUserGraduate } from 'react-icons/fa'; // Only FaUserGraduate needed for the counter icon

export default function AboutUsSection() {
    return (
        <section className="about-us-section-image-text">
            {/* Background Decorative Elements */}
            <div className="about-us-decorative-ring-top"></div> {/* New ring at top-right */}
            <div className="about-us-decorative-dots"></div> {/* New dot pattern */}
            <div className="about-us-decorative-shape-bottom"></div> {/* New bottom shape */}
            
            <div className="about-us-container">
                <div className="about-us-card">
                    {/* Left Column: Image and Floating Counter */}
                    <div className="about-us-image-column">
                        <div className="about-us-main-image-wrapper">
                            <img 
                                src={Img}
                                alt="Students in a classroom" 
                                className="about-us-main-image" 
                            />
                            {/* Floating Counter Card - Updated Content */}
                            
                        </div>
                        <div className="about-us-counter-card">
                                <div className="counter-icon-wrapper">
                                    <FaUserGraduate className="counter-icon" />
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
                            All India Induction Furnaces Association (AIIFA) being the premier
                            steel industry association of Electric Induction Furnaces in the
                            country represents a major section of steel units, producing steel
                            through this route. There are over 1000 Induction furnace units
                            and over 1200 steel rolling mill units across the country.
                        </p>
                        <p className="about-us-description">
                            These units collectively produce around 30 Million tonnes (MT) of
                            steel annually, representing nearly 27% of India’s domestic crude
                            steel production. This sector also provides direct employment to
                            over 2 million people and supports the livelihood of an additional
                            3 million individuals.
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