import React from 'react';
import './App.css';
import Testimonialc1 from './videos/Testimonialc1.mp4';
import Testimonialc2 from './videos/Testimonialc2.mp4';
import Testimonialc3 from './videos/Testimonialc3.mp4';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 px-6 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10">
          {/* Video Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105">
            <video
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-64 object-cover rounded-md shadow-md"
             
            >
              <source src={Testimonialc1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-4 text-center text-gray-700 font-medium">
              “This platform revolutionized my wellness journey.”
            </p>
          </div>

          {/* Video Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105">
            <video
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-64 object-cover rounded-md shadow-md"
              poster="/thumbnails/testimonial2.jpg"
            >
              <source src={Testimonialc2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-4 text-center text-gray-700 font-medium">
              “The AI-Ayurveda combo is so innovative!”
            </p>
          </div>

          {/* Video Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transition transform hover:scale-105">
            <video
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-64 object-cover rounded-md shadow-md"
              poster="/thumbnails/testimonial3.jpg"
            >
              <source src={Testimonialc3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-4 text-center text-gray-700 font-medium">
              “Highly personalized and effective solutions.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
