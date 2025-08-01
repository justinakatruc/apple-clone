"use client";
import React from "react";
import IphoneHero from "@/app/ui/cards/IphoneHero";
import MacBookAirHero from "@/app/ui/cards/MacBookAirHero";
import WelcomeCard from "@/app/ui/cards/WelcomCard";
import MediumCards from "@/app/ui/cards/MediumCards";
import { useNavBar } from "@/app/context/NavBarContext";
import Footer from "./ui/footer/Footer";

export default function Home() {
  // Welcome page
  const { expandMenu } = useNavBar();
  const [showInfo, setShowInfo] = React.useState(true);
  const [delayedShowPage, setDelayedShowPage] = React.useState(false);

  // Main page
  const [fadeIn, setFadeIn] = React.useState(false);

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

  return (
    <>
      <WelcomeCard showInfo={showInfo} setShowInfo={setShowInfo} />
      {delayedShowPage && 
      <div className={`h-lvh flex flex-col items-center transition-opacity duration-500 mt-11 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <div className={`w-full flex flex-col items-center gap-3 duration-200 ${expandMenu && "blur-lg"}`}>
          {/* Main Content */}
          <div className="overflow-hidden w-full flex flex-col items-center gap-3">
            <IphoneHero />
            <MacBookAirHero />
            <MediumCards products={["wwdc", "watch", "ipad-air", "card"]} />
          </div>
          {/* Footer */}
          <Footer type="home" />
        </div>
      </div>
      }
    </>
  );
}
