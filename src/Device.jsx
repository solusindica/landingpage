import './App.css';
import React, { useEffect, useRef } from 'react';
import Device1 from './Assets/Device1.jpg';


function Device() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add('slide-in');
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="device" className="device-section">
      <h1 className="text-3xl font-semibold mb-10 text-center md:text-left">Docture-Poly Device</h1>
    <div className="device-container">
      
      
      <div className="device-slider">
        <img src={Device1} alt="Device 1" />
       
      </div>
  
      {/* Text Right */}
      <div className="device-description" ref={textRef}>
        <h1 className="text-3xl font-bold mb-4">Docture-Poly™</h1>
        <p className="mb-6 text-gray-700">
          Docture-Poly™ is an AI-powered wearable device that analyzes your unique metabolic profile using Ayurvedic principles.
          It offers personalized health guidance through a non-invasive, user-friendly experience. Track your wellness journey with precision.
        </p>
  
        {/* Buy Now Button */}
        <a
          href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-913207480"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Buy Now
        </a>
      </div>
    </div>
  </section>
  
  );
}

export default Device;
