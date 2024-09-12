import React from 'react';
import aboutExp from "../../assets/homeExtra11.jpg";
import { Home, Puzzle, Lightbulb } from 'lucide-react';

const AboutExp = () => {
  return (
    <>
      <div className='p-4 md:p-12 flex flex-col md:flex-row justify-between items-center md:space-x-9'>
        {/* Image Section */}
        <img src={aboutExp} className='w-full h-auto md:h-[350px] md:w-[500px] mb-6 md:mb-0' alt="About Us" />
        
        {/* Info Section */}
        <div className='flex flex-col space-y-16 w-full'>
          {/* First Row */}
          <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            <div className='flex-1 text-center'>
              <p className='text-red-600 font-thin text-4xl lg:text-5xl mb-2'>10+</p>
              <p className='text-gray-700 md:text-xl'>Years of Experience</p>
            </div>

            <div className='hidden lg:block lg:border-l lg:border-gray-300 h-full'></div> {/* Vertical Divider */}

            <div className='flex-1 text-center'>
              <p className='text-red-600 font-thin text-4xl lg:text-5xl mb-2'>8 million</p>
              <p className='text-gray-700 md:text-xl'>Sq ft designed and delivered</p>
            </div>

            <div className='hidden lg:block lg:border-l lg:border-gray-300 h-full'></div> {/* Vertical Divider */}

            <div className='flex-1 text-center'>
              <p className='text-red-600 font-thin text-4xl lg:text-5xl mb-2'>250+</p>
              <p className='text-gray-700 md:text-xl'>In-house Design Experts</p>
            </div>
          </div>

          {/* Second Row */}
          <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            <div className='flex-1 flex flex-col items-center text-center'>
              <Home size={64} className='text-red-600 mb-2' />
              <p className='text-gray-700 md:text-xl'>Professional interior design services</p>
            </div>

            <div className='hidden lg:block lg:border-l lg:border-gray-300 h-full'></div> {/* Vertical Divider */}

            <div className='flex-1 flex flex-col items-center text-center'>
              <Puzzle size={64} className='text-red-600 mb-2' />
              <p className='text-gray-700 md:text-xl'>Full Home Interiors</p>
            </div>

            <div className='hidden lg:block lg:border-l lg:border-gray-300 h-full'></div> {/* Vertical Divider */}

            <div className='flex-1 flex flex-col items-center text-center'>
              <Lightbulb size={64} className='text-red-600 mb-2' />
              <p className='text-gray-700 md:text-xl'>Turnkey solution</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutExp;
