"use client";
import React from "react";
import NavBar from "@/app/ui/navbar/NavBar";
import { useMediaQuery } from "@/app/lib/hooks";
import IphoneHero from "@/app/ui/cards/IphoneHero";
import MacBookAirHero from "./ui/cards/MacBookAirHero";
import MediumCard from "./ui/cards/MediumCard";
import Footer from "./ui/footer/Footer";

export default function Home() {
  // Welcome page
  const [showInfo, setShowInfo] = React.useState(true);
  const [delayedShowPage, setDelayedShowPage] = React.useState(false);

  // Main page
  const [fadeIn, setFadeIn] = React.useState(false);
  const [expandMenu, setExpandMenu] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 828px)');

  // Show the main page after 500ms
  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
  
    if (!showInfo) {
      timeout = setTimeout(() => {
        setDelayedShowPage(true);
        setTimeout(() => {
          setFadeIn(true);
        }, 200); // short delay to trigger transition
      }, 500); // wait 300ms
    } else {
      setFadeIn(false);
      setDelayedShowPage(false);
    }
  
    return () => clearTimeout(timeout);
  }, [showInfo]);

  // Hide the menu when breaking point is reached
  React.useEffect(() => {
    setExpandMenu(false);
  }, [isDesktop]);

  const getAnimationClass = () => {
    if (expandMenu) {
      return "bg-(--hover-bg-navbar)";
    }
    if (isDesktop) {
      return "backdrop-blur-lg bg-white/50 delay-500";
    }
    return "backdrop-blur-lg bg-white/50 delay-255";
  }

  // Handle mouse enter and leave events for the navbar
  const handleMouseEnter = () => {
    setExpandMenu(true);
  }
  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setExpandMenu(false);
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className={`${showInfo ? "h-svh" : "h-0"} + duration-1000 ease-in-out`}>
        <div className={`h-full flex flex-col justify-around overflow-hidden text-center ${showInfo ? "opacity-100": "opacity-0"} duration-500 ease-in-out`}>
          <div className="text-2xl font-bold">
            Apple Clone With Next.js
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl font-bold cursor-pointer animate-(--zoom-in-out) hover:text-blue-900" onClick={(prev) => setShowInfo(!prev)}>
              Welcome to the Apple Clone
            </h1>
            <p className="text-lg text-gray-600">
              This is a simple clone of Apple's website using Next.js.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            © 2025 Truc Minh Nguyen. All rights reserved.
          </div>
        </div>
      </div>
      {delayedShowPage && 
      <div className={`h-lvh flex flex-col items-center transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <div className={`fixed w-full top-0 flex justify-center z-50 ${getAnimationClass()}`}
             onMouseLeave={handleMouseLeave}>
          <div className="container">
            <NavBar expandMenu={expandMenu} onMouseEnter={handleMouseEnter} setExpandMenu={setExpandMenu} isDesktop={isDesktop} />
          </div>
        </div>
        <div className={`w-full flex flex-col items-center gap-3 pt-10 duration-200 ${expandMenu && "blur-lg"}`}>
          {/* Main Content */}
          <div className="overflow-hidden w-full flex flex-col items-center gap-3">
            <IphoneHero />
            <MacBookAirHero />
            <div className="flex gap-3 flex-wrap justify-center w-full">
              <MediumCard appleIntel={false} descriptionPos={"end"} learnMore={"Learn More"} buy={""} title={"WWDC25"} noTitle={true} descriptions={["Apple Worldwide Developers Conference.", "Join us online June 9-13"]} imageUrl={"/promo_wwdc25__e4ew4e8nmaaa_large.jpg"} />
              <MediumCard appleIntel={false} descriptionPos={"start"} learnMore={"Learn More"} buy={"Buy"} title={"Watch"} icon={"apple_logo.svg"} descriptions={["Thinstant classic."]} imageUrl={"/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg"} />
              <MediumCard appleIntel={true} descriptionPos={"between"} learnMore={"Learn More"} buy={"Buy"} title={"iPad air"} descriptions={["Now supercharged by the M3 chip."]} imageUrl={"/promo_ipad_air__bfbxzvw65c02_large.jpg"} />
              <MediumCard appleIntel={false} descriptionPos={"start"} learnMore={"Learn More"} buy={"Apply now"} title={"Card"} icon={"apple_logo.svg"} descriptions={["Get up to 3% Daily Cash back", "with every purchase."]} imageUrl={"/promo_apple_card__5cm7draujpey_large.jpg"} />
            </div>
          </div>
          {/* Footer */}
          <div className="w-full bg-(--softBackground) flex items-center justify-center mt-10">
            <div className="container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}
