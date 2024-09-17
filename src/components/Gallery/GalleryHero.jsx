import React from 'react'
import contactBg from "../../assets/galleryBg.jpg"

const GalleryHero = () => {
  return (
    <div className='relative w-full h-[250px] md:h-[470px]'>

      <img 
        src={contactBg} 
        className='object-cover object-center w-full h-full mix-blend-multiply' 
        alt="Background Image" 
      />


      <div className="absolute inset-0 bg-black opacity-30"></div>


      <div className='relative z-10 flex items-center justify-center h-full'>

      </div>
    </div>
  )
}

export default GalleryHero
