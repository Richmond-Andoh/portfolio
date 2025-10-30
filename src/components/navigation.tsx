"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconCode, IconBriefcase, IconBrandGithub, IconMail } from "@tabler/icons-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <>
      {/* Show regular navbar on mobile and when not scrolled */}
      <div className="block md:hidden">
        <Navbar />
      </div>
      
      {/* Show floating navbar on desktop when scrolled */}
      {isScrolled && (
        <div className="hidden md:block">
          <FloatingNav navItems={navItems} />
        </div>
      )}
      
      {/* Always show regular navbar on desktop when not scrolled */}
      <div className="hidden md:block">
        {!isScrolled && <Navbar />}
      </div>
    </>
  );
}
