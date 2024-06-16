import React, { useEffect, useRef } from 'react';
import './RevealText.css';

const RevealText = () => {
  const containerRef = useRef(null);
 

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          containerRef.current.classList.add('scrolled');
        } else {
          containerRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container && container.classList.contains('scrolled')) {
      const timer = setTimeout(() => {
        
      }, 1500); // Delay to match the end of the strike animation
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [containerRef.current?.classList]);

  return (
    <div className="scrolling-text-container" ref={containerRef}>
      <div className="first-line">
        <span className="digital">Digital solutions for</span>
      </div>

      <div className="second-line">
        <span>forward-thinking</span>
      </div>
      <div className="third-line">
        <span className="strike">Companies</span> <span className="new-word"> ^ People</span>
       
      </div>
      
    </div>
  );
};

export default RevealText