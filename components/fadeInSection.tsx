import { useInView } from "react-intersection-observer";
import { useEffect, useState, ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode; // Using ReactNode for children
  direction?: "left" | "right" | "top" | "bottom"; // New prop for direction
  className?: string;
};

const FadeInSection = ({
  children,
  direction,
  className,
}: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it becomes visible
    threshold: 0.2, // 20% of the component should be visible to trigger
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Determine the translate classes based on direction
  const translateClass = () => {
    switch (direction) {
      case "right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10";
      case "top":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10";
      case "bottom":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10";
      case "left":
      default:
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${translateClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
