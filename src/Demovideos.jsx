import React from 'react';
import './App.css'; 


const Demovideos = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Demo Videos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
          <div className="w-full  max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-11">
           <iframe
             className="w-full h-64 object-cover rounded-md shadow-md"
             src="https://www.youtube.com/embed/XgC-rhT8V0o?controls=1&mute=1&rel=0"
             title="YouTube Demo Video"
             frameBorder="0"
             allow=" encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture"
             allowFullScreen
            ></iframe>
          </div>

          
          <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
           <iframe
             className="w-full h-64 object-cover rounded-md shadow-md"
             src="https://www.youtube.com/embed/evJ95wX0uck?controls=1&mute=1&rel=0"
             title="YouTube Demo Video"
             frameBorder="0"
             allow="encrypted-media; clipboard-write; accelerometer; gyroscope; picture-in-picture"
             allowFullScreen
            ></iframe>
           
          </div>


        </div>
      </div>
    </section> 
  );
};

export default Demovideos;
