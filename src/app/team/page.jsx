"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import useSound from "use-sound";
// import mainPage from "../../assets/sounds/mainPage.wav";
// import { useMute } from "../../components/MuteContext";

import team from "../../constants/team";
import TeamMember from "../../components/TeamMember";
import IllustrationGravityBox from "../../components/IllustrationGravityBox";
import back from "../../assets/icons/back.svg";
import logo from "../../assets/logo.png";

const TeamPage = () => {
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  // const [playBack] = useSound(mainPage, { volume: 0.25 });
  // const { isMuted } = useMute();
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const reorderTeam = (team) => {
    if (screenWidth < 768) {
      return [team[0], team[1], team[4], team[5], team[2], team[3], team[6]];
    }
    return team;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      scrollContainer.classList.add("cursor-grabbing");
      scrollContainer.classList.remove("cursor-grab");

      startX.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;

      scrollContainer.style.scrollBehavior = "auto";
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      scrollContainer.classList.remove("cursor-grabbing");
      scrollContainer.classList.add("cursor-grab");

      scrollContainer.style.scrollBehavior = "smooth";
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUp);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  return (
    <div className="max-h-screen h-[100dvh] w-screen bg-gradient relative flex flex-col items-center justify-between pt-16 sm:pt-28">
      <Link href="/">
        <Image
          src={back}
          alt="back"
          className="absolute top-5 left-5 w-10 h-10 select-none cursor-pointer opacity-40"
          // onClick={() => {
          //   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          //   !isMuted && playBack();
          // }}
        />
      </Link>
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="absolute top-6 left-1/2 -translate-x-1/2 w-36 h-fit select-none"
        />
      </Link>
      <div className="text-white text-xl sm:text-2xl md:text-4xl ">
        Meet our team!
      </div>

      <div
        ref={scrollContainerRef}
        className="relative w-full overflow-x-scroll overflow-y-visible hide-scrollbar pt-12 sm:pt-12 sm:pb-7 md:pt-16 md:pb-10 "
      >
        <div className="w-[190%] md:w-[150%] grid grid-cols-4 gap-5 md:grid-cols-10 md:gird-row-1 px-10 md:pl-60 ">
          {reorderTeam(team).map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              image={member.image}
              twitter={member.twitter}
              linkedin={member.linkedin}
              designation={member.designation}
            />
          ))}
        </div>
      </div>

      <IllustrationGravityBox />
    </div>
  );
};

export default TeamPage;
