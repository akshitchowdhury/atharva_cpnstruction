import React, { useState } from 'react';
import homeStory from "../../assets/homeStory.jpg";

const HomeStory = () => {
  const[toggleComment, setToggleComment] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between
     bg-white px-4 py-8 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-7">
      {/* Left Side: Image */}
      <div className="lg:w-1/2 w-full">
        <img 
          src={homeStory} 
          alt="Customer Testimonials" 
          className="rounded-none object-contain w-full h-auto lg:w-[500px] lg:h-[300px]" 
        />
      </div>

      {/* Right Side: Text */}
      <div className="lg:w-1/2 w-full">
        <h1 className="text-red-600 px-3 font-thin text-2xl lg:text-4xl mb-4">
          Don't Believe Us, Hear What Our Customers Have to Say About Their Experience with Us
        </h1>
        <ul className="list-disc text-gray-700 p-6 text-sm lg:text-lg italic  space-y-4">
          <li>
            "We were almost 90% set on choosing another design company, but a family friend convinced us to visit Atharva Constructions & Interiors. Once we stepped into their experience center, we were completely blown away by the quality and attention to detail. It was an eye-opening experience that made our decision easy.."
          </li>
          
          {
            toggleComment &&
            <li>
            "We definitely liked the design elements in our house incorporated. I think a testimony to that is everyone who visits our house, does call out the design of our house."
          </li>

          }
          <div className='flex items-center mt-4'>
          <hr className="w-8 h-[2px] bg-gray-400 mr-2" />
          <span onClick={() => setToggleComment(!toggleComment)} className="cursor-pointer text-red-500 font-normal  text-sm lg:text-base">
            {toggleComment ? 'Read Less -' : 'Read More +'}
          </span>
          </div>
                 </ul>
      </div>
    </div>
  );
};

export default HomeStory;
