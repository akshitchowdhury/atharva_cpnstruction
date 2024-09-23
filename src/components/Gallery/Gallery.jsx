import React from 'react'
import GalleryHero from './GalleryHero'
import GalleryHeroText from './GalleryHeroText'
import GalleryCards from './GalleryCards'
import GalleryBranded from './GalleryBranded'
import AboutQuickConnect from '../About/AboutQuickConnect'

const Gallery = () => {
  return (
    <>
    <div>
        <GalleryHero/>     
        <GalleryHeroText/> 
        
    </div>
    <GalleryCards/>
    <GalleryBranded/>
    <AboutQuickConnect/>
    
    {/* <GalleryBranded/>
    <AboutQuickConnect/> */}
    </>
  )
}

export default Gallery
