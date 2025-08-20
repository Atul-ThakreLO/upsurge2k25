import { motion } from "framer-motion";

export function ScheduleBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Main Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${"/home_schedule/squid_sign.webp"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-black/90" />

      {/* Animated Geometric Shapes */}
      <motion.div
        className="geometric-overlay top-20 left-10 w-16 h-16 border-2 border-squid-pink rounded-full"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.div
        className="geometric-overlay top-40 right-20 w-12 h-12 border-2 border-green-400"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />

      <motion.div
        className="geometric-overlay bottom-40 left-1/4 w-14 h-14 border-2 border-yellow-400"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="geometric-overlay top-1/3 right-1/3 w-20 h-20 border-2 border-squid-pink rounded-full"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />

      <motion.div
        className="geometric-overlay bottom-20 right-10 w-16 h-16 border-2 border-green-400"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}
