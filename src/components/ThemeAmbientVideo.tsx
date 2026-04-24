'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const VIDEO_SRC = '/theme-3d-scroll.mp4';

/**
 * 3D theme video: scrubbed by scroll (no autoplay). Site is dark-only.
 */
export default function ThemeAmbientVideo() {
  const [enabled, setEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEnabled(!mqMotion.matches);
    update();
    mqMotion.addEventListener('change', update);
    return () => mqMotion.removeEventListener('change', update);
  }, []);

  const applyScroll = useCallback(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const p = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    if (video && Number.isFinite(video.duration) && video.duration > 0) {
      const target = Math.min(Math.max(0, p * video.duration), Math.max(0, video.duration - 0.05));
      try {
        video.currentTime = target;
      } catch {
        // ignore seek errors during load
      }
    }

    if (wrap) {
      const parallaxY = p * 48;
      const scale = 1 + p * 0.03;
      wrap.style.transform = `translate3d(0, ${parallaxY}px, 0) scale(${scale})`;
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const tick = () => {
      rafRef.current = 0;
      applyScroll();
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    const video = videoRef.current;
    const onMeta = () => applyScroll();
    video?.addEventListener('loadedmetadata', onMeta);
    video?.addEventListener('durationchange', onMeta);

    applyScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      video?.removeEventListener('loadedmetadata', onMeta);
      video?.removeEventListener('durationchange', onMeta);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, applyScroll]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 h-[120%] w-full -top-[10%] will-change-transform"
      style={{ transformOrigin: '50% 40%' }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-[0.58] saturate-[1.06] contrast-[1.1]"
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        tabIndex={-1}
        aria-hidden
      />
    </div>
  );
}
