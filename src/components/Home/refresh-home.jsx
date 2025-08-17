"use client";
import React, { useEffect } from "react";

const RefreshHome = () => {
  useEffect(() => {
    const handleReload = () => {
      console.log("reload");
      window.location.reload();
    };
    window.addEventListener('popstate', handleReload);
  }, []);

  return null;
};

export default RefreshHome;
