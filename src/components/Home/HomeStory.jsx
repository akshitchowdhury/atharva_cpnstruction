import React from 'react';
import homeStory from "../../assets/homeStory.jpg";

const HomeStory = () => {
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
            "We had 90% fixed another design company, but one of our family friends, he convinced us that we have to go & take a look at Bonito Designs & once we were there, we were blown away by the experience centre."
          </li>
          <li>
            "We definitely liked the Gauri Khan & Manish Malhotra portion design elements in our house. I think a testimony to that is everyone who visits our house, does call out the design of our house."
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeStory;
