import React from "react";

import Iphone16Pro from "@/app/page/iphone/iphone_16_pro";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dynamic Page",
  description: "This is a dynamic page that renders content based on the slug.",
};

interface PageProps {
  params: Promise<{ productSlug: string }>;
}

async function Page({ params }: PageProps) {
  const { productSlug } = await params;
  // console.log("Product Slug:", productSlug);

  const getContent = () => {
    switch (productSlug) {
      case "iphone-16-pro":
        return <Iphone16Pro />;
      default:
        return (
          <div>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>
        );
    }
  }
  return (
    <div className="py-12">
      {getContent()}
    </div>
  );
}

export default Page;