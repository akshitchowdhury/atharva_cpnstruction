import React from 'react'
import careerBg from "../../assets/careerBg.jpg"
const CareerHero = () => {
  return (
    
    <div className='relative w-full h-[250px] md:h-[470px]' >
  <img src={careerBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

  <div className=''></div>
</div>
    
  )
}

export default CareerHero
