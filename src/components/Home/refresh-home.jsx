"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

const RefreshHome = () => {
  const pathname = usePathname();
  const prevPath = useRef(null);

  useEffect(() => {
    if (pathname === "/" && prevPath.current && prevPath.current !== "/") {
      console.log("Refreshing Home...");
      window.location.reload();
    }
    prevPath.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const handleReload = () => {
      window.location.reload();
    };
    window.addEventListener("popstate", handleReload);

    return () => {
      window.removeEventListener("popstate", handleReload);
    };
  }, []);

  return null;
};

export default RefreshHome;
