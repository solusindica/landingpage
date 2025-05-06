import React from 'react';
import './App.css'; 
import Appdemo1 from './Assets/Appdemo1.mp4';

const Demovideos = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Demo Videos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
          <div className="w-full  max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-11">
           <iframe
             className="w-full h-full"
             src="https://www.youtube.com/embed/XgC-rhT8V0o?autoplay=1&controls=1&mute=1"
             title="YouTube Demo Video"
             frameBorder="0"
             allow="autoplay; encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture"
             allowFullScreen
            ></iframe>
          </div>

          
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
           <video
            className="w-full h-auto"
            src={Appdemo1}
            autoPlay
            loop
            muted
            controls
           />
            <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition duration-300 pointer-events-none"></div>
          </div>


        </div>
      </div>
    </section> 
  );
};

export default Demovideos;
