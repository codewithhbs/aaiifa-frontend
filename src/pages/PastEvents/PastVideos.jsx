import { useNavigate } from "react-router-dom";
import React from "react";

const PastVideos = () => {
  const navigate = useNavigate();

  const events = [
    {
      year: "2025",
      title: "AIIFA Steelex 2025",
      videoUrl: "https://www.youtube.com/embed/IKOzUDAL17E?si=CvXH6UPqpJLD_tPc",
      hasMultiple: true, // ✅ special flag
    },
    {
      year: "2024",
      title: "AIIFA SteelEx 2024",
      videoUrl: "https://www.youtube.com/embed/MSQgsZfdv1k?si=AkQEYeBon6UjRIrz",
    },
    {
      year: "2023",
      title: "AIIFA 2023 Event Recap",
      videoUrl: "https://www.youtube.com/embed/7fjhxlHZNp8?si=-GVWAsis-DK9xmDb",
    },
    {
      year: "2022",
      title: "AIIFA 2022 Conference Moments",
      videoUrl: "https://www.youtube.com/embed/lYW2bN0V9Ug?si=MSOnj-8ltWRXminU",
    },
  ];

  return (
    <section className="past-events-section">
      <div className="past-events-container">
        <div className="past-events-header">
          <p className="past-events-subtitle">EVENT VIDEO</p>
          <h1 className="past-events-main-title">AIIFA</h1>
        </div>

        <div className="past-events-grid">
          {events.map((event, index) => (
            <div
              className={`past-event-card ${
                event.hasMultiple ? "clickable" : ""
              }`}
              key={index}
              onClick={() =>
                event.hasMultiple
                  ? navigate("/past-videos-2025")
                  : null
              }
            >
              <div className="past-event-video">
                <iframe
                  src={event.videoUrl}
                  title={event.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="past-event-title-bar">
                <h3>{event.title}</h3>
                {event.hasMultiple && (
                  <span className="view-more-badge">View All</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastVideos;
