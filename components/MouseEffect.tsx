'use client';

import { useEffect, useRef, useState } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
}

function getGradient(x: number, y: number, dark: boolean) {
  if (dark) {
    return `radial-gradient(200px circle at ${x}px ${y}px,
      rgba(0,229,255,0.55)   0%,
      rgba(99,102,241,0.40)  30%,
      rgba(236,72,153,0.28)  55%,
      rgba(251,146,60,0.15)  75%,
      transparent            100%)`;
  }
  return `radial-gradient(200px circle at ${x}px ${y}px,
    rgba(6,182,212,0.45)   0%,
    rgba(99,102,241,0.32)  30%,
    rgba(219,39,119,0.22)  55%,
    rgba(234,88,12,0.12)   75%,
    transparent            100%)`;
}

export default function MouseEffect() {
  const gradRef       = useRef<HTMLDivElement>(null);
  const fadeTimerRef  = useRef<ReturnType<typeof setTimeout>>();
  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gradRef.current) return;
      const dark = document.documentElement.classList.contains('dark');
      gradRef.current.style.background = getGradient(e.clientX, e.clientY, dark);
      gradRef.current.style.opacity    = '1';

      clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = setTimeout(() => {
        if (gradRef.current) gradRef.current.style.opacity = '0';
      }, 2000);
    };

    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setSplashes((p) => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplashes((p) => p.filter((s) => s.id !== id)), 800);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      clearTimeout(fadeTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Liquid gradient — position and opacity updated directly on the DOM node, zero re-renders */}
      <div
        ref={gradRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0, transition: 'opacity 0.6s ease' }}
      />

      {/* Splash rings on click */}
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
          {/* Inner fill dot */}
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
