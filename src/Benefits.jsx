import React from 'react'
import  { useState, useEffect } from "react";
import img1 from './Images/benefits5.jpg';
import img2 from './Images/benefits2.jpg';
import img3 from './Images/benefits4.jpg';
import img4 from './Images/wps.jpeg';

const Benefits = () => {
    const images = [
        img2,
        img1,
        img3,
        
      ];
      
      
        const [currentIndex, setCurrentIndex] = useState(0);

      
        // Automatically change slides
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000); // Change slide every 3 seconds
      
          return () => clearInterval(interval); // Cleanup on unmount
        }, [images.length]);
    
  return (
    <div id='Benefits' className='mt-96  pl-24 pr-24 md:justify-center items-center text-center'>
    <h1 className='flex justify-center items-center font-bold text-3xl text-red-600'>DISCOVER GYMFLUENCER BENEFITS</h1>
    
    <p className='flex mt-10 justify-center items-center text-center font-semibold text-white '>Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation</p>

    <div className='grid grid-cols-2 mt-20 '>
    <p className='font-semibold text-white  '>
    <p className='font-bold text-2xl text-red-600'>EFFORTLESS WORKOUT LOGGING</p>
    Easily log your workouts and monitor your progress over time with our intuitive logging feature.</p>
    <p className=' ml-4 mx-10 font-semibold text-white  '>
    <p className='font-bold text-2xl text-red-600'>presonalized WORKOUT PLANS</p>
    AI-powered workout plans tailored to your fitness level,goals and progress.</p>
    <p className='mt-28 mx-10 font-semibold text-white  '>
    <p className='font-bold text-2xl text-red-600'>ACCURATE REP COUNTING</p>
    Easily log your workouts and monitor your progress over time with our intuitive logging feature.
    </p>
    <p className='mt-20 font-semibold text-white  '>
    <p className='font-bold text-2xl text-red-600'>CALORIE CALCULATION & PRESONALIZED DIET PLANS</p>
    Easily log your workouts and monitor your progress over time with our intuitive logging feature.
    </p>
    </div>
    
    <div className="relative w-full h-64 lg:h-[32rem]  md:h-96 overflow-hidden mt-32">
      {/* Slides */}
      <div className="overflow-hidden w-screen  relative">
        <div
          className="flex  transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)`}}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 md:h-96 lg:h-[32rem] bg-cover bg-center flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
 
            <div className='justify-center items-center flex mt-56'>
                <div className=' justify-center items-center'>
                <h1 className='mb-28 font-bold text-2xl text-red-600'>WHAT PEOPLE SAYS</h1>
                <img 
                src={img4}
                alt=''
                className='flex justify-center items-center'
                />

                </div>
            </div>


    </div>
  )
}

export default Benefits