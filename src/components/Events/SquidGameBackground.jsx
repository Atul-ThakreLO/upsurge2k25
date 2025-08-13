import React from "react";
import "./SquidGameBackground.css";

const shapes = [
  { type: "circle", x: 50, y: 500, size: 24, rotation: 0 },
  { type: "triangle", x: 1000, y: 720, size: 28, rotation: 15 },
  { type: "triangle", x: 1300, y: 300, size: 28, rotation: 5 },
  { type: "circle", x: 300, y: 550, size: 26, rotation: 0 },
  { type: "square", x: 400, y: 420, size: 28, rotation: 25 },
  { type: "circle", x: 600, y: 800, size: 20, rotation: 0 },

  // Squid Game Logo Shapes
  // { type: "triangle", x: 700, y: 220, size: 34, rotation: 0 },
  // { type: "circle", x: 663, y: 220, size: 34, rotation: 0 },
  // { type: "square", x: 737, y: 220, size: 36, rotation: 0 },

  { type: "square", x: 800, y: 540, size: 26, rotation: 10 },
  { type: "circle", x: 1200, y: 640, size: 26, rotation: 10 },
];

const SquidGameBackground = () => {
  return (
    <div className="neon-grid-bg fixed inset-0 -z-10">
      <svg
        width="100%"
        height="100%"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Neon Grid Pattern */}
          <pattern
            id="neonGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="transparent" />
            <path
              d="M 40 0 L 0 0 0 40"
              stroke="#E62163"
              strokeWidth="0.5"
              opacity="0.15"
              className="grid-line"
            />
          </pattern>

          {/* Squid Game shapes as symbols */}
          <symbol
            id="circle"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E62163"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
          </symbol>

          <symbol
            id="triangle"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E62163"
            strokeWidth="2"
          >
            <path d="M12 4 L20 20 L4 20 Z" />
          </symbol>

          <symbol
            id="square"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E62163"
            strokeWidth="2"
          >
            <rect x="4" y="4" width="16" height="16" />
          </symbol>
        </defs>

        {/* Background filled with grid */}
        <rect width="100%" height="100%" fill="url(#neonGrid)" />

        {/* Scattered shapes with rotation, size, and staggered glow */}
        {shapes.map((shape, i) => (
          <use
            key={i}
            href={`#${shape.type}`}
            x={shape.x}
            y={shape.y}
            width={shape.size}
            height={shape.size}
            className="neon-symbol"
            style={{
              transformOrigin: "center",
              transform: `rotate(${shape.rotation}deg)`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default SquidGameBackground;
