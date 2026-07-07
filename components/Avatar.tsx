'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export type AvatarState = 'idle' | 'thinking' | 'speaking';

const DEFAULT_FRAME    = 85;  // neutral, full face forward — shown on load
const LOOK_LEFT_FRAME  = 40;  // left 3/4 profile
const LOOK_RIGHT_FRAME = 160; // right profile (naturally passes through smile frames)

function frameUrl(n: number) {
  return `/avatar-frames/frame_${String(n).padStart(4, '0')}.webp`;
}

interface AvatarProps {
  state?: AvatarState;
  size?: number;
}

export default function Avatar({ state = 'idle', size = 160 }: AvatarProps) {
  const prefersReduced = useReducedMotion();
  const [frame, setFrame] = useState(DEFAULT_FRAME);
  const mouseFrameRef = useRef(DEFAULT_FRAME);
  const thinkTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const thinkDirRef   = useRef<1 | -1>(1);
  const thinkFrameRef = useRef<number>(DEFAULT_FRAME);

  // Preload the interactive range so src swaps are instant
  useEffect(() => {
    for (let i = 60; i <= 120; i++) {
      new Image().src = frameUrl(i);
    }
  }, []);

  // Two-segment linear mapping:
  //   Mouse left half  (0 → 0.5) → frames LOOK_LEFT_FRAME → DEFAULT_FRAME  (turns left)
  //   Mouse right half (0.5 → 1) → frames DEFAULT_FRAME → LOOK_RIGHT_FRAME (turns right + smiles)
  useEffect(() => {
    if (state === 'thinking') return;
    const onMove = (e: MouseEvent) => {
      const ratio = e.clientX / window.innerWidth;
      const target =
        ratio <= 0.5
          ? Math.round(LOOK_LEFT_FRAME + (ratio / 0.5) * (DEFAULT_FRAME - LOOK_LEFT_FRAME))
          : Math.round(DEFAULT_FRAME + ((ratio - 0.5) / 0.5) * (LOOK_RIGHT_FRAME - DEFAULT_FRAME));
      mouseFrameRef.current = target;
      setFrame(target);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [state]);

  // Thinking: oscillate frames 65–110 (slight left tilt ↔ slight smile)
  useEffect(() => {
    if (state !== 'thinking') {
      setFrame(mouseFrameRef.current);
      return;
    }
    if (prefersReduced) return;
    thinkFrameRef.current = DEFAULT_FRAME;
    const LO = 65, HI = 110;
    const step = () => {
      thinkFrameRef.current += thinkDirRef.current * 3;
      if (thinkFrameRef.current >= HI) { thinkFrameRef.current = HI; thinkDirRef.current = -1; }
      if (thinkFrameRef.current <= LO) { thinkFrameRef.current = LO; thinkDirRef.current =  1; }
      setFrame(Math.round(thinkFrameRef.current));
      thinkTimerRef.current = setTimeout(step, 55);
    };
    thinkTimerRef.current = setTimeout(step, 55);
    return () => { if (thinkTimerRef.current) clearTimeout(thinkTimerRef.current); };
  }, [state, prefersReduced]);

  const dotSize = Math.max(5, Math.round(size * 0.055));

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Ambient glow — brighter while speaking */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 68%)',
          opacity: state === 'speaking' ? 0.6 : 0.22,
          borderRadius: '50%',
          transform: 'scale(1.25)',
        }}
      />

      <img
        src={frameUrl(frame)}
        alt="Ana Flor"
        width={size}
        height={size}
        draggable={false}
        className="relative select-none"
        style={{
          width: size,
          height: size,
          objectFit: 'cover',
          objectPosition: '50% 36%',
          // Dissolve gray background at the edges so she floats on the page
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 74% at 50% 44%, black 48%, transparent 80%)',
          maskImage:
            'radial-gradient(ellipse 70% 74% at 50% 44%, black 48%, transparent 80%)',
        }}
      />

      {/* Thinking dots */}
      <AnimatePresence>
        {state === 'thinking' && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute flex gap-1.5"
            style={{ bottom: -dotSize - 4, left: '50%', transform: 'translateX(-50%)' }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block rounded-full"
                style={{ width: dotSize, height: dotSize, background: 'var(--accent)' }}
                animate={prefersReduced ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
