import React from 'react';
import cardioligy from './Assets/cardiologie.jpg';
import Dermatology from './Assets/Dermatology.jpg';
import Neurology from './Assets/Neurology.png';
import Oncology from './Assets/Oncology.webp';
import Gastroenterology from './Assets/Gastroenterology.jpg';
import Diabetology from './Assets/Diabetology.jpg';
import Orthopedics from './Assets/Orthopedics.png';
import Immunology from './Assets/Immunology.png';
import Naturopathy from './Assets/Naturopathy.png';
import Nephrology from './Assets/Nephrology.webp';
import Allergology from './Assets/Allergology.webp';


const specializations = [
  {
    id: 1,
    title: 'Cardiology',
    image: cardioligy,
    link: 'https://saigangapanakeia.in/Home/Specializations#Cardiology',
  },
  {
    id: 2,
    title: 'Dermatology',
    image: Dermatology,
    link:'https://saigangapanakeia.in/Home/Specializations#Diabetology',
  },
  {
    id: 3,
    title: 'Neurology',
    image: Neurology,
    link:'https://saigangapanakeia.in/Home/Specializations#Neurology',
  },
  {
    id: 4,
    title: 'Oncology',
    image: Oncology,
    link:'https://saigangapanakeia.in/Home/Specializations#Oncology',
  },
  {
    id: 5,
    title: 'Gastroenterology',
    image: Gastroenterology,
    link:'https://saigangapanakeia.in/Home/Specializations#Gynecology',
  },
  {
    id: 6,
    title: 'Diabetology',
    image:Diabetology,
    link:'https://saigangapanakeia.in/Home/Specializations#Diabetology',
  },
  {
    id: 7,
    title: 'Orthopedics',
    image:Orthopedics,
    link:'https://saigangapanakeia.in/Home/Specializations#Orthopedics',
  },
  {
    id: 8,
    title: 'Diagnostics',
    image:Diabetology,
    link:'https://saigangapanakeia.in/Home/Specializations#Diagnostics',
  },
  {
    id: 9,
    title: 'Immunology',
    image:Immunology,
    link:'https://saigangapanakeia.in/Home/Specializations#Allergology',
  },
  {
    id: 10,
    title: 'Naturopathy',
    image:Naturopathy,
    link:'https://saigangapanakeia.in/Home/Specializations#Naturopathy',
  },
  {
    id: 11,
    title: 'Nephrology',
    image:Nephrology,
    link:'https://saigangapanakeia.in/Home/Specializations#Gynecology',
  },
  {
    id: 12,
    title: 'Allergology',
    image:Allergology,
    link:'https://saigangapanakeia.in/Home/Specializations#Allergology',
  },
];

const Specializations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 animate-fadeInUp">
          Our Specializations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {specializations.map((spec) => (
            <a
              key={spec.id}
              href={spec.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-md bg-white transform transition duration-500 hover:scale-105 block"
            >
              <img
                src={spec.image}
                alt={spec.title}
                className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-300">
                <h3 className="text-white text-2xl font-semibold animate-fadeInUp">
                  {spec.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Specializations;

