/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BackgroundGradient } from "./background-gradient";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { HiMiniAcademicCap } from "react-icons/hi2";

interface TimelineEntry {
  time: string;
  title: string;
  place: string;
  content: React.ReactNode;
  type: string;
}

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full bg-white dark:bg-black font-sans md:px-10 robotoMono ${robotoMono.className}`}
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              // <div className="flex flex-row">
              //   <div className="flex-1 bg-blue-500">{item.title}</div>
              //   <div className="flex-1 bg-green-500">{item.content}</div>
              // </div>
              <div className="flex flex-row my-32">
                <div className="sticky flex-1 flex-col md:flex-row z-40 items-center justify-end top-40 self-start">
                  <div className="flex flex-col items-end justify-end">
                    <h3 className="text-right hidden md:block text-xl md:text-xl text-neutral-500 dark:text-neutral-400 ">
                      {item.time}
                    </h3>
                    <p className="dark:text-neutral-400 my-1">at</p>
                    <h3 className="text-right md:text-3xl">{item.place}</h3>
                  </div>
                </div>
                <div className="flex-1 flex-col md:flex-row top-40 items-center justify-end sticky self-start z-40">
                  <div className="flex items-start justify-center">
                    <div className="ml-1 h-10 w-10 rounded-full border-2 border-white bg-white dark:bg-slate-800 flex items-center justify-center ">
                      {/* <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" /> */}
                      {item.type === "exp" ? (
                        <HiOutlineBriefcase className="text-xl" />
                      ) : (
                        <HiMiniAcademicCap className="text-xl" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.5] bg-grid-small-black/[0.2] relative">
                  <div className="absolute inset-0 pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
                  <div className="p-8">
                    <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
                      {/* <Image
                        src={`/coding.jpg`}
                        alt="jordans"
                        height="200"
                        width="200"
                        className="object-contain"
                      /> */}
                      <p className="text-base sm:text-2xl text-black mb-2 dark:text-neutral-200">
                        {item.title}
                      </p>

                      <p className="text-l text-neutral-600 dark:text-neutral-400">
                        {item.content}
                      </p>
                    </BackgroundGradient>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-row my-32">
                <div className="flex-1 w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.5] bg-grid-small-black/[0.2] relative">
                  <div className="absolute inset-0 pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
                  <div className="p-8">
                    <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
                      {/* <Image
                        src={`/coding.jpg`}
                        alt="jordans"
                        height="200"
                        width="200"
                        className="object-contain"
                      /> */}
                      <p className="text-base sm:text-2xl text-black mb-2 dark:text-neutral-200">
                        {item.title}
                      </p>

                      <p className="text-l text-neutral-600 dark:text-neutral-400">
                        {item.content}
                      </p>
                    </BackgroundGradient>
                  </div>
                </div>
                <div className="flex-1 flex-col md:flex-row top-40 items-center justify-end sticky self-start z-40">
                  <div className="flex items-start justify-center">
                    <div className="ml-1 h-10 w-10 rounded-full border-2 border-white bg-white dark:bg-slate-800 flex items-center justify-center ">
                      {/* <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" /> */}
                      {item.type === "exp" ? (
                        <HiOutlineBriefcase className="text-xl" />
                      ) : (
                        <HiMiniAcademicCap className="text-xl" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="sticky flex-1 flex-col md:flex-row z-40 items-center justify-end top-40 self-start">
                  <div className="flex flex-col items-start justify-start">
                    <h3 className="text-left hidden md:block text-xl md:text-xl text-neutral-500 dark:text-neutral-400 ">
                      {item.time}
                    </h3>
                    <p className="dark:text-neutral-400 my-1">at</p>
                    <h3 className="text-left md:text-3xl">{item.place}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 transform translate-x-1/2 top-0 overflow-hidden w-[2px] bg-neutral-700 items-center justify-center"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="z-10 absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-cyan-900 via-teal-700 to-blue-800 from-[0%] via-[40%] rounded-full items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};
