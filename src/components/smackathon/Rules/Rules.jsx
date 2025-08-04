'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const RuleDesktop = dynamic(() => import('./components/ruleDesktop'), { ssr: false });
const RuleMobile = dynamic(() => import('./components/ruleMobile'), { ssr: false });

export default function Rules() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1400);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <RuleMobile /> : <RuleDesktop />;
}
