"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

export const FloatingNav = ({
  className,
  navItems,
  ...props
}: {
  className?: string;
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
}) => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "flex max-w-fit mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/80 bg-white/80 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2 items-center justify-center space-x-6",
        className
      )}
      {...props}
    >
      {navItems.map((navItem: any, idx: number) => {
        const isThemeToggle = navItem.name.includes('Mode');
        
        return (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => {
              if (navItem.onClick) {
                e.preventDefault();
                navItem.onClick();
              }
            }}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-600 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors",
              isThemeToggle ? 'px-2 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''
            )}
          >
            <span className="block">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            {isThemeToggle && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </a>
        );
      })}
    </motion.div>
  );
};

// Add the cn utility if not already available
export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
