const FAQBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Playing Card Pattern */}
      <div className="absolute top-10 left-10 w-20 h-28 bg-gradient-to-br from-card to-secondary rounded-lg border border-primary/30 transform rotate-12">
        <div className="absolute top-3 left-3">
          <div className="w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-primary"></div>
        </div>
        <div className="absolute bottom-3 right-3 transform rotate-180">
          <div className="w-0 h-0 border-l-3 border-r-3 border-b-4 border-l-transparent border-r-transparent border-b-primary"></div>
        </div>
      </div>

      {/* Multiple Playing Cards */}
      <div className="absolute top-32 right-16 w-18 h-24 bg-gradient-to-br from-secondary to-card rounded-lg border border-accent/30 transform -rotate-6">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-primary"></div>
      </div>

      <div className="absolute bottom-20 left-16 w-18 h-24 bg-gradient-to-br from-card to-secondary rounded-lg border border-primary/30 transform rotate-18">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent"></div>
      </div>

      {/* Game Board Pattern */}
      <div className="absolute top-1/4 left-1/4 grid grid-cols-3 gap-1 opacity-20">
        <div className="w-8 h-8 bg-primary/40 rounded"></div>
        <div className="w-8 h-8 bg-card/60 rounded"></div>
        <div className="w-8 h-8 bg-accent/40 rounded"></div>
        <div className="w-8 h-8 bg-card/60 rounded"></div>
        <div className="w-8 h-8 bg-primary/40 rounded"></div>
        <div className="w-8 h-8 bg-card/60 rounded"></div>
        <div className="w-8 h-8 bg-accent/40 rounded"></div>
        <div className="w-8 h-8 bg-card/60 rounded"></div>
        <div className="w-8 h-8 bg-primary/40 rounded"></div>
      </div>

      {/* Geometric Game Symbols */}
      <div className="absolute top-40 right-1/4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-primary/60"></div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-20">
        <div className="w-12 h-12 bg-accent/30 transform rotate-45 border border-accent/50"></div>
      </div>

      {/* Question Mark Pattern */}
      <div className="absolute top-60 left-1/3 text-8xl font-bold text-primary/10 select-none">
        ?
      </div>

      <div className="absolute bottom-40 right-1/3 text-6xl font-bold text-accent/10 select-none">
        ?
      </div>

      {/* Card Stack Effect */}
      <div className="absolute top-1/2 right-10">
        <div className="relative">
          <div className="w-16 h-22 bg-card/40 rounded-lg border border-primary/20 transform rotate-3"></div>
          <div className="absolute inset-0 w-16 h-22 bg-secondary/40 rounded-lg border border-accent/20 transform -rotate-2 translate-x-1 translate-y-1"></div>
          <div className="absolute inset-0 w-16 h-22 bg-card/40 rounded-lg border border-primary/20 transform rotate-1 translate-x-2 translate-y-2"></div>
        </div>
      </div>

      {/* Floating Numbers */}
      <div className="absolute top-16 left-1/2 text-4xl font-bold text-primary/15 select-none animate-pulse">
        01
      </div>

      <div className="absolute bottom-16 left-1/4 text-3xl font-bold text-accent/15 select-none animate-pulse">
        07
      </div>

      {/* Game Piece Symbols */}
      <div className="absolute top-80 left-20 flex flex-col gap-2">
        <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-primary/40"></div>
        <div className="w-8 h-8 rounded-full border-2 border-accent/40"></div>
        <div className="w-8 h-8 bg-primary/40"></div>
      </div>

      {/* Additional Card Elements */}
      <div className="absolute bottom-60 right-1/2 w-14 h-20 bg-gradient-to-br from-secondary/50 to-card/40 rounded-lg border border-primary/25 transform rotate-8">
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-primary/60"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-accent/60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-primary/50">
          Q
        </div>
      </div>
    </div>
  );
};

export default FAQBackground;
