export default function Section() {
  return (
    <div className="relative z-[40] w-full h-[100vh]"
     style={{
        backgroundImage: `linear-gradient(
          to bottom,
          #1d0800 0% 9%,
          #331400 9% 18%,
          #533008 18% 27%,
          #6b4107 27% 36%,
          #885504 36% 45%,
          #a86b02 45% 54%,
          #c68501 54% 63%,
          #e39f00 63% 72%,
          #ffcf07 72% 81%,
          #fec700 81% 90%,
          #ffd100 90% 100%)`
      }}>
        
      {/* Better color-matched top shadow */}
      <div className="absolute top-0 left-0 w-full h-32 z-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, #0c0a07, #120d08, #1a0f06, #220f04, transparent)"
        }} />
        {/* Smooth Burnt Fade to Yellow Section */}
<div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-20"
     style={{
       backgroundImage: "linear-gradient(to top, #1f1400 0%, transparent 100%)"
     }} />

    </div>
  );
}
