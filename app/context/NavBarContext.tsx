"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@/app/lib/hooks";

type NavBarContextType = {
  expandMenu: boolean;
  setExpandMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) throw new Error("useNavBar must be used within NavBarProvider");
  return context;
};

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [expandMenu, setExpandMenu] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 828px)");

  useEffect(() => {
    setExpandMenu(false);
  }, [isDesktop]);

  const handleMouseEnter = () => {
    setExpandMenu(true);
  };
  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setExpandMenu(false);
  };

  return (
    <NavBarContext.Provider
      value={{ expandMenu, setExpandMenu, isDesktop, handleMouseEnter, handleMouseLeave }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
