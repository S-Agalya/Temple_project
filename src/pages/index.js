import Image from 'next/image'
import Link from 'next/link';
import Slider from '@/components/Slider';
import { RxDropdownMenu } from "react-icons/rx";
const Main = () => {
  return (
    <>
      <div className="relative mt-0 ">
        <div className='absolute top-0 w-full h-16 bg-yellow-500  font-bold'>
          
           <h2 className='mt-4 ml-20'>SHRI DHARMA SASTHA KOVIL</h2>
     
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg absolute top-0 right-0 mr-3 mt-4 border border-solid border-black-500" style={{backgroundColor:' #BB5A00'}}> CONTACT US</button>
          
        </div>
        
        <div className="absolute  top-10 mt-4 w-full h-16
         bg-red-900 " > 
       
       
        <div className='text-white font-bold mt-5  flex justify-center mr-40'>
        <RxDropdownMenu  className=" absolute text-5xl  text-white left-0"/>
   <Link href='/home' className='left-0 text-white-500 '>Home</Link>
        <Link href='/about' className='ml-20'>About</Link>
        <Link href='/events'  className='ml-20'>Events</Link>
        <Link href='/dharshan'  className='ml-20'>Dharshan</Link>
        <Link href='/gallery' className='ml-20 '>Gallery</Link>
        </div>
        </div>
        <div className="absolute bottom-0 left-0 w-1 h-full "></div>  {/* Vertical line */}
      </div>
      <Image src='/natrajar.png' alt="Example Image" width={500} height={200} className=' absolute bottom-0'/>
<h1>hii welcome</h1>

<div className="flex justify-end items-center mr-6 h-screen">
      <Slider/>
    </div>

     <div className='absolute bottom-0 h-10 w-full bg-yellow-500'>


     </div>
    </>
  );
};

export default Main;

