'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Splash { id: number; x: number; y: number; }

// Blobs anchored to screen edges and corners — centre stays clear for content
// cx/cy are normalised 0-1 relative to viewport
const BLOBS = [
  { cx: 0.02, cy: 0.04, color: 'rgba(255,148,186,0.68)', r: 530, amp: 62, freq: 0.00037, pf: 0.026, ph: 0.0 },
  { cx: 0.98, cy: 0.03, color: 'rgba(255,228,108,0.62)', r: 490, amp: 55, freq: 0.00030, pf: 0.020, ph: 1.1 },
  { cx: 0.02, cy: 0.97, color: 'rgba(115,235,188,0.62)', r: 510, amp: 66, freq: 0.00043, pf: 0.031, ph: 2.2 },
  { cx: 0.98, cy: 0.97, color: 'rgba(105,193,255,0.66)', r: 520, amp: 58, freq: 0.00035, pf: 0.022, ph: 3.3 },
  { cx: 0.50, cy: 0.00, color: 'rgba(195,153,255,0.60)', r: 470, amp: 46, freq: 0.00041, pf: 0.018, ph: 0.7 },
  { cx: 0.50, cy: 1.00, color: 'rgba(255,193,138,0.57)', r: 460, amp: 52, freq: 0.00032, pf: 0.024, ph: 1.8 },
  { cx: 0.00, cy: 0.50, color: 'rgba(255,173,213,0.60)', r: 450, amp: 72, freq: 0.00046, pf: 0.029, ph: 2.9 },
  { cx: 1.00, cy: 0.50, color: 'rgba(138,218,255,0.60)', r: 465, amp: 63, freq: 0.00039, pf: 0.021, ph: 0.4 },
];

// Donut mask: transparent centre → text readable; opaque at edges → colour intensity builds outward
const CENTRE_MASK =
  'radial-gradient(ellipse 54% 60% at 50% 50%, transparent 28%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.85) 72%, black 90%)';

export default function MouseEffect() {
  const prefersReduced = useReducedMotion();
  const blobRefs       = useRef<(HTMLDivElement | null)[]>([]);
  const mouseNorm      = useRef({ x: 0.5, y: 0.5 });
  const smoothMouse    = useRef({ x: 0.5, y: 0.5 });
  const blendMode      = useRef<string>('multiply');
  const rafRef         = useRef<number>();
  const [splashes, setSplashes] = useState<Splash[]>([]);

  // Click splashes always active regardless of reduced-motion
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setSplashes(p => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplashes(p => p.filter(s => s.id !== id)), 800);
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
      // detect theme for blend mode — only writes to DOM when it actually changes
      const isDark   = document.documentElement.classList.contains('dark');
      const newBlend = isDark ? 'screen' : 'multiply';
      if (newBlend !== blendMode.current) {
        blendMode.current = newBlend;
        blobRefs.current.forEach(el => { if (el) el.style.mixBlendMode = newBlend; });
      }

      // very slow spring toward mouse — liquid parallax, never snappy
      smoothMouse.current.x += (mouseNorm.current.x - smoothMouse.current.x) * 0.028;
      smoothMouse.current.y += (mouseNorm.current.y - smoothMouse.current.y) * 0.028;
      const mx = smoothMouse.current.x;
      const my = smoothMouse.current.y;
      const W  = window.innerWidth;
      const H  = window.innerHeight;

      BLOBS.forEach((blob, i) => {
        const el = blobRefs.current[i];
        if (!el) return;

        // autonomous organic drift — unique period + phase per blob
        const driftX = Math.sin(time * blob.freq + blob.ph + i * 0.7) * blob.amp;
        const driftY = Math.cos(time * blob.freq * 0.76 + blob.ph + i * 0.5) * blob.amp * 0.68;

        // parallax: mouse pull is proportional to blob's pf factor
        const pX = (mx - 0.5) * blob.pf * W;
        const pY = (my - 0.5) * blob.pf * H;

        // proximity: blob swells gently when cursor is nearby
        const bx    = blob.cx * W + driftX + pX;
        const by    = blob.cy * H + driftY + pY;
        const dist  = Math.hypot(mx * W - bx, my * H - by);
        const scale = 1 + Math.max(0, 1 - dist / 460) * 0.12;

        const size = blob.r * scale;
        el.style.width     = `${size}px`;
        el.style.height    = `${size}px`;
        el.style.transform = `translate(${bx - size / 2}px, ${by - size / 2}px)`;
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

  // Reduced-motion: static edge gradients only, no RAF
  if (prefersReduced) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 40% 40% at 0% 0%,   rgba(255,148,186,0.18), transparent 70%),
            radial-gradient(ellipse 40% 40% at 100% 0%,  rgba(255,228,108,0.15), transparent 70%),
            radial-gradient(ellipse 40% 40% at 0% 100%,  rgba(115,235,188,0.15), transparent 70%),
            radial-gradient(ellipse 40% 40% at 100% 100%,rgba(105,193,255,0.18), transparent 70%)
          `,
        }}
      />
    );
  }

  return (
    <>
      {/* Very gentle warp — keeps edges organic, scale kept low so it stays dreamy not jittery */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="smoke-warp" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.004" numOctaves="5" seed="13" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Donut-masked blob container: transparent centre, colour builds toward edges */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          WebkitMaskImage: CENTRE_MASK,
          maskImage:       CENTRE_MASK,
          filter:          'url(#smoke-warp)',
        }}
      >
        {BLOBS.map((blob, i) => (
          <div
            key={i}
            ref={el => { blobRefs.current[i] = el; }}
            className="absolute top-0 left-0"
            style={{
              width:        blob.r,
              height:       blob.r,
              borderRadius: '50%',
              background:   blob.color,
              filter:       `blur(${Math.round(blob.r * 0.17)}px)`,
              mixBlendMode: 'multiply',
              willChange:   'transform, width, height',
            }}
          />
        ))}
      </div>

      {/* Click splash rings */}
      {splashes.map(s => (
        <div
          key={s.id}
          aria-hidden
          className="pointer-events-none fixed z-50"
          style={{ left: s.x, top: s.y }}
        >
          {[0, 1, 2].map(ring => {
            const d = 60 + ring * 32;
            return (
              <div
                key={ring}
                className="splash-ring absolute rounded-full"
                style={{
                  width:  d, height: d,
                  left: -(d / 2), top: -(d / 2),
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
