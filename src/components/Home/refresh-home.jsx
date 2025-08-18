"use client";
import { useEffect } from "react";

const RefreshHome = () => {
  useEffect(() => {
    const handleReload = () => {
      window.location.reload();
    };
    window.addEventListener("popstate", handleReload);
  }, []);

  return null;
};

export default RefreshHome;
