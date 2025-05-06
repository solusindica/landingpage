import './App.css';
import Docturepolylogo from './Assets/Docturepolylogo.png';
import IPSAlogo from './Assets/IPSAlogo.png';
import Novadigmlogo from './Assets/Novadigmlogo.png';
import React, { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-6 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center md:text-left">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Service Box 1 */}
          <div className="bg-white p-6 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100">
            <img
              src={Docturepolylogo}
              alt="Docture poly"
              className="h-25 w-25 mb-4 mx-auto object-contain"
            />
            <p className="text-gray-600 text-center mb-4 text-base">
              Docture-Poly™ is an AI-powered wearable that blends Ayurveda with modern tech for personalized health and wellness recommendations.
            </p>
            <a href="https://docture-poly.com/">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                Learn More
              </button>
            </a>
          </div>

          {/* Service Box 2 */}
          <div className="bg-white p-6 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100">
            <img
              src={IPSAlogo}
              alt="IPSA logo"
              className="h-21 w-21  mb-4 mx-auto object-contain"
            />
            <p className="text-gray-600 text-center mb-4 text-base">
              IPSA integrates Ayurveda with AI and biotechnology to offer personalized, non-invasive health solutions, particularly for chronic conditions.
            </p>
            <a href="https://i-psa.org/">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                Learn More
              </button>
            </a>
           </div>

          {/* Service Box 3 */}
          <div className="bg-white p-6 shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100">
            <img
              src={Novadigmlogo}
              alt="Novadigm logo"
              className="h-22 w-22 mb-4 mx-auto object-contain"
            />
            <p className="text-gray-600 text-center mb-4 text-base">
              Novadigm combines Ayurvedic principles with modern diagnostic technologies, offering tailored treatments for individual metabolic profiles.
            </p>
            <a href="https://novadigm.health/">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
