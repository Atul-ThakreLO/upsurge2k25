"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const RefreshHome = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      // Delay to allow router to settle
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }
  }, [pathname]);

  return null;
};

export default RefreshHome;
