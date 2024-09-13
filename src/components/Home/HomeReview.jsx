import React, { useState } from 'react';
import reviewImages from '../../assets/homeReview.jpg'; // Assuming you have a placeholder image, replace it with actual image sources

const HomeReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white px-4 py-12 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-10">
      {/* Left Side: Text Content */}
      <div className="lg:w-1/2 w-full">
        <h1 className="text-red-600 px-3 font-thin text-2xl lg:text-4xl mb-4 leading-relaxed">
          Capturing Moments of Delight, <br />
          Our Happy Customers, Our Greatest Achievement!
        </h1>
        <p className="text-gray-700 text-sm lg:text-lg italic p-6">
          – "We were searching for somebody whom we can trust, the design & the quality of the material that was being used, it was pretty much at par that we were looking at."
        </p>
        
        {/* Accordion Section */}
        {isOpen && (
          <p className="text-gray-700 text-sm italic lg:text-lg mt-4 p-6">
          – "When we had our house warming party & some of our friends came and they were like, oh wow! You have a good taste, and I was like okay!"
          </p>
        )}
        
        <div className="flex items-center mt-4 cursor-pointer" onClick={toggleAccordion}>
          <hr className="w-8 h-[2px] bg-gray-400 mr-2" />
          <span className="text-red-500 font-normal italic text-sm lg:text-base">
            {isOpen ? 'Read Less -' : 'Read More +'}
          </span>
        </div>
      </div>

      {/* Right Side: Image Grid */}
      <div className="lg:w-1/2 w-full grid grid-cols-1 gap-4">
        <div className="relative shadow-lg rounded-lg">
          <img src={reviewImages} alt="Review 1" className="rounded-lg
           object-cover w-full h-full" />
          {/* Add decorative elements here, e.g. icons */}
          {/* <div className="absolute top-0 left-0 p-2 bg-white rounded-full shadow-md"></div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
