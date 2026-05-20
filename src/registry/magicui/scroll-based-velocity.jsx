import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function ScrollVelocityContainer({ children, className = '' }) {
  return (
    <div className={`flex flex-col w-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function ScrollVelocityRow({ children, baseVelocity = 5, direction = 1, className = '' }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCopy = track.children[0];
    if (!firstCopy) return;

    // Measure after layout
    const oneWidth = firstCopy.offsetWidth;
    if (!oneWidth) return;

    const state = {
      x: direction === -1 ? -oneWidth : 0,
      scrollBoost: 0,
      lastScrollY: window.scrollY,
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - state.lastScrollY;
      state.scrollBoost += Math.abs(delta) * 1.2;
      state.lastScrollY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const tick = (time, deltaTime) => {
      const dt = Math.min(deltaTime / 1000, 0.05);
      state.scrollBoost *= 0.87;
      const speed = baseVelocity + state.scrollBoost;
      state.x -= direction * speed * dt;

      // Keep in [-oneWidth, 0]
      if (state.x < -oneWidth) state.x += oneWidth;
      if (state.x > 0) state.x -= oneWidth;

      gsap.set(track, { x: state.x, force3D: true });
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener('scroll', onScroll);
    };
  }, [baseVelocity, direction]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className='flex will-change-transform'>
        {[0, 1, 2, 3].map(i => (
          <div key={i} className='flex shrink-0 items-center'>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
