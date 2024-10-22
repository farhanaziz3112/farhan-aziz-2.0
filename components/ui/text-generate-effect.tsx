"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import FadeInSection from "@/components/fadeInSection";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  let wordsArray = words.split(/\r\n\r\n|\r\r/);

  const [isVisible, setIsVisible] = useState(false); // Track if the component is visible
  const sectionRef = useRef<HTMLDivElement>(null); // Create a ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  });

  useEffect(() => {
    if (isVisible) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isVisible, scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((line, idx) => (
          <div key={idx} className="line-block">
            {line.split(" ").map((word, wordIdx) => (
              <motion.span
                key={word + wordIdx}
                className="dark:text-white text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
            {idx !== wordsArray.length - 1 && (
              <>
                <div className="h-4 sm:h-6 md:h-8"></div>{" "}
              </>
            )}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <FadeInSection direction="right">
      <div className={cn(className)} ref={sectionRef}>
        <div className="mt-4">
          <div className=" dark:text-white text-black text-[10px] sm:text-sm md:text-lg lg:text-2xl leading-snug tracking-wide">
            {isVisible && renderWords()}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};
