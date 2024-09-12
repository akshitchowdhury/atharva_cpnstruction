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
                    <span className='w-[70px] h-[1px] bg-gray-500 mx-4'></span>Read More +
                </h3>
                {
                    togglePara &&        
                <p className='text-gray-700 max-w-3xl'>
                    Express love for yourself and your family to make everything around you, about you with Bonito Designs.

                    Bonito Designs is the only full home interior design brand which creates a distinct identity for your home unique to you. An interior design theme allows you to weave a unified motion of design creating a harmonious flow of aesthetics from your living room interior design to your bedroom interior design.

                    The house, that abode of dreams and desires, is where we all retreat from the stress of the world, where we find solace and sanctuary. But it is also a canvas upon which we can paint the tapestry of our lives, imbuing it with the essence of who we are, our quirks and foibles, our aspirations and triumphs.

                    At Bonito Designs, we believe that every home should be as special as its owners, reflecting the individuality of its owners with every brushstroke of design.

                    Our team of skilled designers are well-versed in the latest trends and themes, and have worked with some of the most celebrated names in the world of design, crafting homes that are nothing short of masterpieces. we draw inspiration from the finest minds in the industry to create bespoke interiors that speak to your soul.
                </p>
                }
            </div>
        </div>
    )
}

export default AboutAccordion
