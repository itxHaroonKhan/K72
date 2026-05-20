import { forwardRef, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

function useAnimationFrame(callback) {
  const savedCallback = useRef(callback);
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    let frameId;
    const loop = () => {
      savedCallback.current();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);
}

const VariableProximity = forwardRef(({
  label,
  fromFontVariationSettings = "'wght' 400, 'opsz' 9",
  toFontVariationSettings   = "'wght' 900, 'opsz' 40",
  containerRef,
  radius   = 120,
  falloff  = 'linear',
  className = '',
  style,
  onClick,
  ...rest
}, ref) => {
  const letterRefs = useRef([]);
  const mousePos   = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e) => { mousePos.current = { x: e.clientX, y: e.clientY }; };
    const target = containerRef?.current ?? document;
    target.addEventListener('mousemove', onMove);
    return () => target.removeEventListener('mousemove', onMove);
  }, [containerRef]);

  const parse = useCallback((s) =>
    s.split(',').reduce((acc, part) => {
      const [k, v] = part.trim().split(' ');
      acc[k.replace(/'/g, '')] = parseFloat(v);
      return acc;
    }, {}), []
  );

  const from = useMemo(() => parse(fromFontVariationSettings), [fromFontVariationSettings, parse]);
  const to   = useMemo(() => parse(toFontVariationSettings),   [toFontVariationSettings, parse]);

  const strength = useCallback((el) => {
    if (!el) return 0;
    const r    = el.getBoundingClientRect();
    const dist = Math.hypot(mousePos.current.x - (r.left + r.width / 2), mousePos.current.y - (r.top + r.height / 2));
    const n    = Math.max(0, Math.min(1, 1 - dist / radius));
    if (falloff === 'exponential') return n * n;
    if (falloff === 'gaussian')    return Math.exp(-((dist / (radius / 2)) ** 2));
    return n;
  }, [radius, falloff]);

  useAnimationFrame(useCallback(() => {
    letterRefs.current.forEach((el) => {
      if (!el) return;
      const s   = strength(el);
      const fvs = Object.entries(from)
        .map(([axis, fv]) => `'${axis}' ${fv + ((to[axis] ?? fv) - fv) * s}`)
        .join(', ');
      el.style.fontVariationSettings = fvs;
    });
  }, [from, to, strength]));

  const words = label.split(' ');
  let idx = 0;

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontFamily: "'Roboto Flex', sans-serif", ...style }}
      onClick={onClick}
      aria-label={label}
      {...rest}
    >
      <span style={{ position:'absolute', width:1, height:1, padding:0, margin:-1, overflow:'hidden', clip:'rect(0,0,0,0)', whiteSpace:'nowrap', border:0 }}>
        {label}
      </span>
      {words.map((word, wi) => (
        <span key={wi} style={{ display:'inline-block', whiteSpace:'nowrap' }} aria-hidden="true">
          {word.split('').map((char) => {
            const i = idx++;
            return (
              <motion.span
                key={i}
                ref={(el) => { letterRefs.current[i] = el; }}
                style={{ display:'inline-block' }}
              >
                {char}
              </motion.span>
            );
          })}
          {wi < words.length - 1 && <span style={{ display:'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;
