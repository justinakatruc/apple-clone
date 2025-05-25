export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const requestedProducts = Array.from(searchParams.values());

  const productsLayout = [
    {
      name: "wwdc",
      details: {
        icon: "",
        title: "WWDC25",
        descriptions: ["Apple Worldwide Developers Conference.", "Join us online June 9-13"],
        imageUrl: "/promo_wwdc25__e4ew4e8nmaaa_large.jpg",
        descriptionPos: "end",
        learnMore: "Learn More",
        buy: "",
        noTitle: true,
        appleIntel: false,
      }
    },
    {
      name: "watch",
      details: {
        icon: "apple_logo.svg",
        title: "Watch",
        descriptions: ["Thinstant classic."],
        imageUrl: "/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg",
        descriptionPos: "start",
        learnMore: "Learn More",
        buy: "Buy",
        noTitle: false,
        appleIntel: false,
      }
    },
    {
      name: "ipad-air",
      details: {
        icon: "",
        title: "iPad air",
        descriptions: ["Now supercharged by the M3 chip."],
        imageUrl: "/promo_ipad_air__bfbxzvw65c02_large.jpg",
        descriptionPos: "between",
        learnMore: "Learn More",
        buy: "Buy",
        noTitle: false,
        appleIntel: true,
      }
    },
    {
      name: "card",
      details: {
        icon: "apple_logo.svg",
        title: "Card",
        descriptions: ["Get up to 3% Daily Cash back", "with every purchase."],
        imageUrl: "/promo_apple_card__5cm7draujpey_large.jpg",
        descriptionPos: "start",
        learnMore: "Learn More",
        buy: "Apply now",
        noTitle: false,
        appleIntel: false,
      }
    }
  ];

  // Create a lookup map for efficient access
  const layoutMap = Object.fromEntries(productsLayout.map(p => [p.name, p]));

  // Add stable index for duplicates
  const nameCounts: Record<string, number> = {};
  const filteredProducts = requestedProducts.map((name: string) => {
    const baseProduct = layoutMap[name];
    if (!baseProduct) return null;

    const index = nameCounts[name] || 0;
    nameCounts[name] = index + 1;

    return {
      ...baseProduct,
      _key: `${name}-${index}`,
    };
  }).filter(Boolean);

  return Response.json(filteredProducts);
};
