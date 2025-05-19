"use client";

import React from "react";
import NavButton from "./NavButton";
import {itemsLists} from "@/data/itemsLists";

interface NavBarProps {
  expandMenu: boolean;
  onMouseEnter: () => void;
}

function NavBar({ onMouseEnter, expandMenu }: NavBarProps) {
  const [activeButton, setActiveButton] = React.useState<string | null>(null);
  const [height, setHeight] = React.useState("0px");
  const [showItems, setShowItems] = React.useState(false);
  const contentRef = React.useRef<HTMLUListElement>(null);

  const handleMouseEnter = (name: string) => {
    setActiveButton(name); // pre render the list to get the height
    onMouseEnter(); // call the parent function - handleMouseEnter()
  };

  // Expanding and collapsing the menu
  React.useEffect(() => {
    if (!contentRef.current) return;
    const contentEl = contentRef.current;

    const newHeight = expandMenu ? `${contentEl.scrollHeight}px` : "0px";
    if (expandMenu) {
      setHeight(newHeight);
      // Wait for 100ms (height changed) before showing the items
      setTimeout(() => {
        setShowItems(true);
      }, 100);
    }
    else {
      setShowItems(false);
      // Wait for 200ms (items hidden) before collapsing the menu
      setTimeout(() => {
        setHeight(newHeight);
        setActiveButton(null);
      }, 225);
    }
  }, [activeButton, expandMenu]);

  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    alert("Mobile menu is not implemented yet");
  };  
  return (
    <>
      <div className="w-full h-full flex justify-between items-center px-3 text-xs font-normal navbar">
        
        {/* Logo */}
        <div className="w-[13px] cursor-pointer logo-container">
          <a href="/">
            <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </a>
        </div>

        {/* Nav Buttons */}
        {itemsLists.map((itemsList, index) => (
          <div key={index} className="desktop-view max-content">
            <NavButton name={itemsList.name} onMouseEnter={handleMouseEnter} />
          </div>
        ))}

        {/* Search */}
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 44">
            <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
          </svg>
        </div>

        {/* Cart */}
        <div className="cursor-pointer">
          <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
          </svg>
        </div>

        {/* Menu Trigger */}
        <div className="cursor-pointer mobile-view z-20" onClick={handleMobileMenu}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 12, 16 12" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"><animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate><animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate></polyline><polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 5, 16 5" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"><animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate><animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate></polyline>
          </svg>
        </div>
      </div>
      <div>

        {/* Desktop Menu */}
        <div style={{ height, transition: `height ${showItems ? "150ms" : "300ms"} ease-out`}} 
             className="desktop-view absolute left-0 w-full bg-(--hover-bg-navbar) overflow-hidden flex justify-center items-start">
          <ul ref={contentRef} className={`container flex list-none gap-10 pt-10 pb-19 px-3`}>

            {/* Items List */}
            {itemsLists.find((grp) => grp.name === activeButton)?.items.map((item, i) => (
              <li key={i} 
                  style={{opacity: showItems ? 1 : 0, transform: `translateY(${showItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out ${(i+1) * 20}ms, transform 300ms ease-out`}} 
                  className={"font-light text-xs flex flex-col gap-3 "}>

                {/* Category */}
                {item.category}
                <ul className="flex flex-col gap-[4px]">

                  {/* Subitems List */}
                  {item.subItems.map((subItem, j) => (
                    <li key={j} 
                        style={{opacity: showItems ? 1 : 0, transform: `translateY(${showItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out ${(i * 2 + j + 1) * 20}ms, transform 300ms ease-out`}} 
                        className={`cursor-pointer font-medium ${i === 0 && "text-2xl pr-12"}`}>
                      <a href={item.subItemsLinks && item.subItemsLinks[j]}>{subItem}</a>
                    </li>
                  ))}
                  
                  {/* Utils List */}
                  {item.utils && item.utils.map((util, j) => (
                    <li key={j} 
                        style={{opacity: showItems ? 1 : 0, transform: `translateY(${showItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out ${((i+1)*item.subItems.length + j+1) * 20}ms, transform 300ms ease-out`}} 
                        className="cursor-pointer font-medium"
                        >
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

        {/* Mobile Menu */}
        <div className={`mobile-view ${showMobileMenu ? "block" : "hidden"}`} onClick={handleMobileMenu}>
          
        </div>
      </div>
    </>
  );
}

export default NavBar;