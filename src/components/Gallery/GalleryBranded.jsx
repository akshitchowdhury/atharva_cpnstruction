import React from 'react';
import './GalleryBranded.css'

export default function GalleryBranded() {
  return (
    <div className="galleryBrand
    md:h-[300px] py-8 sm:py-12 md:py-16 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col
      md:flex-col items-center lg:flex-col lg:justify-center md:my-12  lg:items-start space-y-6 lg:space-y-6 lg:space-x-8">
        <h2 className="text-zinc-950 text-2xl sm:text-3xl 
        md:text-4xl lg:text-5xl leading-tight font-light text-center lg:text-left max-w-6xl my-6">
          Start your journey to <span className='text-red-600'>craft</span> your dream home
        </h2>
        <button className="bg-[#E4573D] text-white 
        px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#d4442e] transition-colors duration-300 whitespace-nowrap">
          Book Now
        </button>
      </div>
    </div>
  );
}