"use client";
import MaskContainer from "@/components/ui/svg-mask-effect";
import BGImage from "../assets/WebsiteBackgroundHeroSection.svg";
import Image from "next/image";
import HeroSection from "./HeroSection";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-full min-h-[100vh] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <HeroSection />
        }
        className="h-full w-full border rounded-md "
      >
        <img
          src={BGImage.src}
          alt="header"
          className="h-full min-w-full   object-cover rounded-sm bg-no-repeat z-10"
        />
      </MaskContainer>
    </div>
  );
}
