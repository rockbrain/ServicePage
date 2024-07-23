import Company_logo from '../assets/Companylogo.svg';
import Company_logo1 from '../assets/Companylogo1.svg';
import Company_logo2 from '../assets/Companylogo2.svg';
import Company_logo3 from '../assets/Companylogo3.svg';
import Vector from '../assets/Vector.svg';
import Vector1 from '../assets/Vector1.svg';
const platform = () =>{
    return(
        <div className="sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-1 text-left px-[10%]  container m-auto justify-items-start grid gap-6 gap-x-20">
            <div className=''>
            <div className="row-span-1 col-span-1 mb-2">
                <h1 className=' text-2xl text sm:pb-2'>I work with 524+ big companies worldwide. Platform !!!!</h1>
            </div>
                <div className="sm:col-span-1 sm:row-span-1">
                    <p className='pt-2  max-w-2xl text-gray-500 '> I enjoy  translating client requirements into responsive and user-friendly interfaces. 
                        My expertise includes working with technologies such as HTML, CSS, JavaScript bootstrap, Scss Tailwind, J-query etc.
                        I am adept at collaborating with cross-functional teams to deliver high-quality solutions. 
                    </p>
                </div>
            </div>
           
            
                    <div className=" justify-center  sm:col-span-2 col-span-1 sm:row-span-2 ">
                        <div class="[&>div]:p-4 grid grid-cols-3 w-[100%] ">
                            <div className="hover:bg-blue-300 border-b-2"><img src={Company_logo}></img></div>
                            <div className="hover:bg-blue-300 border-l-2 border-b-2"><img src={Company_logo2}></img></div>
                            <div className="hover:bg-blue-300 border-l-2 border-b-2"><img src={Company_logo3}></img></div>
                            <div className="hover:bg-blue-300"><img src={Vector}></img></div>
                            <div className="hover:bg-blue-300 border-l-2 "><img src={Vector1}></img></div>
                            <div className="hover:bg-blue-300 border-l-2"> <img src={Company_logo1}></img></div>
                        </div>
                           
            </div>
        </div>
    )
}
export default platform