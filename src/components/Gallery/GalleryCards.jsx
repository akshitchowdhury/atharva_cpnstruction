import React from 'react'
import g1 from "../../assets/carousel2.jpg"
import g2 from "../../assets/homeBg2.jpg"
import g3 from "../../assets/carousel3.jpg"
import g4 from "../../assets/homeExtra4.jpg"
import g5 from "../../assets/homeExtra7.jpg"
import g6 from "../../assets/homeExtra5.jpg"

const GalleryCards = () => {
    const data = [
        {
            src: g1,
            title: "Modern Living Spaces",
            desc: "Atharva Construction offers innovative and modern living spaces designed to maximize comfort and functionality."
        },
        {
            src: g2,
            title: "Luxurious Interiors",
            desc: "Transform your home with Atharva's luxurious interior designs."
        },
        {
            src: g3,
            title: "Sustainable Architecture",
            desc: "We prioritize sustainability in every project, creating eco-friendly buildings."
        },
        {
            src: g4,
            title: "Commercial Spaces",
            desc: "Atharva Construction specializes in designing commercial spaces that enhance productivity and brand identity."
        },
        {
            src: g5,
            title: "Renovation & Remodeling",
            desc: "From concept to completion, Atharva's renovation and remodeling services revitalize old spaces."
        },
        {
            src: g6,
            title: "Custom Home Designs",
            desc: "Create your dream home with Atharva's custom design services."
        },
    ]
    
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 group">
            <div className="relative overflow-hidden aspect-w-3 aspect-h-4">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[400px]
                md:h-[500px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
            </div>
            <h2 className="text-xl text-red-600 font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryCards