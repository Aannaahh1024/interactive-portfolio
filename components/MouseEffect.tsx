'use client';

import { useEffect, useRef, useState } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
}

const COLORS = [
  '#00e5ff', '#6366f1', '#ec4899',
  '#fb923c', '#22c55e', '#a855f7',
  '#fbbf24', '#ef4444',
];

const COUNT  = 8;
const RADIUS = 38; // orbit radius around cursor center

export default function MouseEffect() {
  const blobRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const positions    = useRef(Array.from({ length: COUNT }, () => ({ x: -600, y: -600 })));
  const center       = useRef({ x: -600, y: -600 }); // lags behind cursor
  const angleRef     = useRef(0);
  const mouse        = useRef({ x: -600, y: -600 });
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
      }, 2500);
    };

    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setSplashes((p) => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplashes((p) => p.filter((s) => s.id !== id)), 800);
    };

    const animate = () => {
      // orbit center follows cursor with spring lag
      center.current.x += (mouse.current.x - center.current.x) * 0.09;
      center.current.y += (mouse.current.y - center.current.y) * 0.09;

      // continuously spin
      angleRef.current += 0.032;

      Array.from({ length: COUNT }).forEach((_, i) => {
        const phase   = (i / COUNT) * Math.PI * 2;
        const angle   = angleRef.current + phase;
        // slight radius variation per blob so the swirl has depth
        const r       = RADIUS + (i % 3) * 12;
        const targetX = center.current.x + Math.cos(angle) * r;
        const targetY = center.current.y + Math.sin(angle) * r;

        const pos = positions.current[i];
        // each blob also has its own spring lag for a fluid stretched look
        const lag = 0.10 + (i % 3) * 0.04;
        pos.x += (targetX - pos.x) * lag;
        pos.y += (targetY - pos.y) * lag;

        const el = blobRefs.current[i];
        if (el) {
          el.style.transform = `translate(${pos.x - 36}px, ${pos.y - 44}px)`;
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
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="liquid" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 28 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="in" />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0, transition: 'opacity 0.8s ease', filter: 'url(#liquid)' }}
      >
        {COLORS.map((color, i) => (
          <div
            key={i}
            ref={(el) => { blobRefs.current[i] = el; }}
            className="absolute top-0 left-0"
            style={{
              width:        72,
              height:       88,
              borderRadius: '50%',
              background:   color,
              opacity:      0.88,
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
