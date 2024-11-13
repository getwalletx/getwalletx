"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import useSound from "use-sound";
// import { useMute } from "../components/MuteContext";

// import smack from "../assets/sounds/smack.wav";

import awaitHighFi from "../assets/icons/await_highfi.svg";
import customGrab from "../assets/cursors/cursor_grab.svg";
import customGrabbing from "../assets/cursors/cursor_grabbing.svg";

const TeamMember = ({ name, image, twitter, linkedin, designation }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [highFi, setHighFi] = useState(false);
  const teamMemberRef = useRef(null);
  const [cursor, setCursor] = useState(customGrab);
  // const { isMuted } = useMute();
  // const [playBack] = useSound(smack, { volume: 0.25 });

  const handleMouseMove = (e) => {
    if (teamMemberRef.current) {
      const rect = teamMemberRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleHighFi = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // !isMuted && playBack();
    setHighFi(true);
    setTimeout(() => {
      setHighFi(false);
    }, 500);
  };

  useEffect(() => {
    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div className="flex flex-col items-center justify-center w-fit max-w-[200px] h-full select-none relative">
      <div className="relative min-h-[50px] h-full max-h-[300px]  rounded-xl flex justify-center items-center">
        <div className="absolute h-full w-full overflow-hidden ">
          <motion.div
            className="bg-[#9d6cff] rounded-full opacity-20 h-[95%] w-[95%]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.2,
              scale: 1,
            }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              delay: 0.2,
              duration: 0.6,
            }}
          />
        </div>
        <motion.div
          ref={teamMemberRef}
          className="  relative min-h-[50px] h-full flex rounded-xl max-h-[170px] sm:max-h-[300px] backdrop-filter backdrop-blur-xl bg-opacity-10 bg-gray-100 hover:bg-opacity-55 hover:bg-[#fab068] transition duration-700 group hide-cursor "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTap={() => setIsHovering(true)}
          onMouseDown={() => setCursor(customGrabbing)}
          onMouseUp={() => setCursor(customGrab)}
        >
          {isHovering && (
            <>
              <Image
                alt="Await-Highfi"
                src={cursor}
                className="custom-cursor absolute translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
                style={{
                  left: `${mousePosition.x - 50}px`,
                  top: `${mousePosition.y}px`,
                }}
              />
              <Image
                src={awaitHighFi}
                alt="Await-Highfi"
                className={`absolute top-3 left-1 h-12 w-auto select-none z-50 ${
                  highFi ? "-rotate-45" : ""
                } transition-all duration-200`}
                onClick={() => {
                  handleHighFi();
                }}
                onMouseDown={() => setCursor(customGrabbing)}
                onMouseUp={() => setCursor(customGrab)}
                draggable={false}
              />
              {highFi && (
                <motion.div
                  className="absolute -top-12 -left-12 h-36 w-36 select-none bg-[#9d6cff] rounded-full bg-opacity-50"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.2,
                  }}
                >
                  <motion.div
                    className="absolute top-[43px] left-7 h-10 w-[2px] bg-white rounded-xl"
                    initial={{ x: 20, y: 10, opacity: 0, rotate: 110 }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      delay: 0.1,
                      duration: 0.3,
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-[12px] left-[60px] h-10 w-[2px] bg-white rounded-xl"
                    initial={{ x: 20, y: 10, opacity: 0, rotate: 158 }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      delay: 0.1,
                      duration: 0.3,
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-6 left-10 h-10 w-[2px] bg-white rounded-xl"
                    initial={{ x: 20, y: 10, opacity: 0, rotate: 135 }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      delay: 0.1,
                      duration: 0.3,
                    }}
                  ></motion.div>
                </motion.div>
              )}
            </>
          )}
          <div className="relative min-h-[50px] pt-12 h-full flex rounded-xl max-h-[170px] sm:max-h-[300px] overflow-hidden">
            <Image
              src={image}
              alt={name}
              className="object-cover select-none rounded-xl scale-110 group-hover:scale-125  grayscale group-hover:grayscale-0 transition-all duration-300"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="w-full text-white md:text-lg text-sm font-medium font-montserrat text-left mt-2 flex-shrink-0"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {name}
      </motion.div>
      <motion.div
        className="w-full text-white text-[0.5rem] md:text-xs font-montserrat line-clamp-1 flex-shrink-0"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {designation}
      </motion.div>
      <motion.div
        className="w-full flex gap-3 mt-1 text-white text-[0.5rem] md:text-xs underline font-montserrat flex-shrink-0"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link
          href={linkedin}
          target="_blank"
          className="hover:bg-[#fab068] transition duration-700 px-1"
        >
          LinkedIn
        </Link>
        <Link
          href={twitter}
          target="_blank"
          className="hover:bg-[#fab068] transition duration-700 px-1"
        >
          Twitter
        </Link>
      </motion.div>
    </div>
  );
};

export default TeamMember;
