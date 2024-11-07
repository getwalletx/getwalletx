"use client";

import { useState } from "react";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "./motion-ui/Disclosure";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type DisclosureCardProps = {
  title: string;
  description: string;
  cta: string;
  link: string;
  image: StaticImageData;
};

const DisclosureCard = ({
  image,
  title,
  description,
  cta,
  link,
}: DisclosureCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: "blur(0px)" },
    expanded: { scale: 1.1, filter: "blur(3px)" },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className="relative h-[350px] w-[290px] overflow-hidden rounded-xl">
      <div onClick={() => setIsOpen(!isOpen)}>
        <motion.img
          src={image.src}
          alt="Les others studio - Que la montagne est belle ⛰"
          className="pointer-events-none h-auto w-full select-none bg-red-500"
          animate={isOpen ? "expanded" : "collapsed"}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className="absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50"
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className="w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className="flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700">
            <p>How beautiful the mountain is 🗻</p>
            <p className="line-clamp-3">{description}</p>
            <button
              onClick={() => window.open(link, "_blank")}
              className="mt-3 w-full rounded-[4px] border border-zinc-700 bg-zinc-900 px-4 py-1 text-zinc-50 transition-colors duration-300 hover:bg-zinc-800"
              type="button"
            >
              {cta}
            </button>
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
};

export default DisclosureCard;
