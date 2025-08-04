// Timeline.tsx
'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const TimelineDesktop = dynamic(() => import('./TimelineDesktop'), { ssr: false });
const TimelineMobile = dynamic(() => import('./TimelineMobile'), { ssr: false });

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1400);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <TimelineMobile /> : <TimelineDesktop />;
}
