"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  content,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  content?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("translate(0%,0%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(0%,0%) rotateX(20deg) scale(0.9)");
  };
  const onMouseLeave = () => {
    setTransform("translate(0%,0%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin cursor-pointer w-full flex",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="hidden sm:block w-full flex p-2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="p-4 w-full flex justify-start items-start rounded-2xl shadow-[0_1px_4px_rgb(0_0_0/0.4)] bg-white border-neutral-300 dark:bg-black border dark:border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative ", className)}>{children}</div>
        </div>
      </div>
      <div
        className="block sm:hidden w-full flex p-2"
      >
        <div
          className="p-2 w-full flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] hover:bg-neutral-200 bg-white border-neutral-300 hover:dark:bg-neutral-900 dark:bg-black border dark:border-white/[0.1] overflow-hidden"
        >
          <div className={cn(" relative ", className)}>{children}</div>
        </div>
      </div>
      <div className="hidden sm:block">
        <PinPerspective title={title} href={href} content={content} />
      </div>
    </Link>
  );
};

export const PinPerspective = ({
  title,
  content,
  href,
}: {
  title?: string;
  content?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <span className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {content}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-sky-700/0 via-sky-700/90 to-sky-700/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </span>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[8rem] w-[8rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[8rem] w-[8rem] rounded-[50%] bg-red-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[8rem] w-[8rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-1/2 group-hover/pin:h-1/2 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-1/2 group-hover/pin:h-1/2  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
