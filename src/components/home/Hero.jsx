import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-content > *', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
    tl.from('.hero-image', {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    }, '-=1');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen pt-32 pb-16 flex items-center lg:px-20 px-6 bg-white text-[#222222] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Side */}
        <div className="hero-content lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-[800] leading-[1.2] text-[#0066ff] uppercase tracking-wide">
            Web Design Company
          </h1>
          <h2 className="text-3xl lg:text-5xl font-[700] text-[#222222] relative w-max">
            Services & Solutions
            <span className="absolute right-[-15px] top-0 h-full w-[4px] bg-[#0066ff] animate-pulse"></span>
          </h2>
          <p className="text-base lg:text-lg font-[400] text-[#666666] leading-[1.8] max-w-xl">
            Our creative web design services can help rediscover your business's image in the Internet marketplace. The blending of style and technology we offer, in conjunction with our digital expertise enables your business and brand to succeed on the Web.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/contact" className="bg-[#0066ff] text-white px-8 py-4 rounded font-[600] uppercase tracking-[1px] border-2 border-[#0066ff] hover:bg-transparent hover:text-[#0066ff] transition-all duration-300">
              Get Started
            </Link>
            <Link to="/about" className="bg-transparent text-[#222222] px-8 py-4 rounded font-[600] uppercase tracking-[1px] border-2 border-[#222222] hover:bg-[#222222] hover:text-white transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-image lg:w-1/2 w-full flex justify-center lg:justify-end">
          <img 
            src="/imgs/mainslideimg.webp" 
            alt="Web Design Services" 
            className="w-full max-w-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
