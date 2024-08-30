"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CgBrowser } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { VscSymbolInterface } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";

let interval: any;

type Card = {
  id: number;
  name: string;
  skillpoint: number;
  type: string;
  logo: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 5;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96 flex items-center justify-between">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-30 w-96 md:h-30 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.15] shadow-black/[0.1] dark:shadow-rose-500/[0.25] flex flex-row justify-between"
            style={{
              transformOrigin: "center center",
            }}
            animate={{
              // top: index * -CARD_OFFSET,
              // scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              transform: `translateY(${index * -CARD_OFFSET}px) scale(${
                1 - index * SCALE_FACTOR
              })`,
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex flex-row justify-between items-center">
              <span>
                {card.type == "web" ? (
                  <HiOutlineDesktopComputer  />
                ) : card.type == "mobile" ? (
                  <FaMobileAlt />
                ) : card.type == "code" ? (
                  <FaCode />
                ) : card.type == "api" ? (
                  <VscSymbolInterface />
                ) : (
                  <FaDatabase />
                )}
              </span>
              <div className="ml-2 font-semibold text-l text-neutral-700 dark:text-neutral-200">
                {card.name}
              </div>
            </div>

            {/* <div className="font-semibold text-xl text-neutral-700 dark:text-neutral-200">
              {card.name}
            </div> */}
            <div className="flex space-x-1 justify-center items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full ${
                    i < card.skillpoint ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div> */}
          </motion.div>
        );
      })}
    </div>
  );
};
