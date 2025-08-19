"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GlitchText from "./Prizepool/GlitchText";

const tracks = [
  {
    title: "Education",
    description: "This category focuses on enhancing access to educational resources, improving classroom learning, and facilitating a more engaging knowledge acquisition process. Submissions can include solutions that raise awareness about educational issues.",
    symbol: "△",
    icon: "📚",
    players: 67,
    eliminated: 12,
    color: "pink",
    gameNumber: "001"
  },
  {
    title: "Healthcare",
    description: "This category focuses to address public health challenges, reduce health disparities, or promote personal wellness. Submissions can range from digital archives of public health data to fitness tracking apps, all with the goal of improving health outcomes.",
    symbol: "○",
    icon: "🏥",
    players: 89,
    eliminated: 8,
    color: "green",
    gameNumber: "002"
  },
  {
    title: "Environment",
    description: "This category focuses on projects that leverage technology to preserve ecological ecosystems or promote sustainable practices. Submissions might include solutions for reducing environmental impacts or developing sustainable habits.",
    symbol: "□",
    icon: "🌱",
    players: 54,
    eliminated: 15,
    color: "emerald",
    gameNumber: "003"
  },
  {
    title: "Finance",
    description: "This category focuses on using technology to stimulate economic growth, create employment opportunities, attract investments, and ensure economic sustainability. Submissions might include solutions for financial risk mitigation, innovative fintech ideas, or secure transaction handling.",
    symbol: "△",
    icon: "💰",
    players: 78,
    eliminated: 22,
    color: "yellow",
    gameNumber: "004"
  },
  {
    title: "Web3",
    description: "This category focuses on projects that aim to revolutionize the digital landscape, enhance data security, and address decentralized applications. Submissions can vary from enhancing digital privacy to promoting environmental sustainability through technological innovation.",
    symbol: "○",
    icon: "🔗",
    players: 92,
    eliminated: 5,
    color: "purple",
    gameNumber: "005"
  },
  {
    title: "Agriculture",
    description: "This category focuses on technology to influence various aspects of agriculture, from crop cultivation and network management to agribusiness development. Submissions might include solutions for agricultural sustainability or efficiency improvements in farming practices.",
    symbol: "□",
    icon: "🌾",
    players: 43,
    eliminated: 18,
    color: "amber",
    gameNumber: "006"
  },
  {
    title: "Open Innovation",
    description: "This category focuses on leveraging technological advancements and collaborative efforts to foster innovation across multiple sectors. Submissions might include open-source software developments, ecosystem-building activities, or collaborative research initiatives.",
    symbol: "△",
    icon: "🚀",
    players: 61,
    eliminated: 9,
    color: "cyan",
    gameNumber: "007"
  },
];

export default function Tracks() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.15) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 300);
      }
    }, 4000);

    return () => {
      clearInterval(glitchInterval);
    };
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      pink: {
        border: "border-pink-500",
        bg: "bg-pink-500/10",
        gradient: "from-pink-500 to-red-600",
        text: "text-pink-400",
        shadow: "shadow-pink-500/25"
      },
      green: {
        border: "border-green-500",
        bg: "bg-green-500/10",
        gradient: "from-green-500 to-emerald-600",
        text: "text-green-400",
        shadow: "shadow-green-500/25"
      },
      emerald: {
        border: "border-emerald-500",
        bg: "bg-emerald-500/10",
        gradient: "from-emerald-500 to-green-600",
        text: "text-emerald-400",
        shadow: "shadow-emerald-500/25"
      },
      yellow: {
        border: "border-yellow-500",
        bg: "bg-yellow-500/10",
        gradient: "from-yellow-500 to-orange-600",
        text: "text-yellow-400",
        shadow: "shadow-yellow-500/25"
      },
      purple: {
        border: "border-purple-500",
        bg: "bg-purple-500/10",
        gradient: "from-purple-500 to-indigo-600",
        text: "text-purple-400",
        shadow: "shadow-purple-500/25"
      },
      amber: {
        border: "border-amber-500",
        bg: "bg-amber-500/10",
        gradient: "from-amber-500 to-yellow-600",
        text: "text-amber-400",
        shadow: "shadow-amber-500/25"
      },
      cyan: {
        border: "border-cyan-500",
        bg: "bg-cyan-500/10",
        gradient: "from-cyan-500 to-blue-600",
        text: "text-cyan-400",
        shadow: "shadow-cyan-500/25"
      }
    };
    return colors[color] || colors.pink;
  };

  return (
    <div className={`bg-black py-20 px-4 sm:px-10 min-h-screen text-white tracking-wider relative overflow-hidden ${glitchActive ? 'animate-pulse' : ''}`}>
      

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #ff1493 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #ff69b4 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { symbol: "△", top: "10%", left: "5%", size: "text-6xl", delay: "0s" },
          { symbol: "○", top: "20%", right: "10%", size: "text-5xl", delay: "2s" },
          { symbol: "□", bottom: "25%", left: "15%", size: "text-7xl", delay: "4s" },
          { symbol: "△", top: "60%", right: "20%", size: "text-4xl", delay: "6s" },
          { symbol: "○", bottom: "40%", right: "30%", size: "text-6xl", delay: "8s" }
        ].map((shape, i) => (
          <div
            key={i}
            className={`absolute ${shape.size} text-pink-500/20 font-bold animate-pulse`}
            style={{
              ...shape,
              animation: `float 8s ease-in-out infinite, spin 20s linear infinite`,
              animationDelay: shape.delay
            }}
          >
            {shape.symbol}
          </div>
        ))}
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 20, 147, 0.3) 2px, rgba(255, 20, 147, 0.3) 4px)'
        }}></div>
      </div>

      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <div className="flex items-center justify-center space-x-6 mb-8">
          <motion.div 
            className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center text-white text-3xl font-bold transform rotate-45 shadow-2xl shadow-pink-500/50"
            animate={{ rotate: [45, 50, 45] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            △
          </motion.div>
          <h1 className={`text-4xl md:text-6xl font-extrabold text-pink-500 uppercase tracking-widest game-text ${glitchActive ? 'animate-bounce' : ''}`}>
            🕹️ TRACKS
          </h1>
          <motion.div 
            className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-pink-500/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            ○
          </motion.div>
        </div>
        <div className="w-40 h-2 bg-gradient-to-r from-pink-500 via-red-600 to-pink-500 mx-auto rounded-full mb-6 animate-pulse"></div>
        <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
          Seven deadly games await. Choose your battlefield wisely.
          <span className="text-red-500 font-bold animate-pulse"> Only the strongest survive.</span>
        </p>
      </motion.div>

      {/* Enhanced Tracks Grid with centered last card */}
      <div className="max-w-6xl mx-auto">
        {/* First 6 cards in a 3x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {tracks.slice(0, 6).map((track, index) => {
            const colorClasses = getColorClasses(track.color);
            const survivalRate = Math.round((track.players / (track.players + track.eliminated)) * 100);
            
            return (
              <motion.div
                key={track.title}
                className={`bg-[#111]/90 backdrop-blur-md border-2 ${colorClasses.border} rounded-2xl p-6 shadow-2xl hover:${colorClasses.shadow} transition-all duration-300 group relative overflow-hidden ${colorClasses.bg} max-w-sm mx-auto`}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.2, type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Game Number & Symbol */}
                <div className="absolute top-3 right-3 flex flex-col items-center">
                  <div className="text-2xl text-pink-500/60 font-bold group-hover:text-pink-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {track.symbol}
                  </div>
                  <div className="text-xs font-mono text-gray-500 mt-1">
                    GAME {track.gameNumber}
                  </div>
                </div>

                {/* Danger Indicator */}
                <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-mono animate-pulse">
                    DANGER
                  </div>
                </div>

                {/* Enhanced Glowing Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 blur-sm`}></div>
                
                {/* Content */}
                <div className="relative z-10 mt-8">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${colorClasses.gradient} rounded-xl flex items-center justify-center text-2xl shadow-xl`}
                      whileHover={{ 
                        rotate: 12,
                        scale: 1.2
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {track.icon}
                    </motion.div>
                    <div>
                      <GlitchText text={track.title} />
                      <div className={`text-xs font-mono ${colorClasses.text} opacity-75`}>
                        SURVIVAL PROTOCOL
                      </div>
                    </div>
                  </div>

                  {/* Description - Centered */}
                  <p className="text-gray-300 mt-3 text-sm leading-relaxed group-hover:text-pink-200 transition-colors duration-500 text-justify">
                    {track.description}
                  </p>

                  {/* Risk Warning */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-red-400">HIGH RISK GAME</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Last card centered */}
        <div className="flex justify-center">
          {tracks.slice(6).map((track, index) => {
            const colorClasses = getColorClasses(track.color);
            const actualIndex = index + 6;
            
            return (
              <motion.div
                key={track.title}
                className={`bg-[#111]/90 backdrop-blur-md border-2 ${colorClasses.border} rounded-2xl p-6 shadow-2xl hover:${colorClasses.shadow} transition-all duration-300 group relative overflow-hidden ${colorClasses.bg} max-w-sm`}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: actualIndex * 0.1, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.2, type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Game Number & Symbol */}
                <div className="absolute top-3 right-3 flex flex-col items-center">
                  <div className="text-2xl text-pink-500/60 font-bold group-hover:text-pink-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {track.symbol}
                  </div>
                  <div className="text-xs font-mono text-gray-500 mt-1">
                    GAME {track.gameNumber}
                  </div>
                </div>

                {/* Danger Indicator */}
                <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded font-mono animate-pulse">
                    DANGER
                  </div>
                </div>

                {/* Enhanced Glowing Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 blur-sm`}></div>
                
                {/* Content */}
                <div className="relative z-10 mt-8">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${colorClasses.gradient} rounded-xl flex items-center justify-center text-2xl shadow-xl`}
                      whileHover={{ 
                        rotate: 12,
                        scale: 1.2
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {track.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold tracking-wide text-white transition-all duration-300 group-hover:text-white game-text">
                        {track.title}
                      </h3>
                      <div className={`text-xs font-mono ${colorClasses.text} opacity-75`}>
                        SURVIVAL PROTOCOL
                      </div>
                    </div>
                  </div>

                  {/* Description - Centered */}
                  <p className="text-gray-300 mt-3 text-sm leading-relaxed group-hover:text-pink-200 transition-colors duration-500 text-justify">
                    {track.description}
                  </p>

                  {/* Risk Warning */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-red-400">HIGH RISK GAME</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Warning Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-center mt-20"
      >
        <div className="inline-block bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 animate-pulse"></div>
          <div className="relative z-10">
            <div className="text-6xl mb-4 text-white">👁️</div>
            <p className="text-white text-2xl font-bold mb-2 game-text">
              FINAL CHOICE AWAITS
            </p>
            <p className="text-pink-200 text-lg mb-6 font-mono">
              The stakes are absolute. Once you enter, there&#39;s no turning back.
            </p>
            
            <div className="mt-4 text-xs text-pink-200 font-mono opacity-75">
              Choose your path, accept your fate.
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono:wght@400&family=Orbitron:wght@400;700;900&display=swap");

        @keyframes glitch {
          0% { transform: skew(0deg) translateX(0); }
          10% { transform: skew(-5deg) translateX(-5px); }
          20% { transform: skew(5deg) translateX(5px); }
          30% { transform: skew(-3deg) translateX(-3px); }
          40% { transform: skew(3deg) translateX(3px); }
          50% { transform: skew(-2deg) translateX(-2px); }
          60% { transform: skew(2deg) translateX(2px); }
          70% { transform: skew(-1deg) translateX(-1px); }
          80% { transform: skew(1deg) translateX(1px); }
          90% { transform: skew(-0.5deg) translateX(-0.5px); }
          100% { transform: skew(0deg) translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes danger-pulse {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 20, 147, 0.5); }
          50% { box-shadow: 0 0 20px rgba(255, 20, 147, 0.8), 0 0 30px rgba(255, 20, 147, 0.6); }
        }

        .group:hover .game-text {
          animation: glitch 0.8s infinite alternate;
        }

        .game-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #ff0066;
          z-index: -1;
          animation: glitch-shadow 0.8s infinite alternate;
        }

        @keyframes glitch-shadow {
          0% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }

        .bg-black {
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
            #000000;
        }
      `}</style>
    </div>
  );
}