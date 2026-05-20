import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../CountUp';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  '/imgs/clients_clients01.webp', '/imgs/clients_clients02.webp',
  '/imgs/clients_clients03.webp', '/imgs/clients_clients04.webp',
  '/imgs/clients_clients05.webp', '/imgs/clients_clients06.webp',
];

const stats = [
  { end: 120, suffix: '+', label: 'Happy Clients' },
  { end: 15,  suffix: '+', label: 'Years Active' },
  { end: 300, suffix: '%', label: 'Avg Traffic Boost' },
  { end: 98,  suffix: '%', label: 'Satisfaction Rate' },
];

const ClientLogos = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.cl-overtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
    gsap.fromTo('.cl-heading',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true } });
    gsap.fromTo('.cl-subtext',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.25,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 74%', once: true } });
    gsap.fromTo('.cl-divider',
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: 'expo.out', transformOrigin: 'left', delay: 0.3,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true } });
    gsap.fromTo('.cl-logo-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
    gsap.fromTo('.cl-stat',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.cl-stats', start: 'top 85%', once: true } });
    gsap.fromTo('.cl-bottom-line',
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.4,
        scrollTrigger: { trigger: '.cl-stats', start: 'top 80%', once: true } });

  }, { scope: sectionRef });

  const marqueeStyle = `
    @keyframes marqueeLTR { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes marqueeRTL { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
  `;

  return (
    <section ref={sectionRef} className="relative bg-[#020a14] text-white overflow-hidden py-16 lg:py-36">

      <style>{marqueeStyle}</style>

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[18vw] uppercase leading-none"
          style={{ color: 'rgba(0,102,255,0.03)' }}>CLIENTS</span>
      </div>

      <div className="relative px-6 lg:px-20 max-w-[1400px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-20">

          <div>
            <div className="cl-overtitle flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0066ff]/60" />
              <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Trusted By Industry Leaders</span>
            </div>
            <h2 className="cl-heading font-[font2] text-4xl lg:text-6xl xl:text-[4.5vw] uppercase leading-[1.05] text-white">
              Our <span className="text-[#0066ff]">Clients</span>
            </h2>
            <div className="cl-divider h-[2px] w-24 bg-gradient-to-r from-[#0066ff] to-transparent mt-6" />
          </div>

          <p className="cl-subtext font-[font1] text-white/40 text-sm lg:text-base leading-[1.9] max-w-[360px] lg:text-right">
            We partner with forward-thinking brands and enterprises to build digital experiences that drive real business results.
          </p>
        </div>

        {/* ── Logo Grid ── */}
        <div className="cl-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {logos.map((src, i) => (
            <div key={i}
              className="cl-logo-card group relative bg-white/[0.03] border border-white/[0.07] hover:border-[#0066ff]/40 hover:bg-[#0066ff]/5 transition-all duration-400 flex items-center justify-center p-5 lg:p-8 cursor-pointer overflow-hidden"
              style={{ borderRadius: '14px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/0 to-[#0066ff]/0 group-hover:from-[#0066ff]/5 group-hover:to-transparent transition-all duration-400" />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#0066ff] group-hover:w-full transition-all duration-500" />
              <img
                src={src}
                alt={`Client ${i + 1}`}
                className="h-10 w-auto object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-400 relative z-10"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          ))}
        </div>

      </div>

      {/* ── Marquee Row 1 (L→R) ── */}
      <div className="overflow-hidden border-t border-b border-white/[0.06] py-5 mb-0">
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marqueeLTR 22s linear infinite' }}>
          {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
            <div key={i} className="inline-flex items-center gap-12 shrink-0 px-10">
              <img src={src} alt="" className="h-8 w-auto object-contain opacity-25"
                style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="text-white/[0.12] text-[8px] font-[font1] uppercase tracking-[4px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee Row 2 (R→L) ── */}
      <div className="overflow-hidden border-b border-white/[0.06] py-5 mb-16 lg:mb-20">
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marqueeRTL 28s linear infinite' }}>
          {[...logos, ...logos, ...logos, ...logos].reverse().map((src, i) => (
            <div key={i} className="inline-flex items-center gap-12 shrink-0 px-10">
              <img src={src} alt="" className="h-8 w-auto object-contain opacity-20"
                style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="text-[#0066ff]/[0.2] text-[8px] font-[font1] uppercase tracking-[4px]">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="cl-stats relative px-6 lg:px-20 max-w-[1400px] mx-auto">

        {/* Top rule */}
        <div className="cl-bottom-line h-px bg-gradient-to-r from-[#0066ff]/40 via-white/10 to-transparent mb-10 lg:mb-14" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <div key={i}
              className="cl-stat group relative bg-white/[0.02] border border-white/[0.06] hover:border-[#0066ff]/30 hover:bg-[#0066ff]/[0.04] transition-all duration-400 p-5 lg:p-8 overflow-hidden"
              style={{ borderRadius: '16px' }}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-transparent group-hover:border-[#0066ff]/50 transition-all duration-400 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-transparent group-hover:border-[#0066ff]/50 transition-all duration-400 rounded-br-2xl" />
              {/* Glow dot */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#0066ff]/0 group-hover:bg-[#0066ff] transition-all duration-400"
                style={{ boxShadow: '0 0 12px rgba(0,102,255,0)' }} />
              <div className="font-[font2] text-3xl lg:text-5xl text-white group-hover:text-[#0066ff] transition-colors duration-400 leading-none mb-3">
                <CountUp end={s.end} suffix={s.suffix} duration={2.2} />
              </div>
              <div className="font-[font1] text-[10px] uppercase tracking-[3px] text-white/30 group-hover:text-white/60 transition-colors duration-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent text */}
        <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="font-[font1] text-white/20 text-xs uppercase tracking-[4px]">
            Serving clients across North America, Europe & Asia
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-[#0066ff]/30" />
            <span className="font-[font1] text-[#0066ff]/60 text-[10px] uppercase tracking-[4px]">Since 2009</span>
            <div className="h-px w-12 bg-[#0066ff]/30" />
          </div>
        </div>

      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />

    </section>
  );
};

export default ClientLogos;
