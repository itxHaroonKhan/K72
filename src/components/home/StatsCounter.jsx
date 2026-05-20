import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { end: 500, suffix: '+', label: 'Projects Completed', icon: '◈' },
  { end: 300, suffix: '+', label: 'Happy Clients',       icon: '◉' },
  { end: 15,  suffix: '+', label: 'Years Experience',    icon: '◆' },
  { end: 50,  suffix: '+', label: 'Team Members',        icon: '◇' },
];

const StatsCounter = () => {
  const sectionRef = useRef(null);
  const numRefs    = useRef([]);

  useGSAP(() => {
    gsap.fromTo('.sc-tag',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true } });
    gsap.fromTo('.sc-title',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out', delay: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } });
    gsap.fromTo('.sc-divider',
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: 'expo.out', transformOrigin: 'center', delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true } });
    gsap.fromTo('.sc-item',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.sc-row', start: 'top 85%', once: true } });

    // Number counters — single trigger, closure-based counter
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        stats.forEach((stat, i) => {
          const el = numRefs.current[i];
          if (!el) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.end,
            duration: 2.2,
            ease: 'power2.out',
            delay: i * 0.15,
            onUpdate() {
              el.textContent = Math.ceil(obj.val) + stat.suffix;
            },
            onComplete() {
              el.textContent = stat.end + stat.suffix;
            },
          });
        });
      },
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#00050f] overflow-hidden py-24 lg:py-36">

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
                      bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[font2] text-[18vw] uppercase leading-none text-white/[0.018]">IMPACT</span>
      </div>

      <div className="relative px-6 lg:px-20 max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="sc-tag flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0066ff]/60" />
            <span className="font-[font1] text-[#0066ff] text-[10px] uppercase tracking-[6px]">By The Numbers</span>
            <div className="h-px w-8 bg-[#0066ff]/60" />
          </div>
          <h2 className="sc-title font-[font2] text-4xl lg:text-6xl uppercase text-white leading-[1.0]">
            Our <span className="text-[#0066ff]">Impact</span>
          </h2>
          <div className="sc-divider h-[2px] w-24 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent mx-auto mt-6" />
        </div>

        {/* ── One-line stats row ── */}
        <div className="sc-row grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]"
          style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 0 0 1px rgba(0,102,255,0.12)' }}>
          {stats.map((stat, i) => (
            <div key={i}
              className="sc-item group relative bg-[#00050f] hover:bg-[#0066ff]/[0.06] transition-all duration-400 p-6 lg:p-14 flex flex-col items-center justify-center text-center cursor-default overflow-hidden">

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-transparent group-hover:border-[#0066ff]/60 transition-all duration-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-transparent group-hover:border-[#0066ff]/60 transition-all duration-400" />

              {/* Glow spot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="w-32 h-32 rounded-full bg-[#0066ff]/10 blur-3xl" />
              </div>

              {/* Icon */}
              <div className="text-[#0066ff]/30 text-2xl mb-5 group-hover:text-[#0066ff]/70 transition-colors duration-400">
                {stat.icon}
              </div>

              {/* Animated number */}
              <div
                ref={el => numRefs.current[i] = el}
                className="font-[font2] text-4xl lg:text-7xl xl:text-8xl text-white leading-none group-hover:text-[#0066ff] transition-colors duration-400"
              >
                0{stat.suffix}
              </div>

              {/* Label */}
              <div className="font-[font1] text-white/30 text-[10px] uppercase tracking-[4px] mt-5 group-hover:text-white/60 transition-colors duration-400">
                {stat.label}
              </div>

              {/* Bottom blue line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#0066ff] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-center font-[font1] text-white/20 text-xs uppercase tracking-[5px] mt-10">
          Numbers That Speak For Themselves
        </p>

      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px
                      bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />

    </section>
  );
};

export default StatsCounter;
