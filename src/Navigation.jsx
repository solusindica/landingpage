import './App.css';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from './Assets/logo.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[100px]">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="logo" className="w-25 h-20 object-contain" />
        </div>

        {/* Center: Menu links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <p>|</p>
          <a href="#about" className="hover:text-blue-600">About</a>
          <p>|</p>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <p>|</p>
          <a href="#Footer" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Right: Appointment Button & Menu Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://saigangapanakeia.in/Home/appointment"
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Book Appointment
          </a>

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-md">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-600">Footer</a>
          <a href="#appointment" onClick={() => setMenuOpen(false)} className="block text-white bg-blue-600 text-center py-2 rounded hover:bg-blue-700">
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
