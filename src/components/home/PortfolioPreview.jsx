import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VariableProximity from '../VariableProximity';

gsap.registerPlugin(ScrollTrigger);

const ticker = ['Web Design', 'E-Commerce', 'Mobile Apps', 'Branding', 'UI/UX Design', 'SEO', 'WordPress', 'Video Animation'];

const bodyText = 'For decades our digital creative agency has built a massive portfolio — serving businesses with effective web design and development that drives real results.';

const PortfolioPreview = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.ppv-main',
      { clipPath: 'inset(0 0 0 100%)' },
      {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        clipPath: 'inset(0 0 0 0%)',
        duration: 1.4,
        ease: 'power4.inOut',
      }
    );

    gsap.fromTo('.ppv-sm',
      { clipPath: 'inset(0 0 0 100%)' },
      {
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        clipPath: 'inset(0 0 0 0%)',
        duration: 1.2,
        stagger: 0.22,
        ease: 'power4.inOut',
      }
    );

    gsap.fromTo('.ppv-main img',
      { y: 60 },
      {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 0, duration: 1.6, ease: 'power4.out',
      }
    );
    gsap.fromTo('.ppv-sm img',
      { y: 50 },
      {
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
        y: 0, duration: 1.3, stagger: 0.22, ease: 'power4.out',
      }
    );

    gsap.to('.ppv-main img', {
      scrollTrigger: { trigger: '.ppv-main', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      y: -40, ease: 'none',
    });
    gsap.to('.ppv-sm img', {
      scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      y: -30, ease: 'none',
    });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: '.ppv-text-block', start: 'top 85%', toggleActions: 'play none none none' },
    });

    tl.fromTo('.ppv-overtitle',
        { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0)
      .fromTo('.ppv-heading',
        { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' }, '-=0.3')
      .fromTo('.ppv-rule',
        { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'expo.out', transformOrigin: 'left' }, '-=0.4')
      .fromTo('.ppv-word',
        { y: 25, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.02, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.ppv-cta',
        { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.1');

  }, { scope: containerRef });

  const marqueeStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.33%); }
    }
  `;

  const bodyWords = bodyText.split(' ');

  return (
    <section ref={containerRef} className='relative bg-[#00050f] text-white overflow-hidden'>

      <style>{marqueeStyle}</style>

      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent pointer-events-none' />

      <div className='absolute inset-0 pointer-events-none select-none'
        style={{
          backgroundImage: 'linear-gradient(rgba(0,102,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.02) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

      <div className='relative py-14 lg:py-32 px-6 lg:px-20'>
        <div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-start'>

          {/* ── LEFT — Images ── */}
          <div className='lg:w-[52%] w-full flex flex-col gap-4'>

            <div className='ppv-main relative overflow-hidden group cursor-pointer rounded-2xl'>
              <img
                src='/imgs/prevWork.webp'
                alt='Featured Portfolio'
                className='w-full h-[220px] lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent' />
              <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-[#0066ff] group-hover:w-full transition-all duration-500' />

              <div className='absolute top-4 right-4 flex items-center gap-2 border border-[#0066ff]/40 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5'>
                <span className='text-[#0066ff] text-[10px]'>★</span>
                <span className='font-[font1] text-white text-[10px] uppercase tracking-[2px]'>Featured</span>
              </div>

              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <div className='flex items-center gap-2 mb-2'>
                  <div className='w-1.5 h-1.5 rounded-full bg-[#0066ff]' style={{ boxShadow: '0 0 8px #0066ff' }} />
                  <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[4px]'>Featured Project</span>
                </div>
                <h3 className='font-[font2] text-white text-xl lg:text-2xl uppercase leading-tight mb-3'>
                  Modern Business Website
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {['React', 'GSAP', 'Tailwind'].map((t, i) => (
                    <span key={i} className='font-[font1] text-[10px] uppercase tracking-[2px] border border-[#0066ff]/30 text-[#0066ff]/80 rounded-full px-2.5 py-0.5'>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {[
                { img: '/imgs/portfolio_web1.webp', tag: 'Web Design', year: '2024' },
                { img: '/imgs/portfolio_web3.webp', tag: 'E-Commerce', year: '2024' },
              ].map((p, i) => (
                <div key={i} className='ppv-sm relative overflow-hidden group cursor-pointer rounded-xl'>
                  <img
                    src={p.img}
                    alt={p.tag}
                    className='w-full h-32 lg:h-44 object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                  <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-[#0066ff] group-hover:w-full transition-all duration-500' />

                  <div className='absolute bottom-3 left-3'>
                    <div className='flex items-center gap-1.5 mb-0.5'>
                      <div className='w-1 h-1 rounded-full bg-[#0066ff]' />
                      <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[2px]'>{p.tag}</span>
                    </div>
                    <p className='font-[font2] text-white/40 text-xs uppercase tracking-[2px]'>{p.year}</p>
                  </div>
                  <div className='absolute top-3 right-3 w-7 h-7 rounded-full border border-[#0066ff]/40 bg-[#0066ff]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#0066ff] text-xs backdrop-blur-sm'>
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Text ── */}
          <div className='ppv-text-block lg:w-[48%] w-full flex flex-col gap-6 lg:pt-4'>

            <div className='ppv-overtitle flex items-center gap-3'>
              <div className='h-px w-8 bg-[#0066ff]/60' />
              <span className='font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]'>Our Work</span>
              <div className='h-px w-8 bg-[#0066ff]/60' />
            </div>

            <div className='ppv-heading' ref={headingRef} style={{ position: 'relative' }}>
              <h2 className='text-3xl lg:text-5xl xl:text-[3.5vw] uppercase leading-[1.1] text-white'>
                <VariableProximity
                  label="Check Out Our Previous Work"
                  fromFontVariationSettings="'wght' 300, 'opsz' 9"
                  toFontVariationSettings="'wght' 900, 'opsz' 40"
                  containerRef={containerRef}
                  radius={220}
                  falloff="linear"
                />
              </h2>
            </div>

            <div className='ppv-rule h-[2px] w-full max-w-[80px] bg-gradient-to-r from-[#0066ff] to-transparent' />

            <p className='ppv-body font-[font1] text-white/40 text-base leading-[1.9]'>
              {bodyWords.map((word, i) => (
                <span key={i} className='ppv-word inline-block mr-[0.3em]'>{word}</span>
              ))}
            </p>

            <div className='ppv-cta flex items-center gap-6 flex-wrap pt-2'>
              <Link
                to='/portfolio'
                className='inline-flex items-center gap-3 bg-[#0066ff] text-white font-[font1] text-[11px] uppercase tracking-[3px] px-7 py-3.5 hover:bg-transparent hover:text-[#0066ff] transition-all duration-300 group rounded-full'
              >
                View All Work
                <span className='group-hover:translate-x-1.5 transition-transform duration-300'>→</span>
              </Link>
              <Link
                to='/portfolio'
                className='font-[font1] text-[10px] uppercase tracking-[3px] text-white/30 hover:text-white/60 transition-colors duration-300 flex items-center gap-2'
              >
                <span className='h-px w-6 bg-current' />
                57+ Projects
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className='border-t border-white/5 bg-[#0066ff]/5 py-4 overflow-hidden'>
        <div className='flex gap-0 whitespace-nowrap' style={{ animation: 'marquee 25s linear infinite' }}>
          {[...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className='inline-flex items-center gap-10 font-[font1] text-white/60 text-[10px] uppercase tracking-[5px] shrink-0 px-8'>
              {item}
              <span className='text-[#0066ff]/40 text-[8px]'>◆</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PortfolioPreview;
