/* eslint-disable react/jsx-key */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    skillpoint: number;
    type: string;
    logo: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 lg-m:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          className="relative group block p-1 sm:p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={item.id}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div
            className={cn(
              "rounded-xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-2 border-neutral-400 dark:border-white/[0.3] sm:group-hover:border-slate-500 relative",
              className
            )}
          >
            <div className="relative">
              <div className="p-2 lg:p-4 flex flex-col items-center justify-center">
                <span className="text-xl lg-m:text-3xl lg:text-5xl">
                  {item.logo}
                </span>
                <span
                  className={cn(
                    "text-[8px] lg-m:text-[10px] lg:text-base text-black font-bold text-center tracking-wide mt-4 dark:text-white sm:dark:text-slate-400 sm:dark:group-hover:text-white",
                    className
                  )}
                >
                  {item.name}
                </span>
                <div className="hidden sm:block">
                  <div className="mt-2 flex space-x-1 justify-center items-center">
                    {hoveredIndex === idx ? (
                      Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-1.5 rounded-full ${
                            i < item.skillpoint ? "bg-blue-500" : "bg-gray-300"
                          }`}
                        />
                      ))
                    ) : (
                      <span className="h-1.5 w-1.5"></span>
                    )}
                  </div>
                </div>
                <div className="block sm:hidden mt-2 flex space-x-1 justify-center items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full ${
                        i < item.skillpoint ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <Card>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card> */}
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-black border border-2 border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative",
        className
      )}
    >
      <div className="relative">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
