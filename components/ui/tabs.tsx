"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { FaGithub } from "react-icons/fa";
import FadeInSection from "@/components/fadeInSection";

type Tab = {
  tag: string;
  title: string;
  value: string;
  content?: string;
  features: string[];
  images: string[];
  skills: string[];
  github: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row flex-wrap items-center justify-center sm:justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-2 py-1 mx-0.5 my-0.5 sm:px-4 sm:py-2 sm:mx-1 sm:my-1 rounded-full border-2 border-zinc-300 dark:border-0 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-300 border-2 border-black dark:bg-zinc-500 dark:border-2 dark:border-zinc-100 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-[10px] sm:text-sm lg:text-base text-black dark:text-white">
              {tab.tag}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-10 sm:mt-16", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.05,
            top: hovering ? idx * -15 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 30, 0] : 0,
            height: isActive(tab) ? "auto" : 10,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <div className="flex flex-col min-h-[20rem] sm:min-h-[50rem] w-full justify-between overflow-hidden relative rounded-2xl px-4 sm:px-10 py-8 sm:py-10 lg:py-16 bg-white border-2 border-neutral-700 dark:border-neutral-800 text-black dark:text-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-600">
            <div>
              <p className="text-[10px] sm:text-xl lg:text-3xl font-semibold">
                {tab.title}
              </p>
              <p className="text-[10px] sm:text-sm lg:text-base mt-0.5 text-slate-600 dark:text-slate-400">
                {tab.tag}
              </p>
            </div>
            <InfiniteMovingCards
              item={{
                name: tab.title,
                images: tab.images,
              }}
              direction="right"
              speed="slow"
            />
            <div>
              <p className="text-[8px] sm:text-sm lg:text-base">
                {tab.content}
              </p>
              <br />
              {tab.features.length != 0 ? (
                <div className="text-[8px] sm:text-sm lg:text-base">
                  <p>Some of the features and functions included are: </p>
                  {tab.features.map((feature, idx) => (
                    <p key={feature}>✔️ {feature}</p>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            {isActive(tab) && (
              <>
                <hr className="border-t border-slate-500 my-2 lg:my-4" />
                <div className="flex flex-row w-full justify-between">
                  <div className="flex flex-row flex-wrap">
                    {tab.skills.map((skill, idx) => (
                      <span
                        key={skill}
                        className="text-[8px] sm:text-sm lg:text-base px-2 mx-0.5 my-0.5 sm:px-3 sm:py-1 sm:mx-1 sm:my-1 rounded-full border-2 border-zinc-500 bg-neutral-100 hover:bg-neutral-300 dark:bg-zinc-700 dark:hover:bg-zinc-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="ml-2  mr-2">
                    {tab.github != "" ? (
                      <a
                        href={tab.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl md:text-4xl text-black hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors duration-100"
                      >
                        <FaGithub />
                      </a>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
