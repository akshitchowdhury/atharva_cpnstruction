import React from 'react';
import { Link } from 'react-router-dom';

const GalleryHeroText = () => {
  return (
    <div className="container absolute -my-[40%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0
     lg:absolute lg:right-96 lg:top-[270px]">
      <div className="text-left px-4 md:mx-[37%] lg:w-[600px]">
    
    
        <h1 className="text-xl text-white font-light mb-2 md:text-5xl lg:text-5xl">
        Homes that you will <span className='text-red-600'>love</span> waking up to everyday.
</h1>
{/* <div className='flex flex-row px-12 gap-x-2 md:px-8 md:gap-x-6 '>
<Link to={"/"} className="text-zinc-50 font-medium relative text-sm hover:text-amber-400 group">
  HOME 
  </Link>
  <span className="absolute left-23 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100">

  </span>

        <h1 className="text-sm text-white font-bold mb-2 md:text-sm lg:text-sm"> 
  CONTACT 
</h1>
     </div>   
         */}
      </div>
    </div>
  );
}

export default GalleryHeroText;
