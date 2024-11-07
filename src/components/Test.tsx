"use client";
import MaskContainer from "@/components/ui/svg-mask-effect";
import BGImage from "../assets/Website Background Hero Section.svg";
import Image from "next/image";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-full w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <div className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold h-screen  w-screen">
            <p>WalletX</p>
          </div>
        }
        className="h-full w-full border rounded-md"
      >
        <img
          src={BGImage.src}
          alt="header"
          className="h-full min-w-full   object-cover rounded-sm bg-no-repeat"
        />
      </MaskContainer>
    </div>
  );
}
