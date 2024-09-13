import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ServicesDropdown = () => {
    const[hovered,setHovered] = useState(false)
    return (
        <>
        <div className='hover:cursor-pointer ' onMouseEnter={()=>{setHovered(true)
        setTimeout(()=>{
            if(hovered===true)
            setHovered(false)
        },2000)}}>
            <Link
            
                to="/services"
                className="text-zinc-950  text-lg hover:text-red-600 relative group"
            >
                Services
                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
        </div>

        {
            hovered && (
                <div className='bg-white p-4 absolute top-[60px] right-[370px]'>
                <ul>
                <li className='text-red-600'>Constructions</li>
                <li className='text-red-600'>Interiors</li>
                </ul>
                </div>
            )
        }
        </>
    )
}

export default ServicesDropdown