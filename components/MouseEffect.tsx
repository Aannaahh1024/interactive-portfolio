'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Splash { id: number; x: number; y: number; }

// Three ambient ghost brushes that move in sine/cosine paths,
// keeping the background alive even when the mouse is still.
const GHOSTS = [
  { freqX: 0.00022, freqY: 0.00015, phaseX: 0.0,  phaseY: 0.8,  hueOff: 0,   r: 320, alpha: 0.055 },
  { freqX: 0.00017, freqY: 0.00021, phaseX: 2.1,  phaseY: 1.4,  hueOff: 120, r: 280, alpha: 0.050 },
  { freqX: 0.00025, freqY: 0.00018, phaseX: 4.2,  phaseY: 3.1,  hueOff: 240, r: 260, alpha: 0.045 },
];

export default function MouseEffect() {
  const prefersReduced = useReducedMotion();
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const mouse      = useRef({ x: -500, y: -500 });
  const prevMouse  = useRef({ x: -500, y: -500 });
  const hue        = useRef(0);
  const moving     = useRef(false);
  const moveTimer  = useRef<ReturnType<typeof setTimeout>>();
  const rafRef     = useRef<number>();
  const [splashes, setSplashes] = useState<Splash[]>([]);

  // Click splashes — always active
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

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width  = w;
      canvas.height = h;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);
      try { ctx.putImageData(img, 0, 0); } catch (_) { /* ignore on first paint */ }
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      prevMouse.current = { ...mouse.current };
      mouse.current = { x: e.clientX, y: e.clientY };
      moving.current = true;
      clearTimeout(moveTimer.current);
      moveTimer.current = setTimeout(() => { moving.current = false; }, 80);
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Paint a soft radial pastel blob
    const blob = (x: number, y: number, h: number, radius: number, alpha: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
      g.addColorStop(0,    `hsla(${h % 360},            65%, 85%, ${alpha})`);
      g.addColorStop(0.30, `hsla(${(h + 45)  % 360},   60%, 82%, ${alpha * 0.65})`);
      g.addColorStop(0.60, `hsla(${(h + 90)  % 360},   55%, 80%, ${alpha * 0.30})`);
      g.addColorStop(0.85, `hsla(${(h + 135) % 360},   50%, 78%, ${alpha * 0.08})`);
      g.addColorStop(1,    `hsla(${(h + 180) % 360},   45%, 76%, 0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = (time: number) => {
      ctx.globalCompositeOperation = 'source-over';

      // Slowly fade everything back to black — creates the persistent swirl effect
      ctx.fillStyle = 'rgba(0,0,0,0.012)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      hue.current = (hue.current + 0.55) % 360;
      const W = canvas.width;
      const H = canvas.height;

      // Ambient ghost brushes — always painting softly in background
      GHOSTS.forEach((g) => {
        const gx = (Math.sin(time * g.freqX + g.phaseX) * 0.42 + 0.5) * W;
        const gy = (Math.cos(time * g.freqY + g.phaseY) * 0.42 + 0.5) * H;
        blob(gx, gy, (hue.current + g.hueOff) % 360, g.r, g.alpha);
      });

      // Cursor brush — paints along the mouse path with interpolated steps
      if (moving.current) {
        const steps = 4;
        for (let s = 0; s < steps; s++) {
          const t2 = s / steps;
          const ix = prevMouse.current.x + (mouse.current.x - prevMouse.current.x) * t2;
          const iy = prevMouse.current.y + (mouse.current.y - prevMouse.current.y) * t2;
          blob(ix, iy, hue.current + s * 12, 140, 0.52);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      clearTimeout(moveTimer.current);
    };
  }, [prefersReduced]);

  // Reduced-motion: static soft corner gradients, no animation
  if (prefersReduced) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 50% 50% at 5%  5%,  rgba(255,180,210,0.22), transparent 70%),
          radial-gradient(ellipse 50% 50% at 95% 5%,  rgba(255,240,140,0.18), transparent 70%),
          radial-gradient(ellipse 50% 50% at 5%  95%, rgba(160,240,200,0.18), transparent 70%),
          radial-gradient(ellipse 50% 50% at 95% 95%, rgba(160,210,255,0.22), transparent 70%)
        `,
      }} />
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ display: 'block' }}
      />

      {splashes.map(s => (
        <div key={s.id} aria-hidden className="pointer-events-none fixed z-50"
          style={{ left: s.x, top: s.y }}>
          {[0, 1, 2].map(ring => {
            const d = 60 + ring * 32;
            return (
              <div key={ring} className="splash-ring absolute rounded-full"
                style={{
                  width: d, height: d,
                  left: -(d / 2), top: -(d / 2),
                  border: '2px solid var(--accent)',
                  animationDelay: `${ring * 0.08}s`,
                }} />
            );
          })}
          <div className="splash-ring absolute rounded-full"
            style={{ width: 16, height: 16, left: -8, top: -8,
              background: 'var(--accent)', animationDuration: '0.4s' }} />
        </div>
      ))}
    </>
  );
}
