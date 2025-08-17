"use client"
import React, { useEffect } from "react";

const RefreshHome = () => {
  useEffect(() => {
    let hasBlurred = false;

    const handleBlur = () => {
      hasBlurred = true;
    };

    const handleFocus = () => {
      if (hasBlurred) {
        window.location.reload();
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
};

export default RefreshHome;
