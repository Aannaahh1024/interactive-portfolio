'use client';

import { useEffect, useRef, useState } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
}

const BLOBS = [
  { color: 'rgba(0, 229, 255, 0.90)',   w: 52,  h: 140, lag: 0.18 },
  { color: 'rgba(99, 102, 241, 0.85)',  w: 46,  h: 122, lag: 0.11 },
  { color: 'rgba(236, 72, 153, 0.85)',  w: 42,  h: 108, lag: 0.072 },
  { color: 'rgba(251, 146, 60, 0.78)',  w: 38,  h: 94,  lag: 0.046 },
  { color: 'rgba(34, 197, 94, 0.72)',   w: 34,  h: 80,  lag: 0.028 },
  { color: 'rgba(168, 85, 247, 0.80)',  w: 30,  h: 68,  lag: 0.017 },
  { color: 'rgba(251, 191, 36, 0.70)',  w: 26,  h: 55,  lag: 0.010 },
  { color: 'rgba(239, 68, 68, 0.65)',   w: 22,  h: 44,  lag: 0.006 },
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

        // per-blob velocity → rotation angle so each blob points along its own travel direction
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
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="fluid-distort" x="-40%" y="-40%" width="180%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.022 0.014" numOctaves="3" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0, transition: 'opacity 0.8s ease', filter: 'url(#fluid-distort)' }}
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
              filter:       `blur(${Math.round(blob.w * 0.55)}px)`,
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
