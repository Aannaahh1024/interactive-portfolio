'use client';

import { useEffect, useRef, useState } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
}

const BLOBS = [
  { color: 'rgba(0, 229, 255, 0.75)',   size: 240, lag: 0.10 },
  { color: 'rgba(99, 102, 241, 0.65)',  size: 190, lag: 0.06 },
  { color: 'rgba(236, 72, 153, 0.65)',  size: 160, lag: 0.04 },
  { color: 'rgba(251, 146, 60, 0.55)',  size: 140, lag: 0.08 },
  { color: 'rgba(34, 197, 94, 0.50)',   size: 120, lag: 0.03 },
  { color: 'rgba(168, 85, 247, 0.55)',  size: 100, lag: 0.07 },
];

export default function MouseEffect() {
  const blobRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const positions  = useRef(BLOBS.map(() => ({ x: -500, y: -500 })));
  const mouse      = useRef({ x: -500, y: -500 });
  const rafRef     = useRef<number>();
  const fadeTimer  = useRef<ReturnType<typeof setTimeout>>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (containerRef.current) containerRef.current.style.opacity = '1';
      clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => {
        if (containerRef.current) containerRef.current.style.opacity = '0';
      }, 2000);
    };

    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setSplashes((p) => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplashes((p) => p.filter((s) => s.id !== id)), 800);
    };

    const animate = () => {
      BLOBS.forEach((blob, i) => {
        const pos = positions.current[i];
        pos.x += (mouse.current.x - pos.x) * blob.lag;
        pos.y += (mouse.current.y - pos.y) * blob.lag;
        const el = blobRefs.current[i];
        if (el) {
          el.style.transform = `translate(${pos.x - blob.size / 2}px, ${pos.y - blob.size / 2}px)`;
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
      <div
        ref={containerRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={{ opacity: 0, transition: 'opacity 0.8s ease' }}
      >
        {BLOBS.map((blob, i) => (
          <div
            key={i}
            ref={(el) => { blobRefs.current[i] = el; }}
            className="absolute top-0 left-0"
            style={{
              width:  blob.size,
              height: blob.size,
              borderRadius: '50%',
              background: blob.color,
              filter: `blur(${Math.round(blob.size * 0.38)}px)`,
              mixBlendMode: 'screen',
              willChange: 'transform',
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
                  width: d,
                  height: d,
                  left: -(d / 2),
                  top:  -(d / 2),
                  border: '2px solid var(--accent)',
                  animationDelay: `${ring * 0.08}s`,
                }}
              />
            );
          })}
          <div
            className="splash-ring absolute rounded-full"
            style={{
              width: 16,
              height: 16,
              left: -8,
              top:  -8,
              background: 'var(--accent)',
              animationDuration: '0.4s',
            }}
          />
        </div>
      ))}
    </>
  );
}
