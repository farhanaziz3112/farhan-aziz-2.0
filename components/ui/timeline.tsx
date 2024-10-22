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
import FadeInSection from "@/components/fadeInSection";

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
        <div className="hidden lg:block">
          {data.map((item, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <div className="flex flex-row my-32">
                  <div className="sticky flex-1 flex-col md:flex-row z-40 items-center justify-end top-40 self-start">
                    <FadeInSection
                      direction="left"
                      className="flex flex-col items-end justify-end"
                    >
                      <h3 className="text-right hidden md:block text-xl md:text-xl text-neutral-500 dark:text-neutral-400 ">
                        {item.time}
                      </h3>
                      <p className="dark:text-neutral-400 my-1">at</p>
                      <h3 className="text-right md:text-3xl">{item.place}</h3>
                    </FadeInSection>
                  </div>
                  <div className="flex px-10 flex-col md:flex-row top-40 items-center justify-end sticky self-start z-40">
                    <div className="flex items-start justify-center">
                      <div className="ml-1 h-10 w-10 rounded-full border-2 border-black bg-neutral-100 dark:bg-slate-800 flex items-center justify-center ">
                        {item.type === "exp" ? (
                          <HiOutlineBriefcase className="text-xl" />
                        ) : (
                          <HiMiniAcademicCap className="text-xl" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.5] bg-grid-small-black/[0.8] relative">
                    <div className="absolute inset-0 pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
                    <div className="p-8">
                      <FadeInSection direction="right">
                        <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
                          <p className="text-base sm:text-2xl text-black mb-2 dark:text-neutral-200">
                            {item.title}
                          </p>

                          <p className="text-l text-neutral-600 dark:text-neutral-400">
                            {item.content}
                          </p>
                        </BackgroundGradient>
                      </FadeInSection>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row my-32">
                  <div className="flex-1 w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.5] bg-grid-small-black/[0.8] relative">
                    <div className="absolute inset-0 pointer-events-none dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
                    <div className="p-8">
                      <FadeInSection direction="left">
                        <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
                          <p className="text-base sm:text-2xl text-black mb-2 dark:text-neutral-200">
                            {item.title}
                          </p>

                          <p className="text-l text-neutral-600 dark:text-neutral-400">
                            {item.content}
                          </p>
                        </BackgroundGradient>
                      </FadeInSection>
                    </div>
                  </div>
                  <div className="flex px-10 flex-col md:flex-row top-40 items-center justify-end sticky self-start z-40">
                    <div className="flex items-start justify-center">
                      <div className="ml-1 h-10 w-10 rounded-full border-2 border-black bg-neutral-100 dark:bg-slate-800 flex items-center justify-center ">
                        {item.type === "exp" ? (
                          <HiOutlineBriefcase className="text-xl" />
                        ) : (
                          <HiMiniAcademicCap className="text-xl" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="sticky flex-1 flex-col md:flex-row z-40 items-center justify-end top-40 self-start">
                    <FadeInSection
                      direction="right"
                      className="flex flex-col items-start justify-start"
                    >
                      <h3 className="text-left hidden md:block text-xl md:text-xl text-neutral-500 dark:text-neutral-400 ">
                        {item.time}
                      </h3>
                      <p className="dark:text-neutral-400 my-1">at</p>
                      <h3 className="text-left md:text-3xl">{item.place}</h3>
                    </FadeInSection>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden sm:block lg:hidden">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row my-32">
                <div className="flex px-10 flex-row top-40 items-center justify-end sticky self-start z-40">
                  <div className="flex items-start justify-center">
                    <div className="sm:ml-1 h-5 w-5 sm:h-10 sm:w-10 rounded-full border-2 border-black bg-neutral-100 dark:bg-slate-800 flex items-center justify-center ">
                      {item.type === "exp" ? (
                        <HiOutlineBriefcase className="text-xs sm:text-xl" />
                      ) : (
                        <HiMiniAcademicCap className="text-xs sm:text-xl" />
                      )}
                    </div>
                  </div>
                </div>
                <FadeInSection
                  direction="right"
                  className="sticky max-w-[8rem] sm:max-w-[12rem] flex flex-col z-40 items-start justify-start top-40 self-start"
                >
                  <h3 className="text-left text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 ">
                    {item.time}
                  </h3>
                  <p className="dark:text-neutral-400 my-1 text-[10px] md:text-xs">
                    at
                  </p>
                  <h3 className="text-left text-[10px] md:text-xs whitespace-normal break-words">
                    {item.place}
                  </h3>
                </FadeInSection>
                <FadeInSection direction="right" className="flex-1 w-full">
                  <div className="p-8">
                    <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
                      <p className="text-xs sm:text-base md:text-lg text-black mb-2 dark:text-neutral-200">
                        {item.title}
                      </p>

                      <p className="text-[10px] sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                        {item.content}
                      </p>
                    </BackgroundGradient>
                  </div>
                </FadeInSection>
              </div>
            </div>
          ))}
        </div>
        <div className="block sm:hidden">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row my-32">
                <div className="flex px-10 flex-row top-40 items-center justify-end sticky self-start z-40">
                  <div className="flex items-start justify-center">
                    <div className="sm:ml-1 h-5 w-5 sm:h-10 sm:w-10 rounded-full border-2 border-black bg-neutral-100 dark:bg-slate-800 flex items-center justify-center ">
                      {item.type === "exp" ? (
                        <HiOutlineBriefcase className="text-xs sm:text-xl" />
                      ) : (
                        <HiMiniAcademicCap className="text-xs sm:text-xl" />
                      )}
                    </div>
                  </div>
                </div>
                <FadeInSection
                  direction="right"
                  className="flex flex-col w-full gap-y-10"
                >
                  <div className="flex flex-col z-20">
                    <h3 className="text-left text-[8px] lg-m:text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 ">
                      {item.time}
                    </h3>
                    <p className="dark:text-neutral-400 my-1 text-[8px] lg-m:text-[10px] md:text-xs">
                      at
                    </p>
                    <h3 className="text-left text-[8px] lg-m:text-[10px] md:text-xs whitespace-normal break-words">
                      {item.place}
                    </h3>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="pl-2 py-6 pr-8 sm:p-8">
                      <BackgroundGradient className="rounded-[22px] p-4 sm:p-8 bg-white dark:bg-zinc-900">
                        <p className="text-[10px] lg-m:text-xs sm:text-base md:text-lg text-black mb-2 dark:text-neutral-200">
                          {item.title}
                        </p>

                        <p className="text-[8px] lg-m:text-[10px] sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                          {item.content}
                        </p>
                      </BackgroundGradient>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-12 sm:left-16 lg:left-1/2 transform translate-x-1/2 top-0 overflow-hidden w-[2px] bg-neutral-300 dark:bg-neutral-700 items-center justify-center"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[10px] bg-gradient-to-b from-cyan-900 via-teal-700 to-blue-800 from-[0%] via-[40%] rounded-full items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};
