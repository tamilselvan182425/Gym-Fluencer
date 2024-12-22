import React from 'react'
import img1 from "./Images/home1.jpg"

const Home = () => {
  return (
    
    <div id='Home' className=' w-full pl-18 pr-18 bg-black h-screen bg-cover'
    style={{backgroundImage:`url(${img1})`}} 
    >
    <h2 className='flex justify-center items-center font-extrabold text-red-600 text-3xl h-96 '>
    Track Your Fitness Journey
    </h2>
    <p className=' flex justify-center items-center  text-center font-extrabold text-white  '>
    Discover the ultimate fitness companion with GymFluencer. 
    Effortlessly log your workout, count reps,and track calories burned. 
    stay motivated and achieve your goals with ease.
    </p>

    </div>
    
  )
}

export default Home