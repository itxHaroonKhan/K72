import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CountUp = ({ end, suffix = '', duration = 2.2, className = '' }) => {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: end,
              duration,
              ease: 'power2.out',
              onUpdate() { el.textContent = Math.ceil(obj.val) + suffix; },
              onComplete() { el.textContent = end + suffix; },
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, duration]);

  return <span ref={ref} className={className}>0{suffix}</span>;
};

export default CountUp;
