import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '@/registry/magicui/scroll-based-velocity';

const WORDS_A = ['Web Design', 'E-Commerce', 'UI / UX', 'Branding', 'Mobile Apps', 'SEO'];
const WORDS_B = ['React', 'Next.js', 'GSAP', 'WordPress', 'Node.js', 'Tailwind'];

const IMAGES_A = [
  '/imgs/portfolio_web1.webp',
  '/imgs/portfolio_web3.webp',
  '/imgs/portfolio_web5.webp',
  '/imgs/portfolio_web7.webp',
  '/imgs/portfolio_web9.webp',
  '/imgs/portfolio_web11.webp',
];
const IMAGES_B = [
  '/imgs/portfolio_mob1.webp',
  '/imgs/portfolio_mob3.webp',
  '/imgs/portfolio_brand1.webp',
  '/imgs/portfolio_mob5.webp',
  '/imgs/portfolio_brand2.webp',
  '/imgs/portfolio_mob7.webp',
];

/* ─────────── Text Velocity ─────────── */
export function ScrollVelocityText() {
  return (
    <div className='py-16 bg-[#020a14] overflow-hidden border-t border-b border-white/[0.05]'>
      <ScrollVelocityContainer className='gap-4 text-4xl font-bold md:text-7xl'>

        <ScrollVelocityRow baseVelocity={60} direction={1}>
          {WORDS_A.map((w, i) => (
            <span key={i} className='flex items-center gap-6 px-6'>
              <span className='font-[font2] text-4xl lg:text-6xl uppercase text-white/10 tracking-tight whitespace-nowrap'>
                {w}
              </span>
              <span className='text-[#0066ff] text-2xl lg:text-4xl select-none'>·</span>
            </span>
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={60} direction={-1}>
          {WORDS_B.map((w, i) => (
            <span key={i} className='flex items-center gap-6 px-6'>
              <span className='font-[font2] text-4xl lg:text-6xl uppercase text-white/5 tracking-tight whitespace-nowrap'>
                {w}
              </span>
              <span className='text-[#0066ff]/50 text-2xl lg:text-4xl select-none'>◆</span>
            </span>
          ))}
        </ScrollVelocityRow>

      </ScrollVelocityContainer>

      {/* Edge fade */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020a14] to-transparent' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020a14] to-transparent' />
    </div>
  );
}

/* ─────────── Image Velocity ─────────── */
export function ScrollVelocityImages() {
  return (
    <div className='relative py-10 bg-[#00050f] overflow-hidden border-t border-white/[0.05]'>
      <ScrollVelocityContainer className='gap-4'>

        <ScrollVelocityRow baseVelocity={80} direction={1}>
          {IMAGES_A.map((src, i) => (
            <div key={i} className='mx-2 shrink-0 overflow-hidden group' style={{ width: 280 }}>
              <img
                src={src}
                alt={`portfolio-${i}`}
                className='w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={80} direction={-1}>
          {IMAGES_B.map((src, i) => (
            <div key={i} className='mx-2 shrink-0 overflow-hidden group' style={{ width: 280 }}>
              <img
                src={src}
                alt={`portfolio-b-${i}`}
                className='w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
          ))}
        </ScrollVelocityRow>

      </ScrollVelocityContainer>

      {/* Edge fade */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#00050f] to-transparent' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#00050f] to-transparent' />
    </div>
  );
}
