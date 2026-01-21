import React, { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.1)' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    cardRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="spotlight-overlay" />
      <div className="spotlight-content">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
