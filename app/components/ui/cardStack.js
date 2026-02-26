"use client";;
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
<div className="relative flex items-center justify-center px-4 sm:px-0 min-h-[350px] w-full">      {cards.map((card, index) => {
        return (
          <motion.div
  key={card.id}
  className="absolute
w-[90%] max-w-[420px]
h-auto min-h-[260px]
rounded-2xl p-6
bg-gradient-to-br from-neutral-900 to-neutral-800
border border-neutral-700
shadow-[0_15px_50px_rgba(0,0,0,0.6)]
flex flex-col gap-6
text-white
overflow-hidden"
  style={{ transformOrigin: "top center" }}
  animate={{
    top: index * -CARD_OFFSET,
    scale: 1 - index * SCALE_FACTOR,
    zIndex: cards.length - index,
  }}
>
  {/* Subtle Gradient Glow */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

  {/* Top Section */}
  <div className="flex items-center gap-4 relative z-10">
    <div className="relative w-12 h-12 shrink-0 rounded-xl bg-white/30 dark:bg-white/10 p-2 backdrop-blur-md">
      <Image
        src={card.logo}
        alt={card.name}
        
        className="object-contain rounded-full"
      />
    </div>

    <div>
      <p className="text-md font-semibold text-neutral-900 dark:text-white">
        {card.name}
      </p>
      <div className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1" />
    </div>
  </div>

  {/* Content Section */}
  <div className="relative z-10 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed pr-2">
    {card.content}
  </div>
</motion.div>
        );
      })}
    </div>
  );
};
