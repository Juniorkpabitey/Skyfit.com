import React from 'react';
import { assets } from '../assets/assets';


const About = () => {
  return (
    <section className="bg-pink-100 py-16" id='About'>
        <h1 className="flex flex-col items-center justify-center text-2xl sm:text-2xl font-bold md-20">About</h1>
      <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden ">
          <img src={assets.About} alt="About Skyfit"className="w-full max-w-md h-auto object-cover mx-auto rounded-lg w-100 h-70"
          />
        </div>

        {/* Text Section */}
        <div className="mt-[-10px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Skyfit
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            <strong className="text-gray-800 font-medium">
              Empowering Mothers, Transforming Lives
            </strong>
            <br />
            Skyfit is a comprehensive digital health platform designed to support pregnant women and new mothers on their journey to motherhood. Our mission is to reduce maternal and child mortality rates by providing timely information, personalized guidance, and innovative tools to ensure a safe and healthy pregnancy experience.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Why Skyfit?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            In many parts of the world, access to reliable maternal health resources is limited, leading to preventable complications during pregnancy and childbirth. Skyfit bridges this gap by leveraging cutting-edge technology to deliver tailored support, empowering women with the knowledge and tools they need to thrive.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mt-16 flex flex-col items-center  ">
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Key Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 lg:px-20">
          {/* Feature Item */}
          <div className="flex flex-col items-center text-center">
            
           
            <h4 className="text-lg font-semibold text-gray-800 mt-4">
              Personalized Dashboard
            </h4>
          </div>

          {/* Repeat similar blocks for other features */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-red-800">
              {/* Add other icons */}
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              AI Assistant
            </h4>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-red-800"></div>
            <h4 className="text-lg font-semibold text-gray-800">
              Health & Wellness Guidance
            </h4>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-red-800"></div>
            <h4 className="text-lg font-semibold text-gray-800">
              Community Connection
            </h4>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-red-800"></div>
            <h4 className="text-lg font-semibold text-gray-800">
              Mother & Baby Modules
            </h4>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-red-800"></div>
            <h4 className="text-lg font-semibold text-gray-800">
              Emergency Support
            </h4>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mt-16 text-center px-6 lg:px-20">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Skyfit envisions a world where no mother or child is left without the care they deserve. By leveraging technology and fostering partnerships, we aim to make maternal healthcare accessible, effective, and inclusive.
        </p>
      </div>
    </section>
  );
};

export default About;
