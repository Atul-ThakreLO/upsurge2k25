"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const RefreshHome = () => {
  const pathname = usePathname();
  const prevPath = useRef("");

  useEffect(() => {
    if (prevPath.current && pathname === "/") {
      window.location.reload();
    }
    prevPath.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const handleReload = () => {
      window.location.reload();
    };
    window.addEventListener("popstate", handleReload);
  }, []);

  return null;
};

export default RefreshHome;
