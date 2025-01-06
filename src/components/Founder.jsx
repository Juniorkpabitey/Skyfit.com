import React from 'react';
import { assets } from '../assets/assets';

const Founder = () => {
  return (
    <section className="bg-black text-white py-16 items-center" id="Founder">
      <h1 className="text-center text-2xl sm:text-2xl font-bold mb-10">Founder</h1>

      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center gap-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={assets.profile}
            alt="Founder"
            className="w-64 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Peter Baah Kpabitey</h2>
          <p className="text-lg font-medium mb-6">Founder & CEO</p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
