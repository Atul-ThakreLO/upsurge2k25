"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const StaticMoneyPile = () => {
  const [moneyNotes, setMoneyNotes] = useState([]);

  useEffect(() => {
    const notes = Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      bottom: Math.random() * 6,
      rotate: Math.random() * 40 - 20,
    }));
    setMoneyNotes(notes);
  }, []);

  return (
    <div className="h-[6vh] w-full pointer-events-none absolute bottom-[-3vh]">
      {moneyNotes.map(({ id, left, bottom, rotate }) => (
        <Image
          key={id}
          src="/img/korean-money.png"
          alt="Money"
          width={80}
          height={80}
          className="absolute object-contain"
          style={{
            left: `${left}%`,
            bottom: `${bottom}vh`,
            transform: `rotate(${rotate}deg)`,
            // height: "auto",
            // width: "auto",
          }}
        />
      ))}
    </div>
  );
};

export default StaticMoneyPile;
