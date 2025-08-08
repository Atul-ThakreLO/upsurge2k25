'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timelineItems } from '../../../../../data';

export default function TimelineMobile() {
  const totalRows = timelineItems.length + 4;
  const [playerPos, setPlayerPos] = useState({ row: -1, side: 'left' });
  const [brokenTiles, setBrokenTiles] = useState<string[]>([]);
  const [tileGlows, setTileGlows] = useState<Record<string, string>>({});
  const [deathCount, setDeathCount] = useState(0);
  const [isFalling, setIsFalling] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const colors = ['#00f0ff', '#ff4d4d', '#ffff66', '#bb86fc', '#ff9900'];
    const glows: Record<string, string> = {};
    const broken: string[] = [];
    for (let rowIdx = 0; rowIdx < totalRows; rowIdx++) {
      ['left'].forEach((side) => {
        const key = `row-${rowIdx}-${side}`;
        glows[key] = colors[Math.floor(Math.random() * colors.length)];
        if (rowIdx > 0 && Math.random() < 0.25) broken.push(key);
      });
    }
    setTileGlows(glows);
    setBrokenTiles(broken);
  }, []);

  const moveNext = (row: number) => {
    if (row >= totalRows) {
      setDeathCount(prev => prev + 1);
      setTimeout(() => {
        setPlayerPos({ row: -1, side: 'left' });
        moveNext(0);
      }, 2000);
      return;
    }

    const key = `row-${row}-left`;
    const isBroken = brokenTiles.includes(key);
    setPlayerPos({ row, side: 'left' });

    if (isBroken) {
      setIsFalling(true);
      setTimeout(() => {
        setIsFalling(false);
        setPlayerPos({ row: -1, side: 'left' });
        setDeathCount(prev => prev + 1);
        moveNext(0);
      }, 1800);
    } else {
      setTimeout(() => moveNext(row + 1), 1000);
    }
  };

  useEffect(() => {
    if (inView) {
      moveNext(0);
    }
  }, [inView]);

  return (
    <motion.div
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-20 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff000044,_transparent_80%)] blur-3xl opacity-10" />
        <div className="absolute top-0 left-1/2 w-[100px] h-[300px] bg-white/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('/timeline/grain.png')] mix-blend-dark-light pointer-events-none z-10" />
      </div>

      {/* Heading */}
      <div className="relative z-20 text-center mb-10">
        <h2 className="text-pink-600 text-4xl font-black tracking-widest font-sans">타임라인</h2>
        <h3 className="text-white text-sm tracking-[0.3em] font-[Orbitron] mt-1">TIMELINE</h3>
      </div>

      {/* Death Counter */}
      <div className="absolute top-4 right-4 z-30 bg-black/70 border border-red-700 text-red-500 px-3 py-1 rounded-md font-mono text-xs">
        💀 Deaths: {deathCount}
      </div>

      {/* Tile + Timeline Section */}
      <div ref={ref} className="relative z-50 w-full flex flex-row items-start justify-center gap-6 px-4 mb-10">
        {/* Tile Grid on Left */}
        <div className="flex flex-col gap-3">
          {Array.from({ length: totalRows }).map((_, rowIdx) => {
            const key = `row-${rowIdx}-left`;
            const isBroken = brokenTiles.includes(key);
            const isPlayerHere = playerPos.row === rowIdx && playerPos.side === 'left';
            const glowColor = tileGlows[key] || '#ffffff';

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: isBroken ? 0 : 1,
                  y: isBroken ? 50 : 0,
                }}
                className={`relative w-14 h-14 rounded border border-pink-500 ${
                  isBroken ? 'invisible' : 'bg-white/10'
                }`}
                style={{
                  boxShadow: `0 0 12px ${glowColor}`,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <AnimatePresence>
                  {isPlayerHere && (
                    <motion.div
                      key="sprite"
                      initial={{ y: -10, opacity: 0 }}
                      animate={
                        isFalling
                          ? { y: 100, opacity: 0, rotate: 180 }
                          : { y: [0, -3, 0], opacity: 1 }
                      }
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 flex items-center justify-center text-green-400 text-xl"
                    >
                      🟩
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Cards on Right */}
        <div className="flex flex-col gap-6 pb-16 max-w-sm z-50">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-pink-600/80 rounded-lg p-3 border border-black shadow-lg"
            >
              <div className="text-xs font-bold mb-1">{item.day}</div>
              {item.time.map((time, i) => (
                <div key={i} className="text-xs mb-1">
                  <span className="inline-block bg-black/30 text-red-300 font-bold px-2 py-0.5 rounded mr-2">
                    {time}
                  </span>
                  {item.desc.split(', ')[i]}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
