"use client";
import React from "react";
import NavBar from "@/ui/NavBar";

export default function Home() {
  const [showInfo, setShowInfo] = React.useState(true);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className={`${showInfo ? "h-svh" : "h-0"} + duration-1000 ease-in-out`}>
        <div className={`h-full flex flex-col justify-around overflow-hidden text-center + ${showInfo ? "opacity-100": "opacity-0"} + duration-500 ease-in-out`}>
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
      {!showInfo && 
      <div className="h-lvh">
        <NavBar />
      </div>
      }
    </div>
  );
}
