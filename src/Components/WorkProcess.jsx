import React from "react"


const WorkProcess = () =>{
    return(
        <body>
    <div className="sm:large-screens-responsive px-2 py-8 grid grid-cols-1 md:grid-cols-2 grid-gap-4 md:gap-12 w-[90%] m-auto h-[80%] bg-white rounded-2xl ">
            <div className="grid">
                <div>
                <h1  className="text-start text-2xl/8 font-semibold text-purple-900 pb-4">💼 LET'S WORK <span> </span>TOGETHER! </h1>
                <p  className="text-start max-w-2xl mb-6 lg:mb-8 sm:text-lg lg:text-xl dark:text-gray-400">I am taking on new projects. Waiting to hear about new projects, 
                    so if you'd like to chat please get in touch.
                </p>
                </div>

                <div className="text-center pt-4 grid grid-cols-2 grid-rows-2 gap-2">
               
                <div className="col-span-1 ">
                    <h1 className="text-5xl/8 ">3+</h1>
                    <p className="pt-2">years of experience</p>
                </div>
               
                <div className=" col-span-1">
                    <h1 className="text-5xl/8">28+</h1>
                    <p className="pt-2">completed projects</p>
                </div>
                <h1 className="text-start row-span-3 text-wrap col-span-2 lg:text-3xl/4 text-sm text-red-500 font-bold pt-4">email: rockbrain700@gmail.com</h1>
                
                </div>
                
            </div>
            <div className="grid text-start">
               <div>
               <h3 className="text-2xl font-semibold text-purple-900 pb-4">Working Process</h3>
                <p className="text-start max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I specialize in UI/UX & Graphic Design and my passion is all 
                    about building elegant and professional user interfaces.
                </p>
               </div>
                <div className="flex justify-center flex-auto flex-wrap ">
            
                    <div className="flex justify-start sm:justify-center rounded-md mb-2  items-center mr-2 w-[300px] bg-[#F5F6F7] h-[50px] p-4">
                        <p class=" ">🤝 1. Project Introduction</p>
                    </div>
                    <div className="flex  justify-start sm:justify-center rounded-md mb-2  items-center mr-2 w-[300px] bg-[#F5F6F7] h-[50px] p-4">
                        <p class="">🖌️ 2. Visual Design</p>
                    </div>
                    <div className="flex  justify-start sm:justify-center rounded-md mb-2  items-center mr-2 w-[300px] bg-[#F5F6F7] h-[50px] p-4">
                        <p class="">💻️ 3. Webflow Design</p>
                    </div>
                    <div className="flex  justify-start sm:justify-center  rounded-md mb-2 items-center mr-2 w-[300px]  bg-[#F5F6F7] h-[50px]  p-4">
                        <p class="">👍️ 3. Revision & Delivery</p>
                    </div>
                </div>
            </div>
        </div> 
        </body>
    )
    
}

export default WorkProcess