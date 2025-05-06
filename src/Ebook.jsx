import React from 'react';
import './App.css';

const Ebook = () => {
  return (
    <div className="w-full h-auto font-josefin bg-gray-100 flex flex-col justify-center items-center text-white font-sans py-6 px-4 sm:px-8 md:px-16">
      <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-center text-blue-900">
        "Sign up for Free E-Book to know more about the device
        <br />
        Limited Period Offer to get the Free e-Book"
      </p>
      <a href="https://solusindica89.systeme.io/5bd95a49">
        <button className="mt-3 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg rounded transition duration-300">
          Sign Up
        </button>
      </a>
    </div>
  );
};

export default Ebook;
