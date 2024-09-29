"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
Image;

export const InfiniteMovingCards = ({
  item,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  item: {
    name: string;
    images: string[];
  };
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {item.images.map((img, idx) => (
          <li
            className="overflow-hidden h-[100px] lg-m:h-[150px] sm:h-[200px] lg:h-[300px] w-auto relative rounded-md flex-shrink-0"
            key={img}
          >
            <blockquote className="h-full w-auto">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute"
              ></div>
              <div className="relative z-20 flex flex-row items-center h-full w-auto">
                <img
                  src={`/${img}`}
                  alt={`${item.name}`}
                  width="1000"
                  height="1000"
                  // layout="fill"
                  className="object-cover rounded h-full w-auto"
                  loading="lazy"
                />
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
