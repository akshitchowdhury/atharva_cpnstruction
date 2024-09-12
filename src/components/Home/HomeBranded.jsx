import React from 'react';

export default function HomeBranded() {
  return (
    <div className="bg-[#1D2B44]
    md:h-[200px] py-8 sm:py-12 md:py-16 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col
      md:flex-col items-center lg:flex-col lg:justify-between lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <h2 className="text-white text-2xl sm:text-3xl 
        md:text-4xl lg:text-5xl leading-tight font-light text-center lg:text-left max-w-6xl my-6">
          Choose our Brand for your Construction and Interior design needs
        </h2>
        <button className="bg-[#E4573D] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#d4442e] transition-colors duration-300 whitespace-nowrap">
          Book A Consultation
        </button>
      </div>
    </div>
  );
}