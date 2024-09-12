import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import c1 from "../../assets/homeExtra1.jpg";
import c2 from "../../assets/homeExtra2.jpg";
import c3 from "../../assets/homeExtra3.jpg";
const CreationCarousel = () => {
  return (
    <div>
      <div className="w-full lg:w-[500px] h-full object-cover">
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
            <img src={c1} alt="Carousel 1" className="w-full h-[400px] md:h-[600px] object-cover" />
          </div>
          <div>
            <img src={c2} alt="Carousel 2" className="w-full h-[400px] md:h-[600px] object-cover" />
          </div>
          <div>
            <img src={c3} alt="Carousel 3" className="w-full h-[400px] md:h-[600px] object-cover" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default CreationCarousel
