"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = [
    { name: "Get Started", href: "#get-started", icon: Home },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Testimonials", href: "#testimonials", icon: User },
    { name: "Blog", href: "#blog", icon: FileText },
    { name: "Team", href: "#team", icon: User },
  ];

  const DesktopNav = () => (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center">
        {/* Left section - Logo */}
        <div className="w-1/4">
          <a href="#" className="text-xl font-bold text-gray-800">
            WalletX
          </a>
        </div>

        {/* Center section - Navigation */}
        <div className="w-2/4 flex justify-center items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Right section - CTA Button */}
        <div className="w-1/4 flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
            Download
          </button>
        </div>
      </nav>
    </header>
  );

  const MobileNav = () => (
    <>
      <header className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
        <nav className="px-4 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-gray-800">
            WalletX
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 transform hover:rotate-180"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        <IconComponent size={24} />
                        <span className="text-sm font-medium">{item.name}</span>
                      </a>
                    );
                  })}
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
