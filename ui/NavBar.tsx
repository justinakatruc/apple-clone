"use client";

import React from "react";
import NavButton from "./NavButton";
interface itemsLists {
  name: string;
  items: {
    category: string;
    subItems: string[];
    subItemsLinks?: string[];
    utils?: string[];
  }[];
}
const itemsLists : itemsLists[] = [
  {
    name: "Store",
    items: [
      {
        category: "Shop",
        subItems: ["Shop the Latest", "Mac", "iPad", "iPhone", "Apple Watch", "Apple Vision Pro", "Accessories"],
        subItemsLinks: ["shop/store", "shop/buy-mac", "shop/buy-ipad", "shop/buy-iphone", "shop/buy-watch", "shop/buy_vision", "shop/accessories/all"],
      },
      {
        category: "Quick Links",
        subItems: ["Find a Store", "Order Status", "Apple Trade In", "Financing", "Personal Setup"],
        subItemsLinks: ["retail", "shop/order/list", "shope/trade-in", "shop/browse/finance/instant_credit", "shop/personal_setup"],
      },
      {
        category: "Shop Special Stores",
        subItems: ["Certified Refurbished", "Education", "Business", "Veterans and Military", "Government"],
        subItemsLinks: ["shop/refurbished", "shop/browse/education_routing", "shop/retail/business", "shop/browse/home/veterans_military", "r/store/government"],
      },
    ],
  },
  { 
    name: "Mac", 
    items: [
      {
        category: "Explore Mac",
        subItems: ["Explore Mac", "MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "Displays"],
        utils: ["Compare Mac", "Switch from PC to Mac"],
        subItemsLinks: ["mac", "macbook-air", "macbook-pro", "imac", "mac-mini", "mac-studio", "mac-pro", "displays", "mac/compare", "mac/mac-does-that"]
      },
      {
        category: "Shop Mac",
        subItems: ["Shop Mac", "Help me choose", "Mac Accesories", "Apple Trade In", "Financing"],
        subItemsLinks: ["shop/buy_mac", "mac/best-mac", "mac/accesories", "shop/trade_in", "shop/payment_plan"]
      },
      {
        category: "More from Mac",
        subItems: ["Mac Support", "AppleCare+ for Mac", "macOS Sequoia", "Apple Intelligence", "Apps by Apple", "Continuity", "iCloud+", "Mac for Business", "Education"],
        subItemsLinks: ["support", "support/products/mac", "macos/macos-sequoia", "apple-intelligence", "apps", "continuity", "icloud", "business/mac", "education"]
      },
    ],
  },
  { 
    name: "iPad", 
    items: [
      {
        category: "Explore iPad",
        subItems: ["Explore All iPad", "iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "Keyboards"],
        utils: ["Compare iPad", "Why iPad"],
        subItemsLinks: ["ipad", "ipad-pro", "ipad-air", "ipad-11", "ipad-mini", "apple-pencil", "ipad-keyboards", "ipad/compare", "ipad/why-ipad"],
      },
      {
        category: "Shop iPad",
        subItems: ["Shop iPad", "iPad Accesories", "Apple Trade In", "Financing"],
        subItemsLinks: ["shop/buy_ipad", "shop/ipad/accessories", "shop/trade_in", "shop/payment_plan"],
      },
      {
        category: "More from iPad",
        subItems: ["iPad Support", "AppleCare+ for iPad", "iPadOS 18", "Apple Intelligence", "Apps by Apple", "iCloud+", "Education"],
        subItemsLinks: ["support", "support/products/ipad", "ipados/ipados-18", "apple-intelligence"],
      },
    ],
  },
  { 
    name: "iPhone", 
    items: [
      {
        category: "Explore iPhone",
        subItems: ["Explore All iPhone", "iPhone 16 Pro", "iPhone 16", "iPhone 16e", "iPhone 15"],
        utils: ["Compare iPhone", "Switch from Android"],
        subItemsLinks: ["iphone", "iphone-16-pro", "iphone-16", "iphone-16e", "shop/buy_iphone/iphone_15", "iphone/compare", "iphone/switch"],
      },
      {
        category: "Shop iPhone",
        subItems: ["Shop iPhone", "iPhone Accesories", "Apple Trade In", "Carrier Deals at Apple", "Financing"],
        subItemsLinks: ["shop/buy_iphone", "shop/iphone/accessories", "shop/trade_in", "shop/buy_iphone/carrier_offers", "shop/payment_plan"],
      },
      {
        category: "More from iPhone",
        subItems: ["iPhone Support", "AppleCare+ for iPhone", "iOS 18", "Apple Intelligence", "Apps by Apple", "iPhone Privacy", "iCloud+", "Wallet, Pay, Card", "Siri"],
        subItemsLinks: ["support", "support/products/iphone", "ios/ios-18", "apple-intelligence", "apps", "privacy", "icloud", "wallet", "siri"],
      },
    ],
  },
  { 
    name: "Watch", 
    items: [
      {
        category: "Explore Watch",
        subItems: ["Explore All Apple Watch", "Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch SE", "Apple Watch Nike", "Apple Watch Hermès"],
        utils: ["Compare Watch", "Why Apple Watch"],
        subItemsLinks: ["watch", "apple-watch-series-10", "apple-watch-ultra-2", "apple-watch-se", "apple-watch-nike", "apple-watch-hermes", "watch/compare", "watch/why-apple-watch"],
      },
      {
        category: "Shop Watch",
        subItems: ["Shop Apple Watch", "Apple Watch Studio", "Apple Watch Bands", "Apple Watch Accessories", "Apple Trade In", "Financing"],
        subItemsLinks: ["shop/buy_watch", "shop/studio/apple_watch", "shop/watch/bands", "shop/watch/accessories", "shop/trade_in", "shop/payment_plan"],
      },
      {
        category: "More from Watch",
        subItems: ["Apple Watch Support", "AppleCare+", "watchOS 11", "Apple Watch For Your Kids", "Apps by Apple", "Apple Fitness+"],
        subItemsLinks: ["support", "support/products/watch", "watchos/watchos-11", "apple-watch-for-your-kids", "apps", "apple-fitness-plus"],
      },
    ],
  },
  { 
    name: "Vision", 
    items: [
      {
        category: "Explore Vision",
        subItems: ["Explore Apple Vision Pro"],
        utils: ["Guided Tour", "Tech Specs"],
        subItemsLinks: ["apple-vision-pro", "apple-vision-pro/guided-tour", "apple-vision-pro/specs"],
      },
      {
        category: "Shop Vision",
        subItems: ["Shop Apple Vision Pro", "Apple Vision Pro Accessories", "Book a Demo", "Financing"],
        subItemsLinks: ["shop/buy_vision", "shop/vision/accessories", "retail/instore-shopping-session/session-selection/?topic=visionpro", "shop/payment_plan"],
      },
      {
        category: "More from Vision",
        subItems: ["Apple Vision Pro Support", "AppleCare+", "visionOS 2"],
        subItemsLinks: ["support", "support/products/apple-vision-pro", "visionos/visionos-2"],
      },
    ],
  },
  { 
    name: "AirPods", 
    items: [
      {
        category: "Explore AirPods",
        subItems: ["Explore All AirPods", "AirPods 4", "AirPods Pro 2", "AirPods Max"],
        utils: ["Compare AirPods"],
        subItemsLinks: ["airpods", "airpods-4", "airpods-pro", "airpods-max", "airpods/compare"],
      },
      {
        category: "Shop AirPods",
        subItems: ["Shop AirPods", "AirPods Accessories"],
        subItemsLinks: ["shop/accessories/all/headphones-speakers", "shop/accessories/all_accessories/headphones-speakers"],
      },
      {
        category: "More from AirPods",
        subItems: ["AirPods Support", "AppleCare+ for Headphones", "Hearing Health", "Apple Music"],
        subItemsLinks: ["support", "support/products/headphones", "airpods-pro/hearing-health", "apple-music"],
      },
    ],
  },
  { 
    name: "TV & Home", 
    items: [
      {
        category: "Explore TV & Home",
        subItems: ["Explore TV & Home", "Apple TV 4K", "HomePod", "HomePod Mini"],
        subItemsLinks: ["tv-home", "apple-tv-4k", "homepod-2nd-generation", "homepod-mini"],
      },
      {
        category: "Shop TV & Home",
        subItems: ["Shop Apple TV 4K", "Shop HomePod", "Shop HomePod Mini", "Shop Siri Remote", "TV & Home Accessories"],
        subItemsLinks: ["shop/buy_tv/apple_tv_4k", "shop/buy_homepod/homepod", "shop/buy_homepod/homepod_mini", "shop/product/MW5G3", "shop/smart_home/accessories"],
      },
      {
        category: "More from TV & Home",
        subItems: ["Apple TV Support", "HomePod Support", "AppleCare+", "Apple TV app", "Apple TV+", "Home app", "Apple Music", "Siri", "AirPlay"],
        subItemsLinks: ["support", "support", "support/products", "apple-tv-app", "apple-tv-plus", "home-app", "apple-music", "siri", "airplay"],
      },
    ],
  },
  { 
    name: "Entertainment", 
    items: [
      {
        category: "Explore Entertainment",
        subItems: ["Explore Entertainment", "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
        subItemsLinks: ["services", "apple-one", "apple-tv-plus", "apple-music", "apple-arcade", "apple-fitness-plus", "apple-news", "apple-podcasts", "apple-books", "app-store"],
      },
      {
        category: "Support",
        subItems: ["Apple TV+ Support", "Apple Music Support"],
        subItemsLinks: ["support", "support"],
      },
    ],
  },
  { 
    name: "Accessories", 
    items: [
      {
        category: "Shop Accessories",
        subItems: ["Shop All Accessories", "Mac", "iPad", "iPhone", "Apple Watch", "Apple Vision Pro", "AirPods", "TV & Home"],
        subItemsLinks: ["shop/buy_accessories", "shop/mac/accessories", "shop/ipad/accessories", "shop/iphone/accessories", "shop/watch/accessories", "shop/vision/accessories", "shop/accessories/all_accessories/headphones_speakers", "shop/smart_home/accessories"],
      },
      {
        category: "Explore Accessories",
        subItems: ["Made by Apple", "Beats by Dr. Dre", "AirTag"],
        subItemsLinks: ["shop/accessories/all_accessories/made_by_apple", "shop/accessories/all_accessories/beats_featured", "airtag"],
      },
    ],
  },
  { 
    name: "Support", 
    items: [
      {
        category: "Explore Support",
        subItems: ["iPhone", "Mac", "iPad", "Watch", "Apple Vision Pro", "AirPods", "Music", "TV"],
        utils: ["Explore Support"],
        subItemsLinks: ["support", "support", "support", "support", "support", "support", "support", "support", "support"],
      },
      {
        category: "Get Help",
        subItems: ["Community", "Check Coverage", "Repair"],
        subItemsLinks: ["support", "support", "support"],
      },
      {
        category: "Helpful Topics",
        subItems: ["Get AppleCare+", "Apple Account and Password", "Billing & Subscriptions", "Accessibility"],
        subItemsLinks: ["support", "support", "support", "support"],
      },
    ],
  },
];

interface NavBarProps {
  showItems: boolean;
  onMouseEnter: () => void;
}

function NavBar({ onMouseEnter, showItems }: NavBarProps) {
  const [activeButton, setActiveButton] = React.useState<string | null>(null);
  const contentRef = React.useRef<HTMLUListElement>(null);
  const [height, setHeight] = React.useState("0px");
  const [animateItems, setAnimateItems] = React.useState(false);
  const prevShowRef = React.useRef(showItems);

  const handleMouseEnter = (name: string) => {
    setActiveButton(name);
    onMouseEnter();
  };

  React.useEffect(() => {
    if (!contentRef.current) return;
    const contentEl = contentRef.current;

    const newHeight = showItems ? `${contentEl.scrollHeight}px` : "0px";
    setHeight(newHeight);

    // animate only when we go from closed to open
    if (!prevShowRef.current && showItems) {
      setAnimateItems(true);
    } else {
      setAnimateItems(false);
    }

    if (!showItems) {
      setActiveButton(null);
    }
    prevShowRef.current = showItems;
  }, [showItems, activeButton]);

  return (
    <>
      <div className="w-full h-full flex justify-between items-center px-3 text-xs font-normal">
        <div className="w-[13px] cursor-pointer">
          <a href="/">
            {/* <Image src="/apple_logo.svg" width={13} height={13} alt="apple_logo" /> */}
            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </a>
        </div>
        {itemsLists.map((itemsList, index) => (
          <NavButton key={index} name={itemsList.name} onMouseEnter={handleMouseEnter} />
        ))}
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
            <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
          </svg>
        </div>
        <div className="cursor-pointer">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
          </svg>
        </div>
      </div>
      <div>
        <div style={{ height, transition: "height 300ms ease-in-out" }} className="absolute left-0 w-full bg-(--hover-bg-navbar) overflow-hidden flex justify-center items-center">
          <ul ref={contentRef} className={`container flex list-none gap-10 pt-8 pb-14 px-3`}>
            {activeButton &&
            itemsLists.find((grp) => grp.name === activeButton)?.items.map((item, i) => (
              <li key={i} style={{animation: animateItems ? `fade-in 300ms ease-out ${(i+1) * 50}ms both` : undefined}} className={"font-light text-xs flex flex-col gap-3 "}>
                {item.category}
                <ul className="flex flex-col gap-2">
                  {item.subItems.map((subItem, j) => (
                    <li key={j} className={`cursor-pointer font-medium ${i === 0 && "text-2xl pr-12"}`} style={{animation: animateItems ? `fade-in 300ms ease-out ${(i*2 + j+1) * 50}ms both` : undefined}}>
                      <a href={item.subItemsLinks && item.subItemsLinks[j]}>{subItem}</a>
                    </li>
                  ))}
                  {item.utils && item.utils.map((util, j) => (
                    <li key={j} className="cursor-pointer font-medium" style={{animation: animateItems ? `fade-in 300ms ease-out ${((i+1)*item.subItems.length + j+1) * 50}ms both` : undefined}}>
                      <a href={item.subItemsLinks && item.subItemsLinks[item.subItems.length + j]}>
                        {util}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;