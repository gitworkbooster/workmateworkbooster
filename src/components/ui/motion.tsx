import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Animation variants for common patterns
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Motion container with stagger
interface MotionContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const MotionContainer = forwardRef<HTMLDivElement, MotionContainerProps>(
  ({ children, className, staggerDelay = 0.1, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
MotionContainer.displayName = "MotionContainer";

// Motion item for use within MotionContainer
interface MotionItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export const MotionItem = forwardRef<HTMLDivElement, MotionItemProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
MotionItem.displayName = "MotionItem";

// Animated heading with reveal effect
interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedHeading = ({ children, className, delay = 0 }: AnimatedHeadingProps) => (
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.h1>
);

// Hover card with lift effect
interface HoverCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn("card-elevated", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
);
HoverCard.displayName = "HoverCard";

// Scroll-triggered section wrapper
interface ScrollRevealProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
}

export const ScrollReveal = forwardRef<HTMLElement, ScrollRevealProps>(
  ({ children, className, ...props }, ref) => (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariants}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
);
ScrollReveal.displayName = "ScrollReveal";
