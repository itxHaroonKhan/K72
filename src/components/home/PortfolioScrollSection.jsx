import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    img: '/imgs/portfolio_web1.webp',
    tag: 'Web Design',
    title: 'Modern Business Website',
    desc: 'A pixel-perfect, conversion-focused website built for a USA-based enterprise — blending aesthetics with performance.',
    year: '2024',
    tech: ['React', 'GSAP', 'Tailwind'],
  },
  {
    img: '/imgs/portfolio_web3.webp',
    tag: 'E-Commerce',
    title: 'Premium Online Store',
    desc: 'Full e-commerce platform with multi-currency support, advanced analytics, and seamless checkout experience.',
    year: '2024',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
  },
  {
    img: '/imgs/portfolio_mob1.webp',
    tag: 'Mobile App',
    title: 'Fitness Tracking App',
    desc: 'Cross-platform mobile app with real-time health monitoring, custom workout plans, and live progress tracking.',
    year: '2024',
    tech: ['React Native', 'Firebase', 'Redux'],
  },
  {
    img: '/imgs/portfolio_brand1.webp',
    tag: 'Branding',
    title: 'Brand Identity System',
    desc: 'Complete visual identity for a global startup — logo, color palette, typography and full brand guidelines.',
    year: '2024',
    tech: ['Illustrator', 'Figma', 'Photoshop'],
  },
];

const PortfolioScrollSection = () => {
  const containerRef = useRef(null);
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const c4 = useRef(null);

  useGSAP(() => {
    // All cards start hidden; centering is pure CSS (inset-0 m-auto)
    gsap.set([c1.current, c2.current, c3.current, c4.current], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=800%',
        pin: true,
        scrub: 2.0,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.from('.pss-label', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0);

    // Card 1 — slide from left → exit right
    tl.fromTo(c1.current,
      { x: '-110vw', opacity: 0, scale: 0.85, rotateY: -15 },
      { x: 0,        opacity: 1, scale: 1,    rotateY: 0,  ease: 'power3.out', duration: 1.2 },
      0.1
    );
    tl.to(c1.current, { x: '110vw', opacity: 0, scale: 0.85, rotateY: 15, ease: 'power2.in', duration: 0.9 }, 1.5);

    // Card 2 — slide from left → exit right
    tl.fromTo(c2.current,
      { x: '-110vw', opacity: 0, scale: 0.85, rotateY: -15 },
      { x: 0,        opacity: 1, scale: 1,    rotateY: 0,  ease: 'power3.out', duration: 1.2 },
      2.5
    );
    tl.to(c2.current, { x: '110vw', opacity: 0, scale: 0.85, rotateY: 15, ease: 'power2.in', duration: 0.9 }, 3.9);

    // Card 3 — slide from left → exit right
    tl.fromTo(c3.current,
      { x: '-110vw', opacity: 0, scale: 0.85, rotateY: -15 },
      { x: 0,        opacity: 1, scale: 1,    rotateY: 0,  ease: 'power3.out', duration: 1.2 },
      4.9
    );
    tl.to(c3.current, { x: '110vw', opacity: 0, scale: 0.85, rotateY: 15, ease: 'power2.in', duration: 0.9 }, 6.3);

    // Card 4 — slide from left → exit right
    tl.fromTo(c4.current,
      { x: '-110vw', opacity: 0, scale: 0.85, rotateY: -15 },
      { x: 0,        opacity: 1, scale: 1,    rotateY: 0,  ease: 'power3.out', duration: 1.2 },
      7.3
    );
    tl.to(c4.current, { x: '110vw', opacity: 0, scale: 0.85, rotateY: 15, ease: 'power2.in', duration: 0.9 }, 8.7);

  }, { scope: containerRef });

  const cardRefs = [c1, c2, c3, c4];

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#020a14] overflow-hidden"
      style={{ perspective: '1400px' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[22vw] uppercase leading-none"
          style={{ color: 'rgba(0,102,255,0.035)' }}>WORK</span>
      </div>

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />

      {/* Label */}
      <div className="pss-label absolute top-10 left-1/2 -translate-x-1/2 text-center z-20 whitespace-nowrap">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-8 bg-[#0066ff]/50" />
          <p className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Selected Work</p>
          <div className="h-px w-8 bg-[#0066ff]/50" />
        </div>
        <h2 className="font-[font2] text-3xl lg:text-4xl uppercase text-white tracking-wider">Our Portfolio</h2>
        <p className="font-[font1] text-white/25 text-[10px] uppercase tracking-[4px] mt-2">Scroll to explore</p>
      </div>

      {/* ── Cards: centered via CSS inset-0 + margin auto (no GSAP centering needed) ── */}
      {cardRefs.map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className="absolute inset-0 m-auto h-fit w-[88vw] lg:w-[44vw] max-w-[620px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card project={projects[i]} index={i + 1} />
        </div>
      ))}

      {/* Ticker */}
      <div className="absolute bottom-14 left-0 right-0 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {[0, 1, 2].map(i => (
            <span key={i} className="font-[font1] text-[10px] uppercase tracking-[5px] text-white/10 px-8 shrink-0">
              WEB DESIGN &nbsp;·&nbsp; E-COMMERCE &nbsp;·&nbsp; MOBILE APPS &nbsp;·&nbsp; BRANDING &nbsp;·&nbsp; REACT &nbsp;·&nbsp; NEXT.JS &nbsp;·&nbsp; UI / UX &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <Link to="/portfolio"
          className="font-[font1] text-[10px] uppercase tracking-[4px] text-white/25
                     hover:text-[#0066ff] transition-all duration-300 flex items-center gap-3 group">
          <span className="h-px w-5 bg-current group-hover:w-8 transition-all duration-300" />
          View Full Portfolio
          <span className="h-px w-5 bg-current group-hover:w-8 transition-all duration-300" />
        </Link>
      </div>
    </section>
  );
};

const Card = ({ project, index }) => (
  <div
    className="relative bg-[#050d18] border border-white/[0.08] overflow-hidden group cursor-pointer
               transition-all duration-500 hover:-translate-y-2"
    style={{
      boxShadow: '0 0 0 1px rgba(0,102,255,0.1), 0 30px 70px rgba(0,0,0,0.85)',
      borderRadius: '20px',
    }}
  >
    {/* Hover glow border */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(0,102,255,0.4)', borderRadius: '20px' }}
    />

    {/* Image */}
    <div className="relative overflow-hidden" style={{ borderRadius: '20px 20px 0 0' }}>
      <div className="aspect-[16/10]">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d18] via-black/20 to-transparent
                      group-hover:via-[#0066ff]/5 transition-colors duration-500 pointer-events-none" />

      {/* Tag + year */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]"
            style={{ boxShadow: '0 0 10px #0066ff' }} />
          <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[3px]">
            {project.tag}
          </span>
        </div>
        <span className="font-[font1] text-white/30 text-[10px] uppercase tracking-[2px] border border-white/10 px-2 py-0.5">
          {project.year}
        </span>
      </div>

      {/* Ghost index */}
      <div className="absolute bottom-2 right-5 font-[font2] text-[70px] leading-none select-none
                      text-white/[0.04] group-hover:text-[#0066ff]/10 transition-colors duration-500">
        {String(index).padStart(2, '0')}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 lg:p-7 relative">
      <div className="absolute top-0 left-6 lg:left-7 w-10 h-px bg-[#0066ff]/60 group-hover:w-20 transition-all duration-500" />

      <h3 className="font-[font2] text-xl lg:text-2xl uppercase mb-2 group-hover:text-[#0066ff] transition-colors duration-300">
        {project.title}
      </h3>
      <p className="font-[font1] text-white/35 text-sm leading-[1.85] mb-4">{project.desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t, i) => (
          <span key={i}
            className="font-[font1] text-[10px] uppercase tracking-[2px] text-[#0066ff]/80
                       border border-[#0066ff]/20 px-3 py-1
                       group-hover:border-[#0066ff]/50 group-hover:text-[#0066ff] transition-all duration-300">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 font-[font1] text-[10px] uppercase tracking-[3px]
                      text-white/20 group-hover:text-[#0066ff] transition-colors duration-300">
        <div className="h-px w-5 bg-current group-hover:w-10 transition-all duration-500" />
        View Project
        <div className="h-px w-5 bg-current opacity-0 group-hover:opacity-100 group-hover:w-10 transition-all duration-500" />
      </div>
    </div>
  </div>
);

export default PortfolioScrollSection;
