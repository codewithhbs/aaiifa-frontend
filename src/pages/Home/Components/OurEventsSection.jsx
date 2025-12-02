import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function OurEventsSection() {

  // ✅ Using the SAME events as your PastEvents page
  const events = [
    {
      year: "2024",
      title: "AIIFA SteelEx 2024",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/steel-event.jpg",
      location: "New Delhi",
      link: "/past-event-2024",
    },
    {
      year: "2023",
      title: "2023 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event.jpg",
      location: "New Delhi",
      link: "/past-event-2023",
    },
    {
      year: "2022",
      title: "2022 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-5.png",
      location: "New Delhi",
      link: "/past-event-2022",
    },
    {
      year: "2019",
      title: "2019 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event2.png",
      location: "New Delhi",
      link: "/past-event-2019",
    },
    {
      year: "2018",
      title: "2018 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-3-1.jpg",
      location: "New Delhi",
      link: "/past-event-2018",
    },
    {
      year: "2017",
      title: "2017 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-2-1.jpg",
      location: "New Delhi",
      link: "/past-event-2017",
    },
    {
      year: "2016",
      title: "2016 Event AIIFA",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/past-1-1.jpg",
      location: "New Delhi",
      link: "/past-event-2016",
    },
  ];

  return (
    <section className="our-events-section py-5">
      <div className="container">

        {/* ✅ Header + Arrows */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="text-center w-100">
            <p className="our-team-subtitle mb-2">OUR SUCCESS</p>
            <h2 className="our-team-title mb-3">Past Events</h2>
            <p className="our-events-description mx-auto">
              Relive the memorable moments from our previous successful events
            </p>
          </div>

          <div className="owl-custom-nav-layout1 ms-3 flex-shrink-0 d-flex gap-2">
            <button className="rt-prev swiper-button-prev">
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="rt-next swiper-button-next">
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>

        {/* ✅ Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="our-events-card h-100">
                <div className="our-events-img-wrapper position-relative">
                  <img
                    src={event.img}
                    alt={event.title}
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
                      <span className="our-events-arrow ms-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
