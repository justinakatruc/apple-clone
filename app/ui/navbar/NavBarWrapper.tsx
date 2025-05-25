"use client";

import { useNavBar } from "@/app/context/NavBarContext";
import NavBar from "./NavBar";

export default function NavBarWrapper() {
  const {
    expandMenu,
    isDesktop,
    setExpandMenu,
    handleMouseEnter,
    handleMouseLeave,
  } = useNavBar();

  const getAnimationClass = () => {
    if (expandMenu) return "bg-(--hover-bg-navbar)";
    return "backdrop-blur-lg bg-white/50 delay-500";
  };

  return (
    <div
      className={`fixed w-full top-0 flex justify-center z-50 ${getAnimationClass()}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        <NavBar
          expandMenu={expandMenu}
          isDesktop={isDesktop}
          setExpandMenu={setExpandMenu}
          onMouseEnter={handleMouseEnter}
        />
      </div>
    </div>
  );
}
