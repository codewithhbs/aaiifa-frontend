import React, { useEffect, useRef, useState } from 'react';
import { FaEye, FaRocket, FaGem } from 'react-icons/fa';

const ThreeCardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      id: '01',
      icon: <FaEye />,
      title: 'VISION',
      description: 'To advance the future of machine reliability, where machines last their designed life and industries run with no unplanned breakdowns.',
      color: '#FF5E14',
      ariaLabel: 'Vision card - Read more about our vision'
    },
    {
      id: '02',
      icon: <FaRocket />,
      title: 'MISSION',
      description: 'To predict and deliver machine diagnostics and recommendations well in advance in a way that no machine experiences unexpected breakdown and industries can run at their full capacity.',
      color: '#B70917',
      ariaLabel: 'Mission card - Read more about our mission'
    },
    {
      id: '03',
      icon: <FaGem />,
      title: 'CORE VALUES',
      description: 'we design, manufacture, and distribute a wide range of top-quality steel products for construction, infrastructure, energy, and industrial applications.',
      color: '#0D2C60',
      ariaLabel: 'Core values card - Read more about our core values'
    }
  ];

  return (
    <section 
      className="three-cards-section" 
      ref={sectionRef}
      aria-labelledby="three-cards-heading"
    >
      <div className="three-cards-container">
        <div className="three-cards-grid">
          <div className={`three-cards-intro ${isVisible ? 'visible' : ''}`}>
            <div className="three-cards-eyebrow mb-2">Who We Are</div>
            <h2 id="three-cards-heading" className="our-team-title text-white mb-2">
              Guided by Purpose
            </h2>
            <p className="three-cards-description">
              Our foundation is built on clarity of purpose, unwavering commitment, 
              and values that inspire everything we do.
            </p>
          </div>

          <div className="cards-wrapper">
            {cards.map((card) => (
              <article
                key={card.id}
                className={`card ${isVisible ? 'visible' : ''}`}
                style={{
                  border: `1px solid ${card.color}`,
                  boxShadow: `0 4px 6px -1px ${card.color}20, 0 2px 4px -1px ${card.color}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 25px -5px ${card.color}30, 0 10px 10px -5px ${card.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 6px -1px ${card.color}20, 0 2px 4px -1px ${card.color}10`;
                }}
              >
                <div 
                  className="card-number" 
                  style={{ color: card.color }}
                  aria-hidden="true"
                >
                  {card.id}
                </div>
                
                <div 
                  className="card-icon" 
                  style={{ backgroundColor: card.color }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                
                <h3 className="card-title">{card.title}</h3>
                
                <p className="card-text">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeCardsSection;