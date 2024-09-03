"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { FaGithub } from "react-icons/fa";

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
          "flex flex-row flex-wrap items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
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
              "relative px-4 py-2 mx-1 my-1 rounded-full dark:bg-zinc-700 dark:hover:bg-zinc-600",
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
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-500 border-2 border-zinc-100 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">
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
        className={cn("mt-16", contentClassName)}
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
            scale: 1 - idx * 0.15,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 30, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <div className="flex flex-col min-h-[50rem] w-full justify-between overflow-hidden relative rounded-2xl px-10 py-16 text-white bg-gradient-to-br from-slate-900 to-slate-600">
            <div>
              <p className="text-3xl font-semibold">{tab.title}</p>
              <p className="mt-0.5 text-slate-400">{tab.tag}</p>
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
              <p>{tab.content}</p>
              <br />
              {tab.features.length != 0 ? (
                <div>
                  <p>Some of the features and functions included are: </p>
                  {tab.features.map((feature, idx) => (
                    <p key={feature}>✔️ {feature}</p>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <hr className="border-t border-slate-500 my-4" />
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row flex-wrap">
                {tab.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    className="px-3 py-1 mx-1 rounded-full border-2 border-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-500 dark:hover:text-l"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mr-2">
                {tab.github != "" ? (
                  <a
                    href={tab.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-300 hover:text-white transition-colors duration-100"
                  >
                    <FaGithub />
                  </a>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
