import React from 'react'
import Image_head from '../assets/Image_head.png'

import Webflow from '../assets/Webflow.svg'
import Figma from '../assets/Figma.svg'
import Ai from '../assets/Ai.svg'
import Xd from '../assets/xd.svg'
import Norton from '../assets/Norton.svg'
import Sketch from '../assets/Sketch.svg'
import Tool from '../assets/Tool.svg'
import Arrow_up from '../assets/ArrowUpRight.svg'
import Download from '../assets/Download.png'
import Photoshop from '../assets/Photoshop.svg'

import JobsComponent from './JobsComponent'

const Job = () => {
 var Xm_Get_Quote= 'Get a Quote';
 var Xm_Download_CV= 'Download CV';
 
  return (
    <div className="md:mt-[150px] h-[fit] background-image w-[100%] pb-8  grid place-items-center">
        <div className='sm:grid-cols-4  grid grid-cols-1 sm:grid-flow-col w-[80%] lg:w-[70%] xl:w-[50%] min-w-[50%] sm:mt-12 mt-8 bg-slate-50 h-fit  p-4 rounded-md shadow-lg items-center  z-20'>
            <p className=" flex justify-center p-2 col-span-1">
            <img src={Image_head} className='w-[96px] p-2'></img>  
            </p> 
          <div className='col-span-2 '>
          <h3 className="text-center font-bold text-blue-900">Software Developer</h3>
          <p className="text-center  p-2 max-w-2xl mb-2 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">I specialize in UI/UX & Graphic Design and 
            my passion is all about building elegant and 
            professional user interfaces and websites.</p>
      
          </div>
            <div className=' btn-group grid-flow-row large-mobile:grid-cols-2 place-items-center p-2'> 
            <button class="btn mobile-btn">
              {Xm_Get_Quote}
                <img src={Arrow_up} className="ml-1 w-3"></img>
            </button>

            <button class="btn-gray mobile-btn">
              {Xm_Download_CV}
                <img src={Download}className="   w-3 ml-1"></img>
            </button>

                </div>
            
            
        </div>
            <div className="container m-auto grid grid-flow-row md:grid-cols-3 md:grid-flow-col gap-8 mt-[50px] z-10 w-[90%]">
              <div className="edu m-auto w-[90%]">
                  <div className=" pb-4 flex w-fit font-bold text-sm text-blue-500">
                      <div class=" bg-[#0062FF] my-auto  w-10 h-px "></div> 
                      <h2 className='p-2 font-bold text-blue-900'> EDUCATION</h2>
                  </div>
              <JobsComponent/>
              </div>
                <div className="work m-auto w-[90%]">
                    <div className=" pb-4 flex w-fit font-bold text-sm text-red-500">
                        <div class=" bg-red-500 my-auto  w-10 h-px "></div> 
                        <h2 className='p-2 font-bold text-red-500'> WORK</h2>
                    </div>
              <JobsComponent/>
              </div>

              <div className="tools m-auto w-[90%]">
                  <div className="pb-2 flex w-fit font-bold text-sm text-green-500">
                          <div class=" bg-green-500 my-auto  w-10 h-px "></div> 
                          <h2 className='p-2 font-bold text-green-500 '> TOOLS</h2>
                  </div>  
              <div className="flex justify-center flex-auto flex-wrap ">
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Tool} className="min-w-[70px] w-[70px] h-[70px]bg-slate-200 "></img></div>
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Figma} className="min-w-[70px] w-[70px] h-[70px]"></img></div>
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Xd} className="min-w-[70px] w-[70px] h-[70px] "></img></div>
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Ai} className="min-w-[70px] w-[70px] h-[70px] "></img></div>
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Norton} className="min-w-[70px] w-[70px] h-[70px]"></img></div>
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Webflow} className="min-w-[70px] w-[70px] h-[70px]"></img></div>
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Photoshop} className="min-w-[70px] w-[70px] h-[70px]"></img></div>
                <div className="bg-white p-4 w-[100px] m-[4%] h-[100px]"><img src={Sketch} className="min-w-[70px] w-[70px] h-[70px]"></img></div>
                </div>
              
            </div>
        </div>
        </div>
  )
}

export default Job

