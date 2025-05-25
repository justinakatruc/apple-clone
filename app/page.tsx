"use client";
import React from "react";
import NavBar from "@/app/ui/navbar/NavBar";
import { useMediaQuery } from "@/app/lib/hooks";
import IphoneHero from "@/app/ui/cards/IphoneHero";
import MacBookAirHero from "./ui/cards/MacBookAirHero";
import Footer from "./ui/footer/Footer";
import WelcomeCard from "./ui/cards/WelcomCard";
import MediumCards from "./ui/cards/MediumCards";

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
      <WelcomeCard showInfo={showInfo} setShowInfo={setShowInfo} />
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
            <MediumCards products={["wwdc", "watch", "ipad-air", "card"]}/>
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
