'use client';

import { useEffect, useRef, useState } from 'react';

interface Splash { id: number; x: number; y: number; }

// Pastel smoke wisps — elongated, heavily blurred, long trailing lags
const WISPS = [
  { color: 'rgba(255,140,185,0.85)', w: 46, h: 275, lag: 0.145, blur: 40 },
  { color: 'rgba(255,228,105,0.75)', w: 40, h: 240, lag: 0.088, blur: 34 },
  { color: 'rgba(115,255,188,0.78)', w: 38, h: 218, lag: 0.056, blur: 36 },
  { color: 'rgba(105,192,255,0.82)', w: 44, h: 252, lag: 0.036, blur: 42 },
  { color: 'rgba(192,148,255,0.80)', w: 36, h: 228, lag: 0.108, blur: 31 },
  { color: 'rgba(255,140,185,0.66)', w: 32, h: 190, lag: 0.022, blur: 28 },
  { color: 'rgba(115,255,208,0.70)', w: 28, h: 168, lag: 0.013, blur: 24 },
  { color: 'rgba(255,208,138,0.64)', w: 25, h: 150, lag: 0.031, blur: 21 },
  { color: 'rgba(182,168,255,0.70)', w: 22, h: 136, lag: 0.006, blur: 19 },
  { color: 'rgba(255,190,210,0.60)', w: 20, h: 118, lag: 0.042, blur: 17 },
];

export default function MouseEffect() {
  const wispRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const positions    = useRef(WISPS.map(() => ({ x: -800, y: -800 })));
  const prevPos      = useRef(WISPS.map(() => ({ x: -800, y: -800 })));
  const mouse        = useRef({ x: -800, y: -800 });
  const rafRef       = useRef<number>();
  const fadeTimer    = useRef<ReturnType<typeof setTimeout>>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (containerRef.current) containerRef.current.style.opacity = '1';
      clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => {
        if (containerRef.current) containerRef.current.style.opacity = '0';
      }, 3000);
    };

    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setSplashes((p) => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplashes((p) => p.filter((s) => s.id !== id)), 800);
    };

    const animate = () => {
      const t = performance.now() * 0.001;

      WISPS.forEach((wisp, i) => {
        const pos  = positions.current[i];
        const prev = prevPos.current[i];

        // gentle autonomous drift so wisps feel alive when cursor is still
        const driftX = Math.sin(t * 0.35 + i * 1.1) * 16;
        const driftY = Math.cos(t * 0.28 + i * 0.9) * 11;

        const targetX = mouse.current.x + driftX;
        const targetY = mouse.current.y + driftY;

        // per-wisp travel direction → rotate wisp to align with its own flow
        const vx    = pos.x - prev.x;
        const vy    = pos.y - prev.y;
        const angle = Math.atan2(vy, vx) * (180 / Math.PI) + 90;

        prev.x = pos.x;
        prev.y = pos.y;

        pos.x += (targetX - pos.x) * wisp.lag;
        pos.y += (targetY - pos.y) * wisp.lag;

        const el = wispRefs.current[i];
        if (el) {
          el.style.transform = `translate(${pos.x - wisp.w / 2}px, ${pos.y - wisp.h / 2}px) rotate(${angle}deg)`;
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      clearTimeout(fadeTimer.current);
    };
  }, []);

  return (
    <>
      {/* gentle wave distortion — low scale so smoke stays soft, not jittery */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="smoke-wave" x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.005"
              numOctaves="5"
              seed="11"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0, transition: 'opacity 1.2s ease', filter: 'url(#smoke-wave)' }}
      >
        {WISPS.map((wisp, i) => (
          <div
            key={i}
            ref={(el) => { wispRefs.current[i] = el; }}
            className="absolute top-0 left-0"
            style={{
              width:        wisp.w,
              height:       wisp.h,
              borderRadius: '50%',
              background:   wisp.color,
              filter:       `blur(${wisp.blur}px)`,
              mixBlendMode: 'screen',
              willChange:   'transform',
            }}
          />
        ))}
      </div>

      {splashes.map((s) => (
        <div
          key={s.id}
          aria-hidden
          className="pointer-events-none fixed z-50"
          style={{ left: s.x, top: s.y }}
        >
          {[0, 1, 2].map((ring) => {
            const d = 60 + ring * 32;
            return (
              <div
                key={ring}
                className="splash-ring absolute rounded-full"
                style={{
                  width:  d,
                  height: d,
                  left:   -(d / 2),
                  top:    -(d / 2),
                  border: '2px solid var(--accent)',
                  animationDelay: `${ring * 0.08}s`,
                }}
              />
            );
          })}
          <div
            className="splash-ring absolute rounded-full"
            style={{ width: 16, height: 16, left: -8, top: -8, background: 'var(--accent)', animationDuration: '0.4s' }}
          />
        </div>
      ))}
    </>
  );
}
