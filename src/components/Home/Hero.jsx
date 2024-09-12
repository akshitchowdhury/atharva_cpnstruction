import React from 'react'
import homeBg from "../../assets/heroBg.jpg"
import heroMob from "../../assets/hero-mob.jpg"	
import HomeBody from './HomeBody'
import HomeStory from './HomeStory'
import HomeReview from './HomeReview'
import HomeBranded from './HomeBranded'
import HomeCarousel from './HomeCarousel'
import HomeVidReview from './HomeVidReview'
import HomeQualities from './HomeQualities'

const Hero = () => {
  return (
    <>
    <div className="relative w-full">

      <img 
        src={homeBg} 
        alt="Hero Background" 
        className="hidden my-4 sm:block w-full 
        h-[400px] object-cover md:object-contain   sm:h-[500px] md:h-[300px] lg:h-[500px] " 
      />
      <img 
        src={heroMob} 
        alt="Hero Mobile Background" 
        className="block sm:hidden w-full h-[400px] object-cover" 
      />
    </div>
    <HomeBody/>
    <HomeCarousel/>
    <HomeStory/>
    
    <HomeReview/>
    <HomeVidReview/>
    <HomeBranded/>
    <HomeQualities/>
    
    </>
  )
}

export default Hero
