'use client';

import { useEffect, useState } from 'react';

const SRC = '/theme-loop-bg.mp4';

/**
 * Full-bleed looping background animation (muted). Hidden when reduced motion.
 */
export default function ThemeLoopAnimation() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="absolute inset-0 hidden min-h-full min-w-full dark:block"
      style={{ transform: 'scale(1.08)', transformOrigin: 'center center' }}
    >
      <video
        className="h-full w-full object-cover opacity-[0.78] saturate-[1.06] contrast-[1.12]"
        src={SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        tabIndex={-1}
        aria-hidden
      />
    </div>
  );
}
