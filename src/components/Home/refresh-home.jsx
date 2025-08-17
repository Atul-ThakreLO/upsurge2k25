"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const RefreshHome = ({ targetPath = '/' }) => {
  const pathname = usePathname();
  const hasReloadedRef = useRef(false);
  const previousPathRef = useRef(null);

  useEffect(() => {
    // Check if we're on the target path (home page)
    const isOnTargetPath = pathname === targetPath || pathname === '/home';
    
    // Check if we came from a different page (not initial load)
    const cameFromDifferentPage = previousPathRef.current && 
                                  previousPathRef.current !== pathname;

    // Only reload if:
    // 1. We're on the target path
    // 2. We came from a different page
    // 3. We haven't already reloaded
    if (isOnTargetPath && cameFromDifferentPage && !hasReloadedRef.current) {
      hasReloadedRef.current = true;
      
      // Small delay to ensure navigation is complete
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }

    // Reset reload flag when leaving the target page
    if (!isOnTargetPath) {
      hasReloadedRef.current = false;
    }

    // Update previous path
    previousPathRef.current = pathname;
  }, [pathname, targetPath]);

  // Reset on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      if ((currentPath === targetPath || currentPath === '/home') && 
          !hasReloadedRef.current) {
        hasReloadedRef.current = true;
        window.location.reload();
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [targetPath]);

  // This component doesn't render anything
  return null;
};

export default RefreshHome;

// Usage examples:

// 1. Basic usage - reloads when returning to home page
// <RefreshHome />

// 2. Custom path - reloads when returning to specific page
// <RefreshHome targetPath="/dashboard" />

// 3. Multiple pages
// <RefreshHome targetPath="/home" />
// <RefreshHome targetPath="/events" />
