"use client";

import React from "react";
import {itemsLists} from "@/app/data/itemsLists";
import Link from "next/link";
import NavButton from "./NavButton";
import SearchMenu from "./SearchMenu";
import CartMenu from "./CartMenu";

interface NavBarProps {
  expandMenu: boolean;
  onMouseEnter: () => void;
  setExpandMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
}

function NavBar({ expandMenu, onMouseEnter, setExpandMenu, isDesktop }: NavBarProps) {
  // Desktop Menu
  const [activeButton, setActiveButton] = React.useState<string | null>(null);
  const [desktopHeight, setDesktopHeight] = React.useState("0px");
  const [mobileHeight, setMobileHeight] = React.useState("0px");

  const [showDesktopItems, setShowDesktopItems] = React.useState(false);
  const [showMobileItems, setShowMobileItems] = React.useState(false);

  const desktopMenuRef = React.useRef<HTMLUListElement>(null);
  const mobileMenuRef = React.useRef<HTMLUListElement>(null);

  const [showSearchMenu, setShowSearchMenu] = React.useState(false);
  const [showCartMenu, setShowCartMenu] = React.useState(false);



  const handleMouseEnter = (name: string) => {
    setActiveButton(name); // pre render the list to get the height
    onMouseEnter(); // call the parent function - handleMouseEnter()
  };

  // Expanding and collapsing the menu
  React.useEffect(() => {
    if (!desktopMenuRef.current) return;
    const contentEl = desktopMenuRef.current;

    const newHeight = expandMenu ? `${contentEl.scrollHeight}px` : "0px";
    if (expandMenu) {
      setDesktopHeight(newHeight);
      // Wait for 100ms (height changed) before showing the items
      setTimeout(() => {
        setShowDesktopItems(true);
      }, 100);
    }
    else {
      setShowDesktopItems(false);
      // Wait for 200ms (items hidden) before collapsing the menu
      setTimeout(() => {
        setDesktopHeight(newHeight);
        setActiveButton(null);
      }, 225);
    }
  }, [activeButton, expandMenu]);


  // Mobile Menu
  const handleMouseClick = () => {
    if (showSearchMenu || showCartMenu) {
      setShowSearchMenu(false);
      setShowCartMenu(false);
    }
    else {
      setShowMobileItems(prev => !prev);
      onMouseEnter();
    }
  };

  React.useEffect(() => {
    if (showMobileItems || showSearchMenu || showCartMenu) {
      onMouseEnter();
      setMobileHeight("100lvh");
    }
    else {
      setExpandMenu(false);
      setMobileHeight("0px");
    }
  }, [showMobileItems, showSearchMenu, showCartMenu]);

  React.useEffect(() => {
    if (!expandMenu) {
      setShowMobileItems(false);
      setShowSearchMenu(false);
      setShowCartMenu(false);
    }
  }, [isDesktop, expandMenu]);

  // Handling search and cart menu
  const handleSearchMenu = () => {
    setExpandMenu(true);
    setActiveButton("Search");
    setShowSearchMenu(true);
  };
  const handleCartMenu = () => {
    setExpandMenu(true);
    setActiveButton("Cart");
    setShowCartMenu(true);
  };

  const showIcon = (!isDesktop && (showMobileItems || showSearchMenu || showCartMenu)) ? 0 : 1;
  return (
    <>
      {/* Navbar */}
      <div className="w-full h-full flex justify-between items-center px-3 text-xs font-normal navbar ">
        
        {/* Logo */}
        <div style={{opacity: showIcon, transition: `opacity 200ms ease-in-out`}} className="w-[13px] logo-container">
          <Link href="/" 
                style={{ cursor: showIcon ? 'pointer' : 'default', pointerEvents: showIcon ? 'auto' : 'none' }} 
                onClick={(e) => {
                  if (!showIcon) e.preventDefault();
                  setExpandMenu(false);
                }}>
            <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
          </Link>
        </div>

        {/* Nav Buttons */}
        {itemsLists.map((itemsList, index) => (
          itemsList.name !== "Search" && itemsList.name !== "Cart" && (
            <div key={index} className="desktop-view max-content">
              <NavButton name={itemsList.name} onMouseEnter={handleMouseEnter} />
            </div>
          )
        ))}

        {/* Search */}
        <div
          style={{ opacity: showIcon, transition: `opacity 200ms ease-in-out`, cursor: showIcon ? 'pointer' : undefined }}
          onClick={showIcon ? handleSearchMenu : undefined}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 44">
            <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
          </svg>
        </div>

        {/* Cart */}
        <div style={{ opacity: showIcon, transition: `opacity 200ms ease-in-out`, cursor: showIcon ? 'pointer' : undefined }}
             onClick={showIcon ? handleCartMenu : undefined}
        >
          <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
          </svg>
        </div>

        {/* Menu Trigger */}
        <div className="cursor-pointer mobile-view z-20 select-none" onClick={handleMouseClick}>
          <svg width="20" height="20" viewBox="0 0 18 18">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="2 12, 16 12"
              className={`transition-all duration-300 globalnav-menutrigger-bread ${
                (showMobileItems || showSearchMenu || showCartMenu) ? 'rotate-45 translate-x-[13px] translate-y-[-7px]' : ''
              }`}
            />
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="2 5, 16 5"
              className={`transition-all duration-300 globalnav-menutrigger-bread ${
                (showMobileItems || showSearchMenu || showCartMenu) ? '-rotate-45 translate-x-[1px] translate-y-[10.5px]' : ''
              }`}
            />
          </svg>
        </div>
      </div>

      {/* Menus */}
      <div>

        {/* Desktop Menu */}
        <div style={{ height: desktopHeight, transition: `height ${showDesktopItems ? "150ms" : "300ms"} ease-out`}} 
             className="desktop-view absolute left-0 w-full bg-(--hover-bg-navbar) overflow-hidden flex justify-center items-start">
          <ul ref={desktopMenuRef} className={`container flex list-none gap-10 pt-10 pb-19 px-3`}>

            {/* Search Menu */}
            {activeButton === "Search" && (
              <li className="w-full flex justify-start items-center"
                  style={{opacity: showDesktopItems ? 1 : 0, transform: `translateY(${showDesktopItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out, transform 300ms ease-out`}}>
                <SearchMenu showSearchMenu={showSearchMenu} searchList={itemsLists.find((list) => list.name === 'Search')!} setExpandMenu={setExpandMenu} />
              </li>
            )}
            {/* Cart Menu */}
            {activeButton === "Cart" && (
              <li className="w-full flex justify-start items-center"
                  style={{opacity: showDesktopItems ? 1 : 0, transform: `translateY(${showDesktopItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out, transform 300ms ease-out`}}>
                <CartMenu showCartMenu={showCartMenu} cartList={itemsLists.find((list) => list.name === 'Cart')!} setExpandMenu={setExpandMenu} />
              </li>
            )}

            {/* Items List */}
            {activeButton !== "Search" 
            && activeButton !== "Cart" 
            && itemsLists.find((grp) => grp.name === activeButton)?.items.map((item, i) => (
              <li key={item.category} 
                  style={{opacity: showDesktopItems ? 1 : 0, transform: `translateY(${showDesktopItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out ${(i+1) * 20}ms, transform 300ms ease-out`}} 
                  className={"font-light text-xs flex flex-col gap-3 "}>

                {/* Category */}
                <span className="select-none">{item.category}</span>
                <ul className="flex flex-col gap-[4px]">

                  {/* Subitems List */}
                  {item.subItems.map((subItem, j) => (
                    <li key={subItem} 
                        style={{opacity: showDesktopItems ? 1 : 0, transform: `translateY(${showDesktopItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out ${(i * 2 + j + 1) * 20}ms, transform 300ms ease-out`}} 
                        className={`cursor-pointer font-medium ${i === 0 && "text-2xl pr-12"}`}>
                      <Link href={`/${item.subItemsLinks && item.subItemsLinks[j]}`} onClick={() => setExpandMenu(false)}>{subItem}</Link>
                    </li>
                  ))}
                  
                  {/* Utils List */}
                  {item.utils && item.utils.map((util, j) => (
                    <li key={util} 
                        style={{opacity: showDesktopItems ? 1 : 0, transform: `translateY(${showDesktopItems ? '3px' : '0px'})`, transition: `opacity 200ms ease-in-out ${((i+1)*item.subItems.length + j+1) * 20}ms, transform 300ms ease-out`}} 
                        className="cursor-pointer font-medium"
                        >
                      <Link href={`/${item.subItemsLinks && item.subItemsLinks[item.subItems.length + j]}`} onClick={() => setExpandMenu(false)}>
                        {util}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div style={{ height: mobileHeight, transition: `height 300ms ease-out` }} 
             className={`mobile-view absolute left-0 w-full bg-(--hover-bg-navbar) flex justify-start items-start overflow-y-auto`}>

          {/* Mobile Items */}
          <ul ref={mobileMenuRef}
              className={`w-full flex flex-col items-start gap-2 px-[48px] z-${showMobileItems ? 20 : 0}`}>

            {/* Items List */}
            {itemsLists.map((itemsList, i) => (
              <li key={itemsList.name} 
                   style={{
                        opacity: showMobileItems ? 0.9 : 0, transform: `translateY(${showMobileItems ? '3px' : '0px'})`, 
                        transition: `opacity 200ms ease-in-out ${(i+1) * 35}ms, transform 300ms ease-out`,
                        pointerEvents: showMobileItems ? 'auto' : 'none'}} 
                   className="font-semibold text-[26px] select-none">
                <NavButton name={itemsList.name} />
              </li>
            ))}
          </ul>

          {/* Search Items */}
          <div className={`absolute left-10 z-${showSearchMenu ? 20 : 0}`}>
            <SearchMenu showSearchMenu={showSearchMenu} searchList={itemsLists.find((list) => list.name === 'Search')!} setExpandMenu={setExpandMenu} />
          </div>
          <div className={`absolute left-10 z-${showCartMenu ? 20 : 0}`}>
            <CartMenu showCartMenu={showCartMenu} cartList={itemsLists.find((list) => list.name === 'Cart')!} setExpandMenu={setExpandMenu} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;