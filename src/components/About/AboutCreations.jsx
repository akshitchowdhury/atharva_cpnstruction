import React from 'react'
import create from "../../assets/homeExtra1.jpg";
import CreationCarousel from './CreationCarousel';
export default function AboutCreations() {
  return (
    <div className='flex flex-col lg:flex-row px-4 lg:px-12 py-12 gap-8'>
      <div className='w-full lg:w-[700px] flex flex-col justify-normal'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-red-600 font-light mb-6 lg:mb-12 max-w-6xl'>
          Our Creations
          <div className='w-full sm:w-[400px] h-[2px] bg-red-600 my-4'></div>
        </h1>
        <div className='grid grid-cols-3 p-4 gap-x-10 md:gap-4 '>
          <div className='flex flex-col'>
            <p className='text-red-600 text-2xl sm:text-3xl'>400+</p>
            <p className='text-lg sm:text-xl'>sessions</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-red-600 text-2xl sm:text-3xl'>5000+</p>
            <p className='text-lg sm:text-xl '>participation</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-red-600 text-2xl sm:text-3xl'>200+</p>
            <p className='text-lg sm:text-xl '>topics</p>
          </div>
        </div>
        <p className='text-gray-700 text-lg sm:text-xl max-w-xl mt-4 lg:mt-5 '>
          Atharva group of Construction and interiors brings to you live learning sessions with our design experts every weekend to indulge your senses on your path from house to home!
        </p>

        <button className='bg-red-600 text-white px-6 py-3 w-[270px]
        rounded-full text-sm sm:text-base font-medium hover:bg-[#d4442e] transition-colors duration-300 mt-8'>
            Book Now
        </button>
      </div>
      

        {/* <img src={create} alt="Placeholder" className='w-full h-full object-cover' /> */}
        <CreationCarousel/>

    </div>
  )
}