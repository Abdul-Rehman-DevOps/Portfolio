import ThemeLoopAnimation from '@/components/ThemeLoopAnimation';

/**
 * Decorative layer: looping background video, SVG node graph, grid, scrim.
 */
export default function BlockchainBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-slate-100 dark:bg-canvas" />

      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-200/35 via-transparent to-slate-100
          dark:from-canvas-elevated/35 dark:via-transparent dark:to-canvas"
      />

      {/* Looping background animation — full-bleed */}
      <ThemeLoopAnimation />

      {/* Cinematic wash — teal / violet */}
      <div
        className="absolute inset-0 hidden opacity-20 dark:block"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 20% 10%, rgba(56, 189, 248, 0.06), transparent 55%), radial-gradient(ellipse 80% 60% at 85% 90%, rgba(139, 92, 246, 0.05), transparent 50%)',
        }}
      />

      {/* Light: slate grid */}
      <div
        className="absolute inset-0 block dark:hidden opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(100, 116, 139, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.08) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Dark: cyan-tinged grid (subtle) */}
      <div
        className="absolute inset-0 hidden dark:block opacity-[0.22]"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.04) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <svg
        className="absolute left-1/2 top-0 h-[min(100%,800px)] w-[min(100%,1200px)] -translate-x-1/2 opacity-[0.12] dark:opacity-[0.2]"
        viewBox="0 0 1200 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="edge-a" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="rgb(59 130 246)" stopOpacity="0.18" />
            <stop offset="1" stopColor="rgb(124 58 237)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <g stroke="url(#edge-a)" strokeWidth="0.55" strokeLinecap="round">
          <line x1="120" y1="200" x2="340" y2="140" />
          <line x1="340" y1="140" x2="520" y2="220" />
          <line x1="520" y1="220" x2="720" y2="160" />
          <line x1="720" y1="160" x2="920" y2="240" />
          <line x1="200" y1="400" x2="380" y2="360" />
          <line x1="380" y1="360" x2="580" y2="420" />
          <line x1="580" y1="420" x2="780" y2="380" />
          <line x1="300" y1="200" x2="380" y2="360" />
          <line x1="520" y1="220" x2="580" y2="420" />
          <line x1="720" y1="160" x2="780" y2="380" />
          <line x1="120" y1="200" x2="200" y2="400" />
          <line x1="920" y1="240" x2="1020" y2="400" />
          <line x1="440" y1="520" x2="680" y2="480" />
          <line x1="580" y1="420" x2="680" y2="480" />
        </g>
        {[
          [120, 200],
          [340, 140],
          [520, 220],
          [720, 160],
          [920, 240],
          [200, 400],
          [380, 360],
          [580, 420],
          [780, 380],
          [1020, 400],
          [440, 520],
          [680, 480],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            className="fill-slate-400/20 dark:fill-cyan-300/18"
          />
        ))}
      </svg>

      <div className="absolute inset-0 bg-slate-50/[0.86] dark:bg-canvas/[0.55]" />
    </div>
  );
}
