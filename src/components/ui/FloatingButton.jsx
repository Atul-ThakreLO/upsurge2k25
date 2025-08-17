import React from "react";
import "../Events/EventCardButton.css";

const FloatingButton = ({
  text = "Home",
  hoverText = "Go",
  iconSrc = "/svg/back.svg",
  hoverIconSrc = "/gif/hand.jpg",
  link = "/",
}) => {
  const buttonContent = (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="white-sweep group relative flex items-center justify-center gap-2
                 px-3 py-2 rounded-xl border-2 border-zinc-700
                 bg-black/60 backdrop-blur-md text-pink-500 font-bold
                 text-sm overflow-hidden
                 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.7)]
                 hover:border-pink-500 transition-colors duration-300 ease-out cursor-pointer"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {/* Main Icon + text */}
        <span
          className="flex-shrink-0 transform transition-transform duration-500 ease-out
                   group-hover:translate-x-16 group-hover:scale-200 group-hover:opacity-0"
          style={{ transformOrigin: "center" }}
        >
          <img src={iconSrc} alt="icon" className="w-5 h-5" />
        </span>
        <span
          className="transition-all duration-500 ease-out
                   group-hover:-translate-x-full group-hover:opacity-0"
        >
          {text}
        </span>

        {/* Hover Text + Hover Icon inline */}
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-6
             opacity-0 -translate-x-full transition-all duration-500 ease-out
             group-hover:translate-x-0 group-hover:opacity-100 cursor-pointer"
        >
          <span className="pr-2 cursor-pointer">{hoverText}</span>
          <img
            src={hoverIconSrc}
            alt="hover icon"
            className="w-5 h-5 transform scale-100 transition-transform duration-500 ease-out group-hover:scale-[4] cursor-pointer"
            style={{ transformOrigin: "center" }}
          />
        </span>
      </button>
    </div>
  );

  return link ? (
    <a href={link}>
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default FloatingButton;
