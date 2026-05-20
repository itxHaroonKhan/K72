import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import ClientLogos from '../components/home/ClientLogos'
import AboutPreview from '../components/home/AboutPreview'
import StatsCounter from '../components/home/StatsCounter'
import ServicesCarousel from '../components/home/ServicesCarousel'
import TechCarousel from '../components/home/TechCarousel'
import PortfolioPreview from '../components/home/PortfolioPreview'
import PricingPackages from '../components/home/PricingPackages'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'
import ScrollImageReveal from '../components/home/ScrollImageReveal'
import { ScrollVelocityText, ScrollVelocityImages } from '../components/home/ScrollVelocitySection'

const Home = () => {

  return (
    <div className='text-white'>

      {/* ── VIDEO HERO ── */}
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center'>
        <HomeHeroText />
        <div className='absolute bottom-5 w-full'>
          <HomeBottomText />
        </div>
      </div>

      {/* ── REST OF PAGE ── */}
      <div className='relative z-10 bg-[#020a14]'>

        <ClientLogos />

        <AboutPreview />

        <StatsCounter />

        <ServicesCarousel />

        <TechCarousel />

        <ScrollVelocityText />

        <PortfolioPreview />

        <ScrollVelocityImages />

        <PricingPackages />

        <Testimonials />

        <ScrollImageReveal />

        <CallToAction />

      </div>
    </div>
  )
}

export default Home
