import React, { useState } from 'react'
import "./index.css"
import { MdMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md";
import {Link} from "react-scroll";
import Headroom from "react-headroom";

const Navbar = () => {
    const [Open,SetOpen] = useState(false);
    const handleclick = () => {
        SetOpen(!Open);
    }
    console.log(Open);
  return (
    <Headroom>
    <nav  className='bg-gray-700 p-5 sticky top-0  '>
    <div  className='flex justify-between items-center sticky  '>
    <h2 className='text-zinc-300 shadow-2xl hover:shadow-slate-400 drop-shadow-xl font-extrabold text-2xl cursor-pointer'>GymFluencer</h2>
    
    <span onClick={handleclick} className={`text-3xl cursor-pointer md:hidden block mx-2`}>{Open ? <MdClose  />:<MdMenuOpen />}</span>
    <ul className="hidden md:flex px-4 font-extrabold md:rounded-lg ">
     <li className='px-4 py-6' >
        <Link to="Home" spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} className=' hover:text-pink-600 border-opacity-0 w-0 origin-left hover:border-b-2 hover:border-pink-300 cursor-pointer '>HOME</Link>
        </li>
        <li className='px-4 py-6' >
        <Link to='About' spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} className=' hover:text-pink-600 border-opacity-0 w-0 origin-left hover:border-b-2 hover:border-pink-300 cursor-pointer'>ABOUT</Link>
        </li>
        <li className='px-4 py-6' >
        <Link to='Services' spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} className=' hover:text-pink-600 border-opacity-0 w-0 origin-left hover:border-b-2 hover:border-pink-300 cursor-pointer'>SERVICES</Link>
        </li> 
        <li className='px-4 py-6' >
        <Link to='Benefits' spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} className=' hover:text-pink-600 border-opacity-0 w-0 origin-left hover:border-b-2 hover:border-pink-300 cursor-pointer'>BENEFITS</Link>
        </li>
       
    </ul>
    </div>
        {Open ? (
            <ul className="flex-col md:hidden px-4 font-extrabold">
     <li className='px-4 py-6' >
        <Link to='Home' spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}  className=' hover:text-pink-400 hover:border-b-2 hover:border-rose-400 border-opacity-0 cursor-pointer '>HOME</Link>
        
        </li>

        <li className='px-4 py-6 ' >
        <Link to='About' spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}  className=' hover:text-pink-400 hover:border-b-2 hover:border-rose-400 border-opacity-0 cursor-pointer '>ABOUT</Link>
        </li>

        <li className='px-4 py-6' >
        <Link to='Services' spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}  className=' hover:text-pink-400 hover:border-b-2 hover:border-rose-400 border-opacity-0 cursor-pointer'>SERVICES</Link>
        </li>


        <li className='px-4 py-6' >
        <Link to='Benefits' spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500}  className=' hover:text-pink-400 hover:border-b-2 hover:border-rose-400 border-opacity-0 cursor-pointer'>BENEFITS</Link>
        </li>

    </ul>
        ) : null}
    
    </nav>
    </Headroom>
    )
    
}

export default Navbar