'use client';

import { useEffect, useRef, useState } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
}

// Three rotating rainbow layers at different hue offsets and blur depths
const LAYERS = [
  { hueOffset: 0,   blur: 52, opacity: 0.72 },
  { hueOffset: 120, blur: 32, opacity: 0.60 },
  { hueOffset: 240, blur: 18, opacity: 0.50 },
];

export default function MouseEffect() {
  const layerRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const maskRef      = useRef<HTMLDivElement>(null);
  const center       = useRef({ x: -800, y: -800 });
  const mouse        = useRef({ x: -800, y: -800 });
  const angleRef     = useRef(0);
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
      // spring-follow cursor
      center.current.x += (mouse.current.x - center.current.x) * 0.09;
      center.current.y += (mouse.current.y - center.current.y) * 0.09;
      const cx = center.current.x;
      const cy = center.current.y;

      // continuously spin hue
      angleRef.current = (angleRef.current + 1.1) % 360;
      const a = angleRef.current;

      LAYERS.forEach((layer, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        const h = (a + layer.hueOffset) % 360;
        // full-spectrum conic gradient anchored to cursor center
        el.style.background = `conic-gradient(
          from ${h}deg at ${cx}px ${cy}px,
          hsla(${h}        ,100%,72%,1),
          hsla(${(h+51)%360} ,100%,72%,1),
          hsla(${(h+102)%360},100%,72%,1),
          hsla(${(h+153)%360},100%,72%,1),
          hsla(${(h+204)%360},100%,72%,1),
          hsla(${(h+255)%360},100%,72%,1),
          hsla(${(h+306)%360},100%,72%,1),
          hsla(${h}        ,100%,72%,1)
        )`;
      });

      // elliptical radial mask keeps holographic glow around cursor only
      const mask = `radial-gradient(ellipse 240px 200px at ${cx}px ${cy}px, black 20%, transparent 100%)`;
      if (maskRef.current) {
        maskRef.current.style.webkitMaskImage = mask;
        (maskRef.current.style as CSSStyleDeclaration & { maskImage: string }).maskImage = mask;
      }

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
      {/* wave distortion filter — displaces the conic gradient into organic liquid waves */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden>
        <defs>
          <filter id="holo-wave" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.014 0.009"
              numOctaves="4"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="32"
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
        style={{ opacity: 0, transition: 'opacity 0.9s ease' }}
      >
        {/* mask wrapper so the wave filter doesn't escape the ellipse */}
        <div ref={maskRef} className="absolute inset-0" style={{ filter: 'url(#holo-wave)' }}>
          {LAYERS.map((layer, i) => (
            <div
              key={i}
              ref={(el) => { layerRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{
                filter:       `blur(${layer.blur}px)`,
                opacity:      layer.opacity,
                mixBlendMode: 'screen',
              }}
            />
          ))}
        </div>
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
