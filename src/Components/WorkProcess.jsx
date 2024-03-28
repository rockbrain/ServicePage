import React from "react"


const WorkProcess = () =>{
    return(
    <div className="small-screens-responsive sm:large-screens-responsive sm:py-36 grid grid-cols-1 md:grid-cols-2 grid-gap-4 md:gap-12 w-full h-[80%] bg-white p-8">
            <div className="grid">
                <div>
                <h1  className="text-2xl/8 pb-4">💼 LET'S WORK TOGETHER! </h1>
                <p  className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am taking on new projects. Waiting to hear about new projects, 
                    so if you'd like to chat please get in touch.
                </p>
                </div>

                <div className="pt-4 grid grid-cols-2 grid-rows-2 gap-2">
               
                <div className="col-span-1 ">
                    <h1 className="text-5xl/8 ">3+</h1>
                    <p className="pt-2 text-gray-500 text-sm">years of experience</p>
                </div>
               
                <div className=" col-span-1">
                    <h1 className="text-5xl/8">28+</h1>
                    <p className="pt-2 text-gray-500 text-sm ">completed projects</p>
                </div>
                <h1 className=" row-span-3 col-span-2 lg:text-3xl/4 text-xl text-blue-500 font-bold pt-8">:rockbrain700@gmail.com</h1>
                
                </div>
                
            </div>
            <div className="grid">
               <div>
               <h1 className="text-2xl/8 pb-4">WORKING PROCESS</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I specialize in UI/UX & Graphic Design and my passion is all 
                    about building elegant and professional user interfaces.
                </p>
               </div>
                <div className="flex justify-center flex-auto flex-wrap ">
            
                    <div className="justify-center text-center m-2 w-[200px] bg-[#F5F6F7] h-[50px]">
                        <p class="text-sm">🤝 1. Project Introduction</p>
                    </div>
                    <div className=" m-2 w-[200px] text-start bg-[#F5F6F7] h-[50px]">
                        <p class="text-sm pl-4">🖌️ 2. Visual Design</p>
                    </div>
                    <div className=" m-2 w-[200px] text-center bg-[#F5F6F7] h-[50px]">
                        <p class="text-sm">💻️ 3. Webflow Development</p>
                    </div>
                    <div className=" m-2 w-[200px] text-center bg-[#F5F6F7] h-[50px]">
                        <p class="text-sm">👍️ 3. Revision & Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default WorkProcess