import React from 'react';
import homeBody from "../../assets/hero2.jpg";
import '../../App.css'
const HomeBody = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between bg-white px-4 py-8
    space-x-8 lg:px-20">
      {/* Left Side: Image Block */}
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <img 
          src={homeBody} 
          alt="India's only branded interior design services" 
          className="rounded-none object-cover w-full h-auto" 
        />
      </div>

      {/* Right Side: Text Block */}
      <div className="lg:w-1/2 w-full p-2 -mx-2 lg:py-12 leading-loose">
        <h2 className="text-red-600 font-thin text-2xl lg:text-4xl mb-4">
          What Atharva Constructions & Interiors special?
        </h2>
        <ul className="list-none text-gray-700 text-sm lg:text-lg font-medium space-y-3">
          <li>Only ISO certified interior design brand with 7-stage quality check and 400+ tests</li>
          <li>Design to Delivery complete interior solutions with one Dedicated point of contact</li>
          {/* <li>Only brand to get you access to Gauri Khan & Manish Malhotra designs</li> */}
          <li>12 years' experience with 8 mn+ sq ft designed and delivered</li>
          <li>300+ in-house designers for full home interiors</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeBody;
