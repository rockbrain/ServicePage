import React, {useState} from 'react';
import logo from '../assets/logo-new.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import Howard from '../assets/Howard.svg';
const navbar = () => {
    const [nav, setNav] =useState (false)
    const handleClick = () => setNav(!nav)
  return (
   <div className="small-screens-responsive container m-auto mt-3  sm:ml-8 sm:mt-16 w-auto sm:h-[40%] h-[80px] grid grid-cols-2 justify-between items-center sm:pl-16 ">
        <div className='flex ml-2 pt-8'>
            <img className='w-20 sm:w-40' src={logo} alt="logo image"/>
            
        </div>
        
        <div className='items-center'>

        {/*menu items*/}
        <ul className="hidden lg:flex justify-center items-center  text-black-300 text-xl ">
                <li> Home</li>
                <li>Projects</li>
                <li>Contact</li>
                <button className='border-primary-800 border-2 p-2 ml-4 rounded text-xs  text-gray-500'>Download CV</button>
            </ul>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> Home</li>
                <li className='py-6 text-4xl'>ABout</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='bg[rgba(161, 73, 242, 1)] py-6 text-4xl'>Contact</li>
        </ul>
        
        {/*Humberger Menu*/}
        <div onClick={handleClick} className="lg:hidden z-10 float-right">
            {!nav ? <FaBars/> : <FaTimes/> }
        </div>
        </div>
   </div>
    
  )
}

export default navbar

