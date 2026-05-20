import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techs = [
  { name: 'HTML5',        cat: 'Markup',    img: '/imgs/technology_html.webp' },
  { name: 'CSS3',         cat: 'Styling',   img: '/imgs/technology_css.webp' },
  { name: 'JavaScript',   cat: 'Language',  img: '/imgs/technology_code.webp' },
  { name: 'MongoDB',      cat: 'Database',  img: '/imgs/technology_mongo.webp' },
  { name: 'Materialize',  cat: 'Framework', img: '/imgs/technology_materialize.webp' },
  { name: 'ZEX Protocol', cat: 'Protocol',  img: '/imgs/technology_zex.webp' },
];

const row1 = [...techs, ...techs, ...techs];
const row2 = [...techs, ...techs, ...techs];

const TechCard = ({ tech, idx }) => (
  <div
    className="group relative shrink-0 w-[180px] lg:w-[220px] bg-white/[0.02] border border-white/[0.07] hover:border-[#0066ff]/50 hover:bg-[#0066ff]/[0.06] transition-all duration-400 p-6 flex flex-col items-center text-center cursor-default overflow-hidden"
    style={{ borderRadius: '16px' }}
  >
    <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-transparent group-hover:border-[#0066ff]/60 transition-all duration-400" />
    <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-transparent group-hover:border-[#0066ff]/60 transition-all duration-400" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,102,255,0.1) 0%, transparent 70%)' }} />
    <span className="absolute top-3 right-4 font-[font2] text-[1.8rem] leading-none text-white/[0.04] group-hover:text-[#0066ff]/[0.12] select-none transition-colors duration-400">
      {String(idx + 1).padStart(2, '0')}
    </span>
    <div className="w-14 h-14 mb-4 flex items-center justify-center relative">
      <div className="absolute inset-0 rounded-full bg-[#0066ff]/0 group-hover:bg-[#0066ff]/10 transition-all duration-400 scale-0 group-hover:scale-100" />
      <img src={tech.img} alt={tech.name}
        className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10" />
    </div>
    <div className="font-[font1] text-[9px] uppercase tracking-[4px] text-[#0066ff]/40 group-hover:text-[#0066ff] transition-colors duration-300 mb-1.5">
      {tech.cat}
    </div>
    <h3 className="font-[font2] text-sm uppercase text-white/70 group-hover:text-white transition-colors duration-300">
      {tech.name}
    </h3>
    <div className="h-[2px] w-0 bg-[#0066ff] mt-3 group-hover:w-8 transition-all duration-500" />
  </div>
);

const TechCarousel = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.tc-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });

    gsap.fromTo('.tc-row1',
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true } });

    gsap.fromTo('.tc-row2',
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.35,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 76%', once: true } });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#020a14] py-16 lg:py-32 overflow-hidden">
      <style>{`
        @keyframes tc-left  { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes tc-right { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
        .tc-track-l { animation: tc-left  28s linear infinite; }
        .tc-track-r { animation: tc-right 32s linear infinite; }
        .tc-row1:hover .tc-track-l,
        .tc-row2:hover .tc-track-r { animation-play-state: paused; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[20vw] uppercase leading-none text-white/[0.02]">STACK</span>
      </div>

      {/* Header */}
      <div className="tc-header relative px-6 lg:px-20 max-w-[1400px] mx-auto mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0066ff]/50" />
            <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Our Stack</span>
            <div className="h-px w-8 bg-[#0066ff]/50" />
          </div>
          <h2 className="font-[font2] text-3xl lg:text-5xl uppercase text-white tracking-wider leading-[1.0]">
            Technologies<br /><span className="text-[#0066ff]">We Use</span>
          </h2>
        </div>
        <p className="font-[font1] text-white/25 text-sm leading-[1.9] max-w-[300px] lg:text-right">
          Battle-tested tools and frameworks powering every project we ship.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="tc-row1 relative overflow-hidden mb-5"
        style={{ maskImage: 'linear-gradient(90deg,transparent 0%,black 8%,black 92%,transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg,transparent 0%,black 8%,black 92%,transparent 100%)' }}>
        <div className="tc-track-l flex gap-5 w-max">
          {row1.map((t, i) => <TechCard key={i} tech={t} idx={i % 6} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="tc-row2 relative overflow-hidden"
        style={{ maskImage: 'linear-gradient(90deg,transparent 0%,black 8%,black 92%,transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg,transparent 0%,black 8%,black 92%,transparent 100%)' }}>
        <div className="tc-track-r flex gap-5 w-max">
          {row2.map((t, i) => <TechCard key={i} tech={t} idx={i % 6} />)}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />
    </section>
  );
};

export default TechCarousel;
