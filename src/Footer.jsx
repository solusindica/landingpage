import React from 'react';
import './App.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Footer = () => {
  const position = [17.475621, 78.3848004]; // Your coordinates

  return (
    <footer className="bg-gradient-to-r from-indigo-300 via-blue-200 to-purple-100 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* Left Half: Social Media + Contact */}
        <div className="w-full lg:w-1/2">
          {/* Social Media Icons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="https://www.facebook.com/sgprs.in?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={28} className="text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
            <a href="https://www.instagram.com/dr.ravishankar.polisetty.sgp/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={28} className="text-pink-500 hover:text-pink-700 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/sgprs/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="text-blue-700 hover:text-blue-900 transition-colors" />
            </a>
            <a href="https://t.me/joinchat/QXV2gDfcKr8zN2Jl" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={28} className="text-teal-500 hover:text-teal-700 transition-colors" />
            </a>
            <a href="https://youtube.com/@sgppsa?si=TAFSRwDpDDleGwLL" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={28} className="text-red-600 hover:text-red-800 transition-colors" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B917331109988&text=Hi%2C+I+am+interested+to+buy+your+products%21+Could+you+please+call+back+or+text+on+whatsapp.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={28} className="text-green-500 hover:text-green-700 transition-colors" />
            </a>
            <a href="https://twitter.com/docturepoly?t=pH1ztXet8Jd11vC7X42IKw&s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={28} className="text-sky-500 hover:text-sky-700 transition-colors" />
            </a>
          </div>

          {/* Contact Info Box */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> BO-1, Block-B, Indu Fortune Fields -The Annexe, 13th Phase, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Contact:</strong> 7331109988
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> contact@yoursite.com
            </p>
          </div>
        </div>

        {/* Right Half: Leaflet Map */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-md w-full h-80">
            <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Sai Ganga Panakeia Ltd<br /> Hyderabad
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-10">
        <p>&copy;© 2024 Sai Ganga Panakeia. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
