import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NavBarProvider} from "@/app/context/NavBarContext";
import NavBarWrapper from "@/app/ui/navbar/NavBarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple Clone With Next.js",
  description: "Designed by Apple, cloned with Next.js by Truc Minh Nguyen (justinakatruc)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="font-[family-name:var(--font-geist-sans)]">
            <NavBarProvider>
              <NavBarWrapper />
                {children}
            </NavBarProvider>
          </div>
        </body>
    </html>
  );
}
