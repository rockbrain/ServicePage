import React, {useState} from 'react';
import Smiley from '../assets/Smiley.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import Howard from '../assets/Howard.svg';
const navbar = () => {
    const [nav, setNav] =useState (false)
    const handleClick = () => setNav(!nav)
  return (
   <div className="small-screens-responsive container m-auto  w-auto h-[80px] flex justify-between items-center ">
        <div className='flex'>
            <img src={Smiley} alt="logo image" style={{width:'50px'}}/>
            <h1 className='text-4xl p-4'>ROCKY</h1>
        </div>
        {/*menu items*/}
            <ul className="hidden lg:flex justify-between items-center  text-gray-300 ">
                <li> Home</li>
                <li>Projects</li>
                <li>Contact</li>
                <button className='bg-gradient-to-r from-[#9249F2] to-[#FF5F49] p-2 rounded text-md'>rockbrain700@gmail.com</button>
            </ul>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> Home</li>
                <li className='py-6 text-4xl'>ABout</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='bg[rgba(161, 73, 242, 1)] py-6 text-4xl'>Contact</li>
        </ul>
        
        {/*Humberger Menu*/}
        <div onClick={handleClick} className="lg:hidden z-10">
            {!nav ? <FaBars/> : <FaTimes/> }
        </div>
   </div>
    
  )
}

export default navbar

