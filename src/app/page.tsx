'use client';

import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import AboutCard from '@/components/AboutCard';
import CalendarCard from '@/components/CalendarCard';
import Link from 'next/link';
import { PlaceholderCard1, PlaceholderCard2, PlaceholderCard3, PlaceholderCard4 } from '@/components/PlaceholderCards';
import { useBubblePhysics } from '@/hooks/useBubblePhysics';

type CardItem = {
  id: string;
  href?: string;
  size: number;
  color: string;
  render: (isHovered: boolean) => React.ReactNode;
};

const BREAKPOINT = 768;

/* ── per-card accent colours (used for connections & particles) ── */
const CARD_COLORS: Record<string, string> = {
  about: '#6366f1',
  calendar: '#f59e0b',
  portfolio: '#3b82f6',
  ideas: '#10b981',
  favorites: '#ec4899',
  placeholder1: '#94a3b8',
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [containerDim, setContainerDim] = useState({ w: 0, h: 640 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // ── mobile detection ──
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── measure container ──
  useEffect(() => {
    if (isMobile || !containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerDim({
        w: entry.contentRect.width,
        h: 640,
      });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [isMobile]);

  // ── card definitions (stable ref via useMemo) ──
  const baseCards = useMemo<CardItem[]>(
    () => [
      { id: 'about',         size: 220, color: CARD_COLORS.about,         render: (h: boolean) => <AboutCard isHovered={h} /> },
      { id: 'calendar',      size: 200, color: CARD_COLORS.calendar,      render: (h: boolean) => <CalendarCard isHovered={h} /> },
      { id: 'portfolio',     size: 140, color: CARD_COLORS.portfolio,     href: '/portfolio', render: (h: boolean) => <PlaceholderCard2 isHovered={h} /> },
      { id: 'ideas',         size: 140, color: CARD_COLORS.ideas,         render: (h: boolean) => <PlaceholderCard3 isHovered={h} /> },
      { id: 'favorites',     size: 140, color: CARD_COLORS.favorites,     render: (h: boolean) => <PlaceholderCard4 isHovered={h} /> },
      { id: 'placeholder1',  size: 140, color: CARD_COLORS.placeholder1,  render: (h: boolean) => <PlaceholderCard1 isHovered={h} /> },
    ],
    [],
  );

  // ── physics hook ──
  const bubbleDefs = useMemo(
    () => baseCards.map((c) => ({ id: c.id, radius: c.size })),
    [baseCards],
  );

  const { registerCard, connections, particles, initialPositions } = useBubblePhysics(
    bubbleDefs,
    hoveredCard,
    containerDim.w,
    containerDim.h,
  );

  // ── bloom gate: hide cards until positions are ready, then trigger animation ──
  const [bloomReady, setBloomReady] = useState(false);
  useEffect(() => {
    if (initialPositions.size > 0 && !bloomReady) {
      const raf = requestAnimationFrame(() => setBloomReady(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [initialPositions.size, bloomReady]);

  const handleMouseEnter = useCallback((cardId: string) => setHoveredCard(cardId), []);
  const handleMouseLeave = useCallback(() => setHoveredCard(null), []);

  // ── visual class for hover (glow / z-index, not scale — scale is physics-driven) ──
  const getCardClassName = (cardId: string) => {
    if (hoveredCard === null) return '';
    if (hoveredCard === cardId) return 'bubble-active';
    return 'bubble-squeeze';
  };

  // ════════════════════════════════════════════
  //  Mobile grid layout (unchanged)
  // ════════════════════════════════════════════
  if (isMobile) {
    return (
      <main className="min-h-screen p-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">我的网站</h1>
          <div className="grid grid-cols-2 gap-3">
            {baseCards.map((item) => {
              const content = item.render(false);
              const card = <div className="w-full h-full">{content}</div>;

              return (
                <div
                  key={item.id}
                  className="aspect-square"
                  onTouchStart={() => handleMouseEnter(item.id)}
                  onTouchEnd={handleMouseLeave}
                >
                  {item.href ? (
                    <Link key={item.id} href={item.href} className="block w-full h-full">
                      {card}
                    </Link>
                  ) : (
                    <div className="block w-full h-full">{card}</div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            在电脑端访问以获得更好的交互体验
          </p>
        </div>
      </main>
    );
  }

  // ════════════════════════════════════════════
  //  Desktop bubble layout
  // ════════════════════════════════════════════
  return (
    <main className="min-h-screen p-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div ref={containerRef} className="relative h-[640px] w-full">
          {/* ── SVG overlay: connections & orbiting particles ── */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {/* connection lines */}
            {connections.map((c) => (
              <line
                key={`${c.from}-${c.to}`}
                x1={c.fromX}
                y1={c.fromY}
                x2={c.toX}
                y2={c.toY}
                stroke="rgba(148,163,184,0.35)"
                strokeWidth={1.2}
                strokeDasharray="4 6"
                opacity={c.opacity}
              />
            ))}
            {/* orbiting particles */}
            {particles.map((p) => (
              <circle
                key={p.id}
                cx={p.x}
                cy={p.y}
                r={p.size}
                fill={CARD_COLORS[p.bubbleId] ?? '#94a3b8'}
                opacity={p.opacity}
              />
            ))}
          </svg>

          {/* ── cards ── */}
          {baseCards.map((item, index) => {
            const className = `bubble-wrap ${getCardClassName(item.id)}`;
            const pos = initialPositions.get(item.id);
            const style = pos
              ? { transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }
              : undefined;

            const inner = (
              <div
                className={`bubble-inner ${bloomReady ? 'bloom-start' : ''}`}
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animationDelay: `${index * 0.06}s`,
                }}
              >
                <div style={{ width: '100%', height: '100%' }}>
                  {item.render(hoveredCard === item.id)}
                </div>
              </div>
            );

            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  ref={registerCard(item.id)}
                  className={className}
                  style={style}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {inner}
                </Link>
              );
            }

            return (
              <div
                key={item.id}
                ref={registerCard(item.id)}
                className={className}
                style={style}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
