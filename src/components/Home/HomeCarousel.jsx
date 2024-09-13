import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import car1 from "../../assets/carousel1.jpg";
import car2 from "../../assets/carousel2.jpg";
import car3 from "../../assets/carousel3.jpg";

const HomeCarousel = () => {
  return (
    <>
    <div className='p-6 md:p-12'>
    <h1 className='text-center text-red-600 font-thin text-2xl md:text-4xl my-4'>
    Design Themes curated by the best in business
    </h1>
    <h3 className=' text-justify text-black font-thin text-lg md:text-xl my-4'>
    Signature Designs themes are only available for a short period of time.
    </h3>
    <h3 className='text-justify text-black font-thin text-lg md:text-xl my-4'>
        
    Experience the premium interior design services of Atharva Constructions & Interiors.
    </h3>
    <div className="flex justify-center items-center md:h-screen ">
      <div className="w-full md:w-3/4 lg:w-2/3">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={600}
          className="rounded-lg shadow-lg"
        >
          <div>
            <img src={car1} alt="Carousel 1" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src={car2} alt="Carousel 2" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src={car3} alt="Carousel 3" className="w-full h-auto object-cover" />
          </div>
        </Carousel>
      </div>
    </div>
    </div>
    </>
  );
}

export default HomeCarousel;
