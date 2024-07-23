import Rectangle from '../assets/Rectangle.png';
import iphone from '../assets/iPhoneMockup.png';
import Arrow_up from '../assets/ArrowUpRight.svg';
const hero = () => {
    const btn_message ='Say Hello' 
    const btn_message_2 ='View Projects' 

    return(

<section class=" sm:py-[5%] container w-[100%]  dark:bg-gray-900 ">
    <div class="grid items-center mt-24 mb-12 m-auto gap-16 w-[80%] grid-cols-1 sm:grid-cols-2">
        <div class="sm-w[600px] ">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  text-black-900 ">Hello I'm Rockson</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-dark-gray">A software Developer, accessibility and usability advocate Welcome to me Portfolio I'm a Passionate Software Developer who love to learn new tech and enjoy developing new skillsets</p> 
           <a href="#" class="inline-flex items-center justify-center p-2 sm:px-5 sm:py-3 mr-3 mb-4 text-base font-medium text-center text-white rounded-lg bg-primary-800  hover:ring-primary-300 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            {btn_message} </a>
            <a href="#" class="inline-flex items-center justify-center p-2 sm:px-5 sm:py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            {btn_message_2} <img src={Arrow_up} className='pl-2'></img>
            </a> 
        </div>
        <div class="hidden w-[600px]  sm:flex ">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"></img> 
        </div>                
    </div>
</section>


/* bg-gradient-to-r from-[#9249F2] to-[#FF5F49]*/ 

    )
}

export default  hero