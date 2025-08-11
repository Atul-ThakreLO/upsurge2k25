import Image from "next/image";
import React from "react";

const EventCard = ({ poster, title, id, description, i }) => {
  return (
    <div key={i} className="relative flex flex-col text-white h-full">
      <Image
        src={poster}
        alt={id}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={80}
        loading="lazy"
        className="h-1/2! md:h-full! relative! md:absolute! border-b"
        // style={{ objectFit: "cover" }}
      />
      <div className="block md:block">
        <h2 className="text-xl pl-5 pt-3">{title}</h2>
        <p className="text-xs px-5 text-justify font-light">{description}</p>
      </div>
      <button className="absolute bottom-5 right-5 w-min px-3 py-1 bg-pink-700 hover:bg-pink-800 border-2 drop-shadow-[0_0_20px_#f72561] cursor-pointer border-pink-100 rounded-sm">
        Details
      </button>
    </div>
  );
};

export default EventCard;
