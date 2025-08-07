"use client";

import React from "react";

import DetailHero from "@/app/ui/cards/DetailHero";

function Iphone16Pro() {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');

    return () => {
      // Clean up when navigating away
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);
  return (
    <div>
      <DetailHero
        bannerText="Get $160–$600 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher."
        itemName="iPhone 16 Pro"
        buttonText="Buy"
        itemPrice="From $999 or $41.62/mo. for 24 mo."
        imageUrl={["https://www.apple.com/v/iphone-16-pro/f/images/overview/welcome/hero_endframe__b3cjfkquc2s2_large.jpg", "https://www.apple.com/v/iphone-16-pro/f/images/overview/welcome/hero_apple_intelligence_headline__fwxxapju9a6i_xlarge.png"]}
        primaryColor="#000000"
        secondaryColor="#201c1c"
      />
    </div>
  );
}

export default Iphone16Pro;