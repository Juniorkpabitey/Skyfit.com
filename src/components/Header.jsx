import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion'; // Import Framer Motion

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-centre flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container text-left mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        {/* Animated heading */}
        <motion.h2
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
          initial={{ opacity: 0, y: 50 }} // Start slightly below and transparent
          animate={{ opacity: 1, y: 0 }} // Move to final position with full opacity
          transition={{ duration: 1.2, ease: 'easeOut' }} // Duration and easing
        >
          Your Daily <br /> maternal & <br /> Childbirth <br /> Care
        </motion.h2>

        {/* Button container */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 50 }} // Start slightly below and transparent
          animate={{ opacity: 1, y: 0 }} // Move to final position
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }} // Add delay for staggered animation
        >
          <a href="#Sign up" className="border border-white px-8 py-3 rounded-full">
            Get Started
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
