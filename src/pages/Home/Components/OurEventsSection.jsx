import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OurEventsSection() {
  const events = [
    {
      year: "2022",
      title: "Event AIIFA",
      location: "SHANGRI-LA'S NEW DELHI",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event1.jpg",
      link: "/past-event-2022",
    },
    {
      year: "2019",
      title: "Event AIIFA",
      location: "SHANGRI-LA'S EROS HOTEL, NEW DELHI",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event2.png",
      link: "/past-event-2019",
    },
    {
      year: "2018",
      title: "Event AIIFA",
      location: "HOTEL E-MERIDIEN NEW DELHI OCT 22, 2018",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event3.jpg",      
      link: "/past-event-2018",
    },
    {
      year: "2017",
      title: "Event AIIFA",
      location: "SHANGRI-LA'S EROS HOTEL, NEW DELHI",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event4.jpg",
      link: "/past-event-2017",
    },
  ];

  return (
    <section className="our-events-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="our-team-subtitle mb-2">OUR SUCCESS</p>
          <h2 className="our-team-title mb-4">Past Events</h2>
          <p className="our-events-description mx-auto">
            Relive the memorable moments from our previous successful events
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {events.map((event, index) => (
            <div 
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12" 
              key={index}
            >
              <div className="our-events-card h-100">
                <div className="our-events-img-wrapper position-relative">
                  <img
                    src={event.img}
                    alt={`${event.year} ${event.title}`}
                    className="our-events-img"
                    loading="lazy"
                  />
                  <div className="our-events-year-badge">
                    {event.year}
                  </div>
                </div>
                <div className="our-events-content d-flex flex-column">
                  <h5 className="our-events-heading">
                    {event.title}
                  </h5>
                  <p className="our-events-location flex-grow-1">
                    {event.location}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href={event.link} 
                      className="our-events-link d-inline-flex align-items-center"
                    >
                      Read More 
                      <span className="our-events-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        {/* <div className="text-center mt-5">
          <button className="btn our-events-view-all-btn">
            View All Events
          </button>
        </div> */}
      </div>
    </section>
  );
}