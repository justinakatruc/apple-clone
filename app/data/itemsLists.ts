interface itemsLists {
  name: string;
  items: {
    category: string;
    subItems: string[];
    subItemsLinks?: string[];
    utils?: string[];
  }[];
}

export const itemsLists : itemsLists[] = [
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