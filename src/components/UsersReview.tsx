"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import CryptoNation from "../assets/userReview/cryptoNation.jpg";
import CoinOdds from "../assets/userReview/coinOdds.jpg";
import CMCommunity from "../assets/userReview/cmCommunity.png";
import CryptoFanz from "../assets/userReview/cryptoFanz.jpg";
import WestSideForm from "../assets/userReview/westSideForum.jpg";

const people = [
  {
    id: 1,
    name: "Crypto Nation",
    designation: "@Oxnation",
    image: `${CryptoNation.src}`,
  },
  {
    id: 2,
    name: "Coins Odds",
    designation: "@KemkemCrypt",
    image: `${CoinOdds.src}`,
  },
  {
    id: 3,
    name: "CM Community",
    designation: "@CM_Community19",
    image: `${CMCommunity.src}`,
  },
  {
    id: 4,
    name: "Crypto Fanz",
    designation: "@_CryptoFanz",
    image: `${CryptoFanz.src}`,
  },
  {
    id: 5,
    name: "Westside Forum",
    designation: "@westsideForumM",
    image: `${WestSideForm.src}`,
  },
];

const UsersReview = () => {
  return (
    <div className="flex flex-row items-center justify-center  w-full h-10">
      <AnimatedTooltip items={people} />
    </div>
  );
};

export default UsersReview;
