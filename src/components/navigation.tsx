"use client";

import { useState, useEffect } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconCode, IconBriefcase, IconBrandGithub, IconMail, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function Navigation() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/#skills",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/#projects",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Open Source",
      link: "/#open-source",
      icon: <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  // Add theme toggle button to nav items
  const navItemsWithThemeToggle = [
    ...navItems,
    {
      name: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      link: '#',
      icon: theme === 'dark' ? (
        <IconSun className="h-4 w-4 text-neutral-500 dark:text-white" />
      ) : (
        <IconMoon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="fixed top-4 inset-x-0 z-50 px-4">
      <FloatingNav 
        navItems={navItemsWithThemeToggle} 
        className="max-w-4xl mx-auto"
      />
    </div>
  );
}
