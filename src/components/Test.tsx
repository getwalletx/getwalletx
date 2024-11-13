/* eslint-disable @next/next/no-img-element */
"use client";
import MaskContainer from "@/components/ui/svg-mask-effect";
import BGImage from "../assets/WebsiteBackgroundHeroSection.svg";
import { CTASection } from "./CTASection";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-full  w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={<CTASection />}
        className="h-full w-full bg-gradient-to-b from-gray-50 to-gray-100  "
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
