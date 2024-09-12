import React from 'react'
import contactBg from "../../assets/galleryBg.jpg"

const GalleryHero = () => {
  return (
    <div className='relative w-full h-[250px] md:h-[470px]'>
      {/* Background Image */}
      <img 
        src={contactBg} 
        className='object-cover object-center w-full h-full mix-blend-multiply' 
        alt="Background Image" 
      />

      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Optional Content Layer */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        {/* Add any content here if needed */}
      </div>
    </div>
  )
}

export default GalleryHero
