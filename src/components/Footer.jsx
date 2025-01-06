import React from 'react'
import {assets} from '../assets/assets'


const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo and Subscribe Section */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <div className="bg-black border border-black px-8 py-3 rounded-full ">
                <img src={assets.logo} alt="Logo" className='h-16 ' />
              </div>
            </div>
            <p className="text-sm">Subscribe</p>
            <p className="text-black-400">Get all Mail Notifications</p>
            <div className="flex items-center w-full">
              <input type="email" placeholder="Enter your email"
                className="p-2 w-2/3 bg-black text-white rounded-full focus:outline-none"
              />
              <button className="p-2 bg-black rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="font-bold text-lg">Support</h2>
            <p className="text-gray-400">Greater Accra, Accra</p>
            <p className="text-gray-400">skyfit.com@org</p>
            <p className="text-gray-400">0554289475</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="font-bold text-lg">Quick Link</h2>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-black"><a href="#Header" >Home</a></li>
              <li className="text-gray-400 hover:text-black"><a href="#About" >About</a></li>
              <li className="text-gray-400 hover:text-black"><a href="#Community" >Community</a></li>
              <li className="text-gray-400 hover:text-black"><a href="#Founder" >Founder</a></li>
              <li className="text-gray-400 hover:text-black"><a href="#Contact" >Contact</a></li>

            </ul>
          </div>

          {/* App Development Section */}
          <div className="text-center">
            <h2 className="font-bold text-lg">App Development in progress</h2>
            <div className="flex justify-center items-center mt-4">
              {/* QR Code */}
              <div className="bg-white p-4 border border-black rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-10 h-10">
                  <path d="M5 5h4V3H3v6h2V5zm2 2v4H5v2h4V9H7zM3 15v6h6v-4H5v-2H3zm2 2h2v2H5v-2zm8-14h2v4h-2V3zm0 16h2v2h-2v-2zM13 3v2h4v4h2V3h-6zm0 8h2v2h-2v-2zm8-2v4h-4v2h6v-6h-2zm0 8v4h-4v2h6v-6h-2zm-4-2v4h-2v-4h-4v2h2v4h2v-2h2v-2h2v-2h-2z" />
                </svg>
              </div>
              <div className="flex flex-col items-center ml-4">
                <button className="mb-2 bg-black hover:bg-gray-600 py-1 px-3 rounded text-white text-sm">
                  Google Play
                </button>
                <button className="bg-black hover:bg-gray-600 py-1 px-3 rounded text-white text-sm">
                  App Store
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blsck hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-black hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm mt-8">
          &copy; Copyright skyfit-health2024. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
