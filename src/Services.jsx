import React from 'react'
import img1 from './Images/workout1.avif'
import img2 from './Images/workout9.jpg'
import img3 from './Images/workout10.jpeg'
import img4 from './Images/workout8.jpg'
import img5 from './Images/workout5.webp'

const Services = () => {
  return (
    <div id='Services' className='mt-96 w-full'>
    <h1 className='flex justify-center items-center font-extrabold text-3xl text-red-600'>OUR SERVICES</h1>

    <p className='flex mt-10 justify-center items-center text-center font-semibold text-white '>GymFluencer offer 5 essential services to help you achieve your fitness goals with ease and flexibility</p>

    <div className="grid grid-cols-5 mt-10">
        <img
          src={img1}
          alt=""
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-96"
        />
        <img
          src={img2}
          alt=""
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-96"
        />
        <img
          src={img3}
          alt=""
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-96"
        />
        <img
          src={img4}
          alt=""
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-96"
        />
        <img
          src={img5}
          alt=""
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-96"
        />
      </div>

    </div>
  )
}

export default Services