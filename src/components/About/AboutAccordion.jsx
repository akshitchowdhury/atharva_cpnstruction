import React, { useState } from 'react'

const AboutAccordion = () => {

    const[togglePara, setTogglePara] = useState(false)
    const openPara = () => {
        setTogglePara(!togglePara)
    }
    return (
        <div className='flex flex-row p-6'>
            <div className='w-[700px] hidden lg:block md:block'>

            </div>
            <div className='flex flex-col'>
                <h1 className='text-red-600  font-thin text-2xl lg:text-2xl mb-2'>
                    Create a Home that Embodies your Personality
                </h1>
                <h3 onClick={openPara} className='flex flex-row items-center cursor-pointer'>
                    <span className='w-[70px] h-[1px] bg-gray-500 mx-4'></span>Read {togglePara ? 'Less -' : 'More +'} 
                </h3>
                {
                    togglePara &&        
                    <div className='space-y-6 text-gray-700 max-w-3xl'>
  <p>
    Express your love for yourself and your family by making your surroundings truly reflect who you are with Atharva Constructions & Interiors. At Atharva, we specialize in crafting homes that are as unique as you. As a full-service construction and interior design brand, we create personalized spaces that stand out, giving your home a distinct identity.
  </p>

  <p>
    Our approach ensures a seamless flow of design, harmonizing every corner—from your living room to your bedroom—into a unified and elegant expression. Your home, the sanctuary where you unwind from the world, is more than just a place to rest. It’s a canvas that holds your dreams, desires, and personal story. 
  </p>

  <p>
    At Atharva, we believe that your home should reflect your individuality, capturing the essence of your personality and aspirations in every design element. Our team of expert designers stays ahead of trends and themes, working closely with you to bring your vision to life, crafting bespoke interiors that speak to your soul and transform your space into a masterpiece tailored to you.
  </p>
</div>

                }
            </div>
        </div>
    )
}

export default AboutAccordion
