import Rectangle from '../assets/Rectangle.png';
import iphone from '../assets/iPhoneMockup.png';
import Arrow_up from '../assets/ArrowUpRight.svg';
const hero = () => {
    const btn_message ='Say Hello' 
    const btn_message_2 ='View Portfolio' 

    return(

<section class="px-[10%] py-[20%] sm:py-[5%] container m-auto bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl py-2 mx-auto sm:gap-28  lg:grid-cols-12">
        <div class="m-auto place-self-center lg:col-span-6">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  text-black-900 ">Hello I'm Rockson</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-dark-gray">Software Developer, accessibility and usability advocate Welcome to me Portfolio I'm a Passionate Software Developer who love to learn new tech and enjoy developing new skillsets</p> 
           <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 mb-4 text-base font-medium text-center text-white rounded-lg bg-primary-800  hover:ring-primary-300 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            {btn_message} </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            {btn_message_2} <img src={Arrow_up}></img>
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img /*</div>src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" */ src={iphone}alt="mockup"></img>
        </div>                
    </div>
</section>




    )
}

export default  hero