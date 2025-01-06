import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 bg-transparent'>
        <img src={assets.logo} alt="Logo" className='h-12 px-6' />
        <ul className='hidden md:flex gap-7 text-white items-center'>
          <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
          <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
          <li><a href="#Community" className='cursor-pointer hover:text-gray-400'>Community</a></li>
          <li><a href="#Founder" className='cursor-pointer hover:text-gray-400'>Founder</a></li>
          <li><a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact</a></li>


          <li className='flex items-center gap-3'>
            {/*---<a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact</a>*/}
            <div className='relative'>
              <input type="text" placeholder="Search..." className='bg-white text-black px-4 py-1.5 rounded-full outline-none pl-10 text-sm'/>
              <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </li>
        </ul>
        <div className='hidden md:block'>
          <a href="#Sign up" className=' bg-white border border-white px-8 py-3 rounded-full mr-4'>Sign Up</a>
          <a href="#Login" className='bg-white border border-white px-8 py-3 rounded-full'>Login</a>
        </div>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7' alt="" />
      </div>
      {/* --------------mobile menu ------------*/}
      <div className={`md:hidden  ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transtition-all`}>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
          </div>
          <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Community" className='px-4 py-2 rounded-full inline-block'>Community</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Founder" className='px-4 py-2 rounded-full inline-block'>Founder</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact</a>


        </ul>
      </div>
    </div>
  );
};
//<button className='bg-white px-8 py-2 rounded-full mr-4'>Sign up</button>
//<button className='bg-white px-8 py-2 rounded-full'>Login</button>
export default Navbar;
