import { SiteContent } from "./types";

const en: SiteContent = {
  locale: "en",
  brand: {
    name: "Georgia Transfers & Tours",
    tagline: "Private transfers, rides and tours in Georgia — simple booking, clear prices and fast replies.",
  },
  nav: { home: "Home", transfers: "Transfers", tours: "Tours" },
  cta: {
    primary: "Chat on Telegram",
    secondary: "Chat on WhatsApp",
  },
  home: {
    title: "Transfers & Tours in Georgia",
    subtitle: "Clear starting prices, comfortable cars and fast replies in messengers. From request to arrival — easy.",
    bullets: [
      "We've been building our reputation for many years — only verified drivers.",
      "Plenty of space for luggage (suitcases, skis/snowboard). Non-smoking vehicles — clean and comfortable.",
      "Private trips from anywhere in Georgia to anywhere in Georgia, as well as to Russia and Armenia — works in reverse direction too.",
      "We'll help you book verified accommodation in Tbilisi, Gudauri, Bakuriani and Batumi for your vacation.",
    ],
    cards: [
      { title: "Transfers & rides", text: "Routes, starting prices, vehicle types and trip conditions.", href: "/transfers" },
      { title: "Tours in Georgia", text: "Pick a route for impressions: top-3 and all directions.", href: "/tours" },
    ],
  },
  transfers: {
    title: "Transfers & rides",
    subtitle: "Private trips from anywhere in Georgia, plus Russia and Armenia.",
    routeTitle: "Popular routes & starting prices",
    routeHint: "Prices are shown as “from” and depend on season, time and number of passengers. Message us for an exact quote.",
    transportTitles: { car: "Cars", minivan: "Minivans" },
    routes: [
      { from: "Tbilisi", to: "Gudauri", transport: "car", priceFrom: "from 160 ₾" },
      { from: "Tbilisi", to: "Bakuriani", transport: "car", priceFrom: "from 210 ₾" },
      { from: "Vladikavkaz", to: "Gudauri", transport: "car", priceFrom: "8.000₽" },
      { from: "Tbilisi", to: "Vladikavkaz", transport: "car", priceFrom: "11.000₽" },
      { from: "Tbilisi", to: "Gudauri", transport: "minivan", priceFrom: "from 200 ₾" },
      { from: "Tbilisi", to: "Bakuriani", transport: "minivan", priceFrom: "from 320 ₾" },
      { from: "Vladikavkaz", to: "Gudauri", transport: "minivan", priceFrom: "from 12.000₽" },
      { from: "Tbilisi", to: "Vladikavkaz", transport: "minivan", priceFrom: "from 15.000₽" },
    ],
    routeNote: "All routes are available in reverse direction as well.",
    conditionsTitle: "Trip conditions",
    conditions: [
      "Non‑smoking vehicles",
      "Luggage space + skis/boards (on request)",
      "Comfortable seating and seat belts",
      "Stops on the way when needed (coffee/toilet)",
    ],
    addonsTitle: "Extra services",
    addons: [
      "Instructor/guide (on request)",
      "Help with accommodation (options + booking)",
      "Custom routes across Georgia",
      "Trips to Russia & Armenia (ask for details)",
    ],
  },
  tours: {
    title: "Tours in Georgia",
    subtitle: "Routes built around impressions: views, culture, food and photo stops. We adjust to your pace.",
    featuredTitle: "Top-3 popular routes",
    featured: [
      { id: "kakheti", title: "Kakheti: wine day", duration: "1 day", highlight: "Wine, tastings, scenic places and a warm vibe.", image: "/images/tour-1.svg" },
      { id: "kazbegi", title: "Kazbegi & mountain views", duration: "1 day", highlight: "Mountains, viewpoints, photo stops and Кавказ mood.", image: "/images/tour-2.svg" },
      { id: "mtskheta", title: "Mtskheta + Jvari", duration: "4–6 hours", highlight: "History, panoramas and an easy route near Tbilisi.", image: "/images/tour-3.svg" },
    ],
    allTitle: "All directions we’ve already done",
    allDirections: [
      "Kakheti", "Kazbegi", "Mtskheta", "Borjomi", "Kutaisi", "Batumi", "Svaneti", "Uplistsikhe", "Gori",
      "Tbilisi (city tour)", "Canyons & waterfalls", "Martvili", "Caves", "Gudauri viewpoints",
    ],
  },
  reviews: {
    title: "Client reviews",
    items: [
      { name: "Kristina", text: "We traveled on the route Tbilisi - Bakuriani and back - everything went comfortably, calmly and safely. Thanks to Sergei for excellent organization!", tgLink: "https://t.me/SergBushin1984" },
      { name: "Eugene", text: "The trip to Kazbegi organized by Sergei went perfectly: everything was on time, comfortable and without unnecessary fuss. The route is well thought out, everything is at the highest level. Thanks for the great tour - we'll definitely contact you again!", tgLink: "https://t.me/SergBushin1984" },
      { name: "Alexander", text: "Best value for money: fast and clear support, professional drivers, convenient booking and most importantly - reliability. I traveled through Sergei several times: his drivers never arrived late, on the contrary - they always arrived early.", tgLink: "https://t.me/SergBushin1984" },
    ],
  },
  contacts: {
    title: "Contacts & quick chat",
    hint: "We'll quickly answer all your questions — write or call in any convenient way.",
    data: {
      phone: "+995 577 008 918",
      telegram: "https://t.me/Sergei19841313",
      whatsapp: "https://wa.me/995577008918",
      whatsappMessage: "https://wa.me/message/JKMK3IMWXNQEK1",
      telegramReviews: "https://t.me/SergBushin1984",
      telegramChooseCar: "https://t.me/joinchat/lsdafoPCpjwyYzM6",
      telegramTours: "https://t.me/+VNVjorY_HS8yYmQ6",
      instagram: "https://www.instagram.com/bushin_serg/",
      facebook: "https://www.facebook.com/profile.php?id=100023689592733#",
      vk: "https://m.vk.com/id167016578?offset=10&own=1",
      email: "sergeibush@icloud.com",
    },
  },
  seo: {
    siteName: "Georgia Transfers & Tours",
    defaultTitle: "Transfers & tours in Georgia — prices, routes, quick chat",
    defaultDescription: "Private transfers: Tbilisi, Gudauri, Bakuriani, Vladikavkaz and more. Tours in Georgia: top routes, photos, reviews. Quick chat on Telegram and WhatsApp.",
    keywords: ["transfer georgia", "tbilisi gudauri transfer", "tours georgia", "georgia rides", "private transfer tbilisi"],
    city: "Tbilisi",
    country: "Georgia",
  },
};

export default en;
