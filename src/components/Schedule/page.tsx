'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ScheduleDesktop = dynamic(() => import('./components/ScheduleDesktop'), { ssr: false });
const ScheduleMobile = dynamic(() => import('./components/ScheduleMobile'), { ssr: false });

export default function schedule() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1400);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <ScheduleMobile /> : <ScheduleDesktop />;
}
