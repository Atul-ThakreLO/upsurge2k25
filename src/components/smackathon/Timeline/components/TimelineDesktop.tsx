'use client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineItems } from '../../../../../data';

export default function Timeline() {
  const totalRows = timelineItems.length + 4;
  const [playerPos, setPlayerPos] = useState({ row: -1, side: 'left' });
  const [brokenTiles, setBrokenTiles] = useState<string[]>([]);
  const [tileGlows, setTileGlows] = useState<Record<string, string>>({});
  const [isGameOver, setIsGameOver] = useState(false);
  const [isFalling, setIsFalling] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [deathCount, setDeathCount] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const colors = ['#00f0ff', '#ff4d4d', '#ffff66', '#bb86fc', '#ff9900'];
    const glows: Record<string, string> = {};
    const broken: string[] = [];
    for (let rowIdx = 0; rowIdx < totalRows; rowIdx++) {
      ['left', 'right'].forEach((side) => {
        const key = `row-${rowIdx}-${side}`;
        glows[key] = colors[Math.floor(Math.random() * colors.length)];
        if (rowIdx > 0 && Math.random() < 0.25) broken.push(key);
      });
    }
    setTileGlows(glows);
    setBrokenTiles(broken);
  }, []);

  const moveNext = (row: number, side: 'left' | 'right') => {
    if (row >= totalRows) {
      setDeathCount((prev) => prev + 1);
      setTimeout(() => {
        setPlayerPos({ row: -1, side: 'left' });
        moveNext(0, Math.random() < 0.5 ? 'left' : 'right');
      }, 2000);
      return;
    }

    const tileKey = `row-${row}-${side}`;
    const isBroken = brokenTiles.includes(tileKey);
    setPlayerPos({ row, side });

    if (isBroken) {
      setIsFalling(true);
      setTimeout(() => {
        setDeathCount((prev) => prev + 1);
        setIsFalling(false);
        setIsGameOver(false);
        setPlayerPos({ row: -1, side: 'left' });
        moveNext(0, Math.random() < 0.5 ? 'left' : 'right');
      }, 2000);
    } else {
      setTimeout(() => moveNext(row + 1, Math.random() < 0.5 ? 'left' : 'right'), 1000);
    }
  };

  useEffect(() => {
    if (!inView || isGameOver || hasWon) return;
    setTimeout(() => moveNext(0, Math.random() < 0.5 ? 'left' : 'right'), 1000);
  }, [inView]);

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-[200vh] flex flex-col items-center justify-start pt-20 overflow-visible"
    >
      {/* Death Counter */}
      <div className="absolute top-4 right-4 z-50 bg-black/70 border border-pink-700 text-pink-500 px-4 py-2 rounded-lg font-mono text-sm shadow-md">
        💀 Deaths: {deathCount}
      </div>

      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-[#111] to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000044,_transparent_80%)] blur-3xl opacity-10" />
        <div className="absolute top-0 left-1/2 w-[200px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[90vw] h-[40vh] bg-red-900 opacity-10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('/timeline/grain.png')] mix-blend-dark-light pointer-events-none z-10" />
      </div>

      {/* Heading */}
      <div className="relative z-20 max-w-screen-xl mx-auto px-4 py-1 mb-30 flex flex-col items-center">
        <h2 className="text-pink-600 tracking-widest font-sans text-4xl game-text md:text-6xl font-extrabold">타임라인</h2>
        <h3 className="text-white text-3xl tracking-[0.4em] font-squid mt-2">TIMELINE</h3>
      </div>

      {/* Korean Label */}
      <div className="absolute top-190  left-6 rotate-[-90deg] font-[Orbitron] font-extrabold tracking-widest text-3xl z-50">
        <span className="text-pink-400">생존</span>  <span className="text-white/80">게임</span>
      </div>

      <div ref={ref} className="h-[1px] w-full" />

      {/* Bridge Tiles */}
      {inView && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col gap-4 pointer-events-none mt-20">
          {Array.from({ length: totalRows }).map((_, rowIdx) => (
            <div key={rowIdx} className="flex gap-4 justify-center relative">
              {['left', 'right'].map((side) => {
                const key = `row-${rowIdx}-${side}`;
                const isBroken = brokenTiles.includes(key);
                const isPlayerHere = playerPos.row === rowIdx && playerPos.side === side;
                const glowColor = tileGlows[key] || '#ffffff';

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: isBroken ? 0 : 1,
                      y: isBroken ? 100 : 0,
                      scale: isBroken ? 0.5 : 1,
                    }}
                    transition={{ delay: rowIdx * 0.03, duration: 0.4 }}
                    className={`w-20 h-20 relative flex items-center justify-center rounded-md border border-yellow-500 ring-1 ring-white/30 backdrop-blur-md ${
                      isBroken ? 'invisible' : 'bg-white/5'
                    }`}
                    style={{
                      boxShadow: `0 0 30px ${glowColor}, inset 0 0 10px #ffffff22`,
                      backgroundImage: 'linear-gradient(145deg, #ffffff05, #ffffff02)',
                      animation: 'sparkle 2s infinite',
                      '--glow': glowColor,
                    } as React.CSSProperties}
                  >
                    <AnimatePresence>
                      {isPlayerHere && (
                        <motion.div
                          key="sprite"
                          initial={{ y: -30, opacity: 0 }}
                          animate={
                            isFalling
                              ? { y: 200, opacity: 0, rotate: 360 }
                              : { y: [0, -5, 0], opacity: 1 }
                          }
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-green-400 text-2xl pointer-events-none"
                        >
                          🟩
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Timeline Cards */}
      <div className="relative z-10 text-white flex flex-col items-center px-4 py-12">
        <div className="flex flex-col gap-6 max-w-2xl w-full">
          {timelineItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                animate={{ x: inView ? (isEven ? -400 : 400) : 0, scale: inView ? 1.5 : 1 }}
                transition={{ type: 'spring', stiffness: 30, damping: 6 }}
                className="bg-pink-700 border-2 border-black rounded-xl p-4 shadow-lg font-mono"
              >
                <div className="text-sm font-bold mb-1 tracking-widest text-white">{item.day}</div>
                {item.time.map((time, i) => (
                  <div key={i} className="text-[0.75rem] leading-snug mb-1">
                    <span className="inline-block bg-[#1f1f1f] text-pink-400 font-bold px-2 py-0.5 rounded mr-2 text-[0.65rem]">
                      {time}
                    </span>
                    <span>{item.desc.split(', ')[i]}</span>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes sparkle {
          0% {
            box-shadow: 0 0 10px var(--glow);
          }
          50% {
            box-shadow: 0 0 30px var(--glow);
          }
          100% {
            box-shadow: 0 0 10px var(--glow);
          }
        }
      `}</style>
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-20"
     style={{
       backgroundImage: "linear-gradient(to top, #0a0a0a 5%, transparent 80%)"
     }} />
    </motion.div>
  );
}
