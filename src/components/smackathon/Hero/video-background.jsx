import React, { useRef, useEffect } from 'react';

export const VideoBackground = ({ 
  webmUrl,
  mp4Url, 
  fallbackImage,
  children 
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Preload critical resources
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div className="absolute top-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={fallbackImage}
        style={{
          filter: 'brightness(0.7)',
        }}
      >
        <source 
          src={webmUrl} 
          type="video/webm" 
        />
        <source 
          src={mp4Url} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div> */}
    </div>
  );
};