'use client';

import { useEffect, useRef, useState } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
}

// Blobs are close enough to merge when slow, stretch apart when fast — liquid behaviour
const BLOBS = [
  { color: '#00e5ff', w: 92, h: 112, lag: 0.14  },
  { color: '#6366f1', w: 82, h: 100, lag: 0.085 },
  { color: '#ec4899', w: 76, h: 94,  lag: 0.052 },
  { color: '#fb923c', w: 70, h: 86,  lag: 0.075 },
  { color: '#22c55e', w: 64, h: 80,  lag: 0.032 },
  { color: '#a855f7', w: 58, h: 72,  lag: 0.019 },
  { color: '#fbbf24', w: 50, h: 62,  lag: 0.044 },
];

export default function MouseEffect() {
  const blobRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const positions    = useRef(BLOBS.map(() => ({ x: -600, y: -600 })));
  const prevPos      = useRef(BLOBS.map(() => ({ x: -600, y: -600 })));
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
      BLOBS.forEach((blob, i) => {
        const pos  = positions.current[i];
        const prev = prevPos.current[i];

        const vx    = pos.x - prev.x;
        const vy    = pos.y - prev.y;
        const angle = Math.atan2(vy, vx) * (180 / Math.PI) + 90;

        prev.x = pos.x;
        prev.y = pos.y;

        pos.x += (mouse.current.x - pos.x) * blob.lag;
        pos.y += (mouse.current.y - pos.y) * blob.lag;

        const el = blobRefs.current[i];
        if (el) {
          el.style.transform = `translate(${pos.x - blob.w / 2}px, ${pos.y - blob.h / 2}px) rotate(${angle}deg)`;
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
      {/*
        Two-pass liquid filter:
        1. feGaussianBlur softens and merges nearby blobs
        2. feColorMatrix sharpens the alpha threshold — blobs that touch fuse into one liquid mass
        3. feComposite "in" re-applies original blob colors through the merged liquid silhouette
      */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="liquid" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="13" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 26 -11"
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
        {BLOBS.map((blob, i) => (
          <div
            key={i}
            ref={(el) => { blobRefs.current[i] = el; }}
            className="absolute top-0 left-0"
            style={{
              width:        blob.w,
              height:       blob.h,
              borderRadius: '50%',
              background:   blob.color,
              opacity:      0.82,
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
