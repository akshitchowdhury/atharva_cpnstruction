import React from 'react'
import homeBg from "../../assets/heroBg.png"
import heroMob from "../../assets/hero-mob.png"	
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
        h-[400px] object-cover md:object-cover   sm:h-[500px] md:my-0 md:h-[400px] lg:h-full " 
      />
      <div className='p-2'> 
      <img 
        src={heroMob} 
        alt="Hero Mobile Background" 
        className="block sm:hidden w-full h-full md:h-[400px] object-contain -my-[2px]" 
      />
      </div>
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
