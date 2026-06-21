'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Splash { id: number; x: number; y: number; }

// Blobs live on the left side of the viewport (cx 0–0.35).
// They drift autonomously and shift slightly with mouse parallax.
// The container mask fades them out toward the right so center/right content stays readable.
const BLOBS = [
  { cx: 0.11, cy: 0.28, color: 'rgba(255,140,185,0.52)', r: 540, amp: 88, freq: 0.00037, pf: 0.032 },
  { cx: 0.27, cy: 0.63, color: 'rgba(195,150,255,0.48)', r: 480, amp: 66, freq: 0.00029, pf: 0.021 },
  { cx: 0.06, cy: 0.74, color: 'rgba(115,235,190,0.44)', r: 435, amp: 74, freq: 0.00045, pf: 0.041 },
  { cx: 0.20, cy: 0.10, color: 'rgba(108,196,255,0.48)', r: 500, amp: 92, freq: 0.00033, pf: 0.017 },
  { cx: 0.03, cy: 0.49, color: 'rgba(255,228,108,0.43)', r: 405, amp: 60, freq: 0.00041, pf: 0.035 },
  { cx: 0.33, cy: 0.38, color: 'rgba(255,190,140,0.40)', r: 360, amp: 52, freq: 0.00050, pf: 0.028 },
];

export default function MouseEffect() {
  const prefersReduced = useReducedMotion();
  const blobRefs       = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef   = useRef<HTMLDivElement>(null);
  const mouseNorm      = useRef({ x: 0.5, y: 0.5 }); // normalised 0-1
  const smoothMouse    = useRef({ x: 0.5, y: 0.5 });
  const rafRef         = useRef<number>();
  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setSplashes((p) => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplashes((p) => p.filter((s) => s.id !== id)), 800);
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      mouseNorm.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const animate = (time: number) => {
      // very slow lerp — creates the heavy, liquid lag feel
      smoothMouse.current.x += (mouseNorm.current.x - smoothMouse.current.x) * 0.030;
      smoothMouse.current.y += (mouseNorm.current.y - smoothMouse.current.y) * 0.030;

      const W  = window.innerWidth;
      const H  = window.innerHeight;
      const mx = smoothMouse.current.x;
      const my = smoothMouse.current.y;

      BLOBS.forEach((blob, i) => {
        const el = blobRefs.current[i];
        if (!el) return;

        // autonomous organic drift — each blob has a unique period and phase
        const driftX = Math.sin(time * blob.freq + i * 1.25) * blob.amp;
        const driftY = Math.cos(time * blob.freq * 0.78 + i * 0.95) * blob.amp * 0.72;

        // parallax: mouse deviation from centre shifts each blob by a different factor
        const pX = (mx - 0.5) * blob.pf * W;
        const pY = (my - 0.5) * blob.pf * H;

        // proximity scale — blob grows very slightly when cursor approaches
        const bx   = blob.cx * W + driftX + pX;
        const by   = blob.cy * H + driftY + pY;
        const dist = Math.hypot(mx * W - bx, my * H - by);
        const scale = 1 + Math.max(0, 1 - dist / 420) * 0.13;

        const x = bx - (blob.r * scale) / 2;
        const y = by - (blob.r * scale) / 2;

        el.style.width     = `${blob.r * scale}px`;
        el.style.height    = `${blob.r * scale}px`;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener('mousemove', onMove);
    };
  }, [prefersReduced]);

  // reduced-motion: static, very subtle single gradient — no animation
  if (prefersReduced) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 70% at 8% 40%, rgba(255,140,185,0.14), transparent 70%),
            radial-gradient(ellipse 40% 55% at 20% 75%, rgba(195,150,255,0.10), transparent 65%)
          `,
        }}
      />
    );
  }

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          {/* Very gentle fractal noise warp — keeps edges organic, not jittery */}
          <filter id="smoke-warp" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.004" numOctaves="5" seed="9" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Blob container — fades to transparent toward the right so content stays readable */}
      <div
        ref={containerRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          filter: 'url(#smoke-warp)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 28%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 72%)',
          maskImage:       'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 28%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 72%)',
        }}
      >
        {BLOBS.map((blob, i) => (
          <div
            key={i}
            ref={(el) => { blobRefs.current[i] = el; }}
            className="absolute top-0 left-0"
            style={{
              width:        blob.r,
              height:       blob.r,
              borderRadius: '50%',
              background:   blob.color,
              filter:       `blur(${Math.round(blob.r * 0.14)}px)`,
              mixBlendMode: 'screen',
              willChange:   'transform, width, height',
            }}
          />
        ))}
      </div>

      {/* Click splash rings */}
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
                  width:  d, height: d,
                  left:   -(d / 2), top: -(d / 2),
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
