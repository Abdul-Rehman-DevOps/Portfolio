'use client';

import { useEffect, useState, useRef } from 'react';

const SEGMENTS = 14;
const SMOOTHING = 0.18;
const SEGMENT_SIZE = 8;
const HEAD_SIZE = 10;

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const trailRef = useRef<{ x: number; y: number }[]>(
    Array.from({ length: SEGMENTS }, () => ({ x: -100, y: -100 }))
  );
  const posRef = useRef({ x: -100, y: -100 });
  const [renderPositions, setRenderPositions] = useState<{ x: number; y: number }[]>(
    () => trailRef.current.map((p) => ({ ...p }))
  );
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.body.addEventListener('mouseenter', handleEnter);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.body.removeEventListener('mouseenter', handleEnter);
    };
  }, [isTouch, visible]);

  useEffect(() => {
    if (isTouch || reduceMotion) return;

    const animate = () => {
      const trail = trailRef.current;
      const pos = posRef.current;

      trail[0].x += (pos.x - trail[0].x) * (1 - SMOOTHING);
      trail[0].y += (pos.y - trail[0].y) * (1 - SMOOTHING);

      for (let i = 1; i < SEGMENTS; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * (1 - SMOOTHING * 0.85);
        trail[i].y += (trail[i - 1].y - trail[i].y) * (1 - SMOOTHING * 0.85);
      }

      setRenderPositions(trail.map((p) => ({ ...p })));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isTouch, reduceMotion]);

  if (isTouch || reduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {renderPositions.map((p, i) => {
        const isHead = i === 0;
        const size = isHead ? HEAD_SIZE : Math.max(4, SEGMENT_SIZE - i * 0.35);
        const opacity = 1 - (i / SEGMENTS) * 0.7;
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white transition-opacity duration-150"
            style={{
              left: p.x,
              top: p.y,
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              opacity: visible ? opacity : 0,
              boxShadow: isHead
                ? '0 0 12px 2px rgba(34, 211, 238, 0.4), 0 0 6px rgba(255,255,255,0.6)'
                : '0 0 4px rgba(255,255,255,0.3)',
            }}
          />
        );
      })}
    </div>
  );
}
