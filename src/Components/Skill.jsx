
import icon from '../assets/Icon.png';
import icon1 from '../assets/Icon1.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';

import React from 'react'

const Skill = () => {
  return (
    <body>
    <div className=" sm:large-screens-responsive w-[100%] px-[10%]  h-[fit] background-image pb-8 items-center">
      <div className="flex items-center justify-center pt-4">
        <div className='z-40 grid items-center place-items-center place-content-center m-auto justify-center pb-8'> 
        <h1 className="text-center m-auto pb-4 text-2xl/8 font-semibold text-primary-800 lg:pt-8">SERVICES I PROVIDE</h1>
          <p className="text-center m-auto w-[100%] max-w-2xl mb-6lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> 
           I bring a passion for creating dynamic and visually appealing websites.
            Proficient in front-end and back-end technologies,
            I excel in translating client requirements into responsive and user-friendly interfaces. 
          </p>
        </div>
     
      </div>
        <div className="grid  lg:pt-[35px]  gap-16  items-center  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
            <div className="card  h-fit md:h-[200px]  bg-white px-6 pt-6 pb-2  rounded-md shadow-lg transform hover:scale-105 transition duration-500">
              <img src={icon} alt="card_icon" />
              <h3 className='text-2xl text-center font-semibold text-blue-600'>Web Development</h3>
              <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">Proin egestas, nisi vitae hendrerit maximus, 
                mauris nunc facilisis odi.
              </p>
            </div>
            <div className="card  h-fit md:h-[200px]  bg-white px-6 pt-6 pb-2 rounded-md shadow-lg transform hover:scale-105 transition duration-500">
            <img src={icon1} alt="card_icon" />
            <h3 className='text-2xl text-center font-semibold text-blue-600'>Web Development</h3>
              <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Proin egestas, nisi vitae hendrerit maximus, 
                mauris nunc facilisis odi.
              </p>
            </div>
            <div className="card  h-fit md:h-[200px]   bg-white px-6 pt-6 pb-2 rounded-md shadow-lg transform hover:scale-105 transition duration-500">
            <img src={icon2} alt="card_icon" />
            <h3 className='text-2xl text-center font-semibold text-blue-600'>IT Project Management</h3>
              <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Proin egestas, nisi vitae hendrerit maximus, 
                mauris nunc facilisis odi.
              </p>
            </div>
            <div className="card md:h-[200px]   h-fit  bg-white px-6 pt-6 pb-2 rounded-md shadow-lg transform hover:scale-105 transition duration-500">
            <img src={icon3} alt="card_icon" />
            <h3 className='text-2xl text-center font-semibold text-blue-600'>IT Accessibility Advocate </h3>
              <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Proin egestas, nisi vitae hendrerit maximus, 
                mauris nunc facilisis odi.
              </p>
            </div>
      </div>
    </div>
    </body>
  )
}

export default Skill