import Image from 'next/image';
import Link from 'next/link';
import Slider from '@/components/Slider';

import Notifications from './Notifications/Notifications.js';
import {  FaBell} from 'react-icons/fa'; // Import volume icon from react-icons/fa
import { useState } from 'react';
import Audioplayer from '@/components/Audioplayer.js';
import Navbar from '@/components/Navbar.js';

const Main = () => {
  

  

  return (
    <>
      <div className="relative mt-0">
        <div className='absolute top-0 w-full h-16 bg-yellow-500 font-bold flex items-center'>
          <div>
            <Image src="/temple_logo.png" alt="Temple Logo" width={45} height={20} className="mr-2 ml-5" />
          </div>
          <h2 className='mt-4 ml-2 mb-4'>SHRI DHARMA SASTHA KOVIL</h2>
          {/* Add OM NAMAH SIVAYA text and volume icon */}
          <div className="ml-auto flex items-center mr-70"> {/* Adjusted margin and alignment */}
            <Audioplayer/>

          </div> 
          <Link href='/home'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute top-0 right-0 mt-3 mr-2 border border-solid border-black-500 text-white" style={{backgroundColor:' #BB5A00'}}> CONTACT US</button></Link>
        </div>
        
        {/* Navigation Bar */}
       
        <div className="absolute top-10 mt-4 w-full h-16 bg-red-900 text-white font-bold">
       
        <div className='text-white font-bold mt-5 flex justify-start ml-4'>
  <Navbar className='mb-10'/>
  <div className="flex items-center justify-center w-full pr-4">
    <Link href='/home' className='text-white-500'>Home</Link>
    <Link href='/about' className='ml-20'>About</Link>
    <Link href='/events' className='ml-20'>Events</Link>
    <Link href='/dharshan' className='ml-20'>Dharshan</Link>
    <Link href='/gallery' className='ml-20'>Gallery</Link>
  </div>
  <Link href="/Notifications.js">
  <FaBell className="text-2xl text-white right-0 mt-3 cursor-pointer" /></Link>
          </div>
        </div>
        
        {/* Vertical line */}
        <div className="absolute bottom-0 left-0 w-1 h-full"></div>
      </div>
      
     
      
      {/* Slider */}
      <div className="flex justify-end items-center mr-6 mt-6 absolute top-0 right-0">
        <Slider/>
      </div>
      
      {/* Temple Address and Visit Us Button */}
      <div className="absolute bottom-20 right-5 mt-6 mr-6 text-right">
        <p className="text-lg font-bold">Temple Address: Your Address Here</p>
        <Link href="/visit-us">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute top-5 right-10 mr-24 mt-4 border border-black border-black-500 text-white font-bold" style={{backgroundColor:' #BB5A00'}}> VISIT US</button>
        </Link>
      </div>
      
      {/* Notifications */}
      <div className="flex justify-center items-center   mb-16 h-screen">
        <Notifications notificationid={100}/>
        
      </div>
      
      {/* temple Image */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image src='/temple.jpeg' alt="Example Image" width={517} height={150} className='absolute bottom-0'/>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-yellow-500 flex justify-center items-center text-black font-bold text-lg">
        <p>&copy; Shri Dharma Sastha Kovil - All rights reserved | <Link href="/know-more">Know More</Link> | <Link href="/contact-us">Contact Us</Link> | <Link href="/feedback">Feedback</Link></p>
      
  </div>
    </>
  );
};


export default Main;