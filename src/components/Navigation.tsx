"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FileText,
  // Sun,
  // Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // setIsDark(
    //   localStorage.theme === "dark" ||
    //     (!("theme" in localStorage) &&
    //       window.matchMedia("(prefers-color-scheme: dark)").matches)
    // );

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const toggleDarkMode = () => {
  //   const newDarkMode = !isDark;
  //   setIsDark(newDarkMode);
  //   localStorage.theme = newDarkMode ? "dark" : "light";
  //   document.documentElement.classList.toggle("dark", newDarkMode);
  // };

  const handleNavigation = (href: string) => {
    if (href === "/blogs") {
      // For blog page, use normal navigation
      window.location.href = href;
    } else {
      // For section navigation, first ensure we're on the home page
      if (window.location.pathname !== "/") {
        window.location.href = `/${href}`;
      } else {
        // If already on home page, smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: "Get Started", href: "#get-started", icon: Home },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Testimonials", href: "#testimonials", icon: User },
    { name: "Blog", href: "/blogs", icon: FileText },
    { name: "Team", href: "#team", icon: User },
  ];

  // const DarkModeButton = () => (
  //   <button
  //     onClick={toggleDarkMode}
  //     className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
  //     aria-label="Toggle dark mode"
  //   >
  //     {isDark ? <Sun size={20} /> : <Moon size={20} />}
  //   </button>
  // );

  const DesktopNav = () => (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-200">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center">
        <div className="w-1/4">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 dark:text-white"
          >
            WalletX
          </Link>
        </div>

        <div className="w-2/4 flex justify-center items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        <div className="w-1/4 flex justify-end items-center space-x-4">
          {/* <DarkModeButton /> */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
            Download
          </button>
        </div>
      </nav>
    </header>
  );

  const MobileNav = () => (
    <>
      <header className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-200">
        <nav className="px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 dark:text-white"
          >
            WalletX
          </Link>

          <div className="flex items-center space-x-4">
            {/* <DarkModeButton /> */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: "100%" }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 rounded-t-3xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-8">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className={`flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1`}
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        <IconComponent size={24} />
                        <span className="text-sm font-medium">{item.name}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 transform hover:rotate-180"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navigation;
