import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: '/imgs/user1.webp',
    text: 'SOFTWARE ELITES transformed our online presence completely. Their web design team is incredibly talented — our traffic increased by 300% within 3 months!',
    rating: 5,
    tag: 'Web Design',
  },
  {
    name: 'Michael Davis',
    role: 'Marketing Director',
    image: '/imgs/user2.webp',
    text: "I've worked with several agencies before, but none compare to SOFTWARE ELITES. Their attention to detail and commitment to quality is absolutely unmatched.",
    rating: 5,
    tag: 'Branding',
    featured: true,
  },
  {
    name: 'Jennifer Williams',
    role: 'Business Owner',
    image: '/imgs/user3.webp',
    text: 'The team at SOFTWARE ELITES is professional, creative, and responsive. They built our e-commerce store from scratch and it is performing amazingly well!',
    rating: 5,
    tag: 'E-Commerce',
  },
];

const row1 = [...testimonials, ...testimonials, ...testimonials];
const row2 = [...testimonials].reverse().concat([...testimonials].reverse(), [...testimonials].reverse());

const TestimonialCard = ({ t }) => (
  <div className="shrink-0 w-[340px] lg:w-[420px] px-3 py-2">
    <div
      className="relative flex flex-col p-7 lg:p-8"
      style={{
        borderRadius: '20px',
        background: t.featured
          ? 'linear-gradient(145deg,#0052cc 0%,#0066ff 55%,#1a7aff 100%)'
          : 'rgba(255,255,255,0.04)',
        border: t.featured
          ? '1px solid rgba(0,102,255,0.7)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: t.featured
          ? '0 24px 60px rgba(0,102,255,0.35)'
          : '0 4px 24px rgba(0,0,0,0.25)',
      }}
    >
      {/* Top row: stars + tag */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {[...Array(t.rating)].map((_, j) => (
            <FaStar key={j} className={`text-xs ${t.featured ? 'text-white' : 'text-[#0066ff]'}`} />
          ))}
        </div>
        <span
          className="font-[font1] text-[9px] uppercase tracking-[3px] px-3 py-1"
          style={{
            borderRadius: '6px',
            background: t.featured ? 'rgba(255,255,255,0.15)' : 'rgba(0,102,255,0.1)',
            color: t.featured ? 'white' : '#0066ff',
          }}
        >
          {t.tag}
        </span>
      </div>

      {/* Quote icon */}
      <FaQuoteLeft className={`text-2xl mb-4 ${t.featured ? 'text-white/25' : 'text-[#0066ff]/15'}`} />

      {/* Review text */}
      <p className={`font-[font1] text-sm leading-[1.85] italic mb-6 ${
        t.featured ? 'text-white/90' : 'text-white/50'
      }`}>
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className={`flex items-center gap-3 pt-5 border-t ${
        t.featured ? 'border-white/20' : 'border-white/[0.07]'
      }`}>
        <img
          src={t.image}
          alt={t.name}
          className={`w-10 h-10 rounded-full object-cover shrink-0 border-2 ${
            t.featured ? 'border-white/30' : 'border-[#0066ff]/25'
          }`}
        />
        <div>
          <h4 className={`font-[font2] text-sm uppercase leading-tight ${
            t.featured ? 'text-white' : 'text-white/80'
          }`}>{t.name}</h4>
          <p className={`font-[font1] text-[10px] uppercase tracking-[2px] mt-0.5 ${
            t.featured ? 'text-white/50' : 'text-white/30'
          }`}>{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;

    gsap.fromTo('.tm-header',
      { y: 55, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true } });

    gsap.fromTo('.tm-row-1',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: el, start: 'top 78%', once: true } });

    gsap.fromTo('.tm-row-2',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.38,
        scrollTrigger: { trigger: el, start: 'top 74%', once: true } });

    gsap.fromTo('.tm-bottom',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 55%', once: true } });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#020a14] overflow-hidden py-24 lg:py-32">

      <style>{`
        @keyframes tm-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes tm-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        .tm-track-l { animation: tm-left  30s linear infinite; }
        .tm-track-r { animation: tm-right 36s linear infinite; }
        .tm-row-1:hover .tm-track-l,
        .tm-row-2:hover .tm-track-r { animation-play-state: paused; }
      `}</style>

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,102,255,0.025) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(0,102,255,0.025) 1px,transparent 1px)',
          backgroundSize: '70px 70px',
        }} />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[18vw] uppercase leading-none text-white/[0.02]">CLIENTS</span>
      </div>

      {/* ── Header ── */}
      <div className="tm-header relative px-6 lg:px-20 max-w-[1400px] mx-auto mb-16 lg:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0066ff]/50" />
              <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">Client Reviews</span>
              <div className="h-px w-8 bg-[#0066ff]/50" />
            </div>
            <h2 className="font-[font2] text-4xl lg:text-6xl xl:text-[4.5vw] uppercase leading-[1.05] text-white">
              What Our <span className="text-[#0066ff]">Clients</span> Say
            </h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#0066ff] to-transparent mt-6" />
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap gap-6 lg:gap-12">
            {[['300%', 'Traffic Boost'], ['98%', 'Satisfaction'], ['120+', 'Clients']].map(([num, label], i) => (
              <div key={i} className="text-center lg:text-right">
                <div className="font-[font2] text-2xl lg:text-4xl text-white">{num}</div>
                <div className="font-[font1] text-[9px] uppercase tracking-[2px] text-white/30 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee Row 1 — scroll left ── */}
      <div className="tm-row-1 overflow-hidden mb-5 cursor-default"
        style={{ maskImage: 'linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)' }}>
        <div className="tm-track-l flex" style={{ width: 'max-content' }}>
          {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      {/* ── Marquee Row 2 — scroll right ── */}
      <div className="tm-row-2 overflow-hidden cursor-default"
        style={{ maskImage: 'linear-gradient(90deg,transparent 0%,black 6%,black 94%,transparent 100%)' }}>
        <div className="tm-track-r flex" style={{ width: 'max-content' }}>
          {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="tm-bottom relative px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-10 border-t border-white/[0.07]">
          <p className="font-[font1] text-white/20 text-[10px] uppercase tracking-[4px]">
            Real reviews from real clients — no paid testimonials
          </p>
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map(j => <FaStar key={j} className="text-[#0066ff] text-xs" />)}
            <span className="font-[font1] text-[10px] uppercase tracking-[3px] text-white/25 ml-2">5.0 Average Rating</span>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />
    </section>
  );
};

export default Testimonials;
