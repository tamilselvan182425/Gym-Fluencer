import React from 'react'
import CountUp from 'react-countup'

const About = () => {
  return (
    
    <div id='About' className='mt-96  pl-24 pr-24 md:justify-center items-center text-center md:w-full '>
    <h1 className='flex justify-center items-center font-extrabold text-3xl text-red-600'>
    YOUR FITNESS.</h1>
    <h3 className='flex justify-center items-center font-bold text-3xl text-red-600'>
    OUR MISSION.
    </h3>

    <p className='flex mt-10 justify-center items-center text-center font-semibold text-white '>
    At GymFluencer,our missionis simple: to provide the tools and supportyou need to reach your fitness goals. 
    We combine innoviative technology with presonalized guidance to make fitness easier,more accessible,and more motivating.
    Join us as we help you transform your fitness journey,one workout at a time.

    </p>
    <div className="grid grid-cols-3 text-4xl mt-16 font-semibold">
          <div>
            <CountUp start={300} end={410} delay={1} suffix="k+" className='text-white '></CountUp>
            <p className="text-lg mx-8 mt-8 font-semibold text-white ">
              Workouts logged and progress tracked every month
            </p>
          </div>
          <div>
            <CountUp start={100} end={160} delay={1} suffix="k+" className='text-white '></CountUp>
            <p className="text-lg mx-10 mt-8 font-semibold text-white  ">
              Fitness enthusiasts connected through our platform
            </p>
          </div>
          <div>
            <CountUp start={10} end={25} delay={1} suffix="k+" className='text-white '></CountUp>
            <p className="text-lg mx-10 mt-8 font-semibold text-white  ">
              Countries where GymFluencer is making an impact
            </p>
          </div>
    </div>
    </div>

    
  )
}

export default About