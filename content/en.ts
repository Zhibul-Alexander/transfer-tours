import { SiteContent } from "./types";

const en: SiteContent = {
  locale: "en",
  brand: {
    name: "Georgia Transfers & Tours",
    tagline: "Transfers, rides and tours across Georgia — fast, comfortable, and hassle-free.",
  },
  nav: { home: "Home", transfers: "Transfers", tours: "Tours" },
  cta: {
    primary: "Message on Telegram",
    secondary: "Message on WhatsApp",
  },
  home: {
    title: "Transfers and Tours in Georgia",
    subtitle:
      "Clear pricing, comfortable and clean cars, and quick replies in messengers — you're always in touch and know what's happening. We make every trip easy at every step: we take your request quickly, уточняем details of the route and time, confirm the booking, and arrive exactly where you need. We also organize great tours around Georgia — we'll match a route to your wishes and show you the best places without unnecessary hassle.",
    bullets: [
      "We've been working for our reputation for years — only trusted drivers.",
      "Plenty of space for luggage (suitcases, skis/snowboard). No smoking in the car — clean and comfortable.",
      "Private trips from anywhere in Georgia to anywhere in Georgia, as well as to Russia and Armenia — also available in reverse.",
      "We can help you book trusted accommodation in Tbilisi, Gudauri, Bakuriani, and Batumi for your vacation.",
    ],
    cards: [
      {
        title: "Transfers and Rides",
        text: "",
        href: "/transfers",
      },
      {
        title: "Tours in Georgia",
        text: "",
        href: "/tours",
      },
    ],
  },
  transfers: {
    title: "Transfers and Rides",
    subtitle:
      "Transparent pricing and neat, comfortable vehicles — no stress. We reply fast in messengers: we confirm details, lock in time and address, and confirm the trip. The car arrives on time, there's enough trunk space for suitcases and gear, and the cabin is always clean.",
    routeTitle: "Popular routes and prices",
    routeHint:
      "Prices are shown as \"from\" and depend on season, time, and number of passengers. For an exact price — message us.",
    transportTitles: { car: "Cars", minivan: "Minivans" },
    routes: [
      { from: "Tbilisi", to: "Gudauri", transport: "car", priceFrom: "from 160 ₾" },
      { from: "Tbilisi", to: "Bakuriani", transport: "car", priceFrom: "from 210 ₾" },
      { from: "Vladikavkaz", to: "Gudauri", transport: "car", priceFrom: "8,000₽" },
      { from: "Tbilisi", to: "Vladikavkaz", transport: "car", priceFrom: "11,000₽" },
      { from: "Tbilisi", to: "Gudauri", transport: "minivan", priceFrom: "from 200 ₾" },
      { from: "Tbilisi", to: "Bakuriani", transport: "minivan", priceFrom: "from 320 ₾" },
      { from: "Vladikavkaz", to: "Gudauri", transport: "minivan", priceFrom: "from 12,000₽" },
      { from: "Tbilisi", to: "Vladikavkaz", transport: "minivan", priceFrom: "from 15,000₽" },
    ],
    routeNote: "All routes are also available in the reverse direction.",
    conditionsTitle: "Trip conditions",
    conditions: [
      "Non-smoking vehicles",
      "Luggage space + separate space for skis/boards (on request)",
      "Comfortable seating and seat belts",
      "Stops on the way if needed (coffee/restroom)",
    ],
    addonsTitle: "Additional services",
    addons: [
      "Instructor/guide (on request)",
      "Help with accommodation (options + booking)",
      "Custom routes across Georgia",
      "Trips to Russia and Armenia (ask for details)",
    ],
  },
  tours: {
    title: "Tours in Georgia",
    subtitle:
      "We organize great tours all across Georgia — we'll tailor the route to your wishes and pace. Everything is planned in advance: departure time, stops, beautiful locations, and a comfortable drive. You just enjoy the views and the trip — we handle the organization.",
    featuredTitle: "Top 3 popular routes",
    featured: [
      {
        id: "kakheti",
        title: "Kakheti: a wine day",
        duration: "1 day",
        highlight: "Wine, tastings, a beautiful sunset, and cozy places.",
        image: "/images/tour-1.svg",
      },
      {
        id: "kazbegi",
        title: "Kazbegi and mountain views",
        duration: "1 day",
        highlight: "Mountains, viewpoints, photo stops, and Caucasus vibes.",
        image: "/images/tour-2.svg",
      },
      {
        id: "mtskheta",
        title: "Mtskheta + Jvari",
        duration: "4–6 hours",
        highlight: "History, panoramas, and an easy route near Tbilisi.",
        image: "/images/tour-3.svg",
      },
    ],
    allTitle: "All destinations we've already taken tourists to",
    allDirectionsSubtitle: "If you don't see your direction — message us and we'll tailor a custom route.",
    allRoutes: [
      {
        name: "Tbilisi, city tour",
        description: "Old town, sulfur baths, Narikala, viewpoints, modern part of the city.",
      },
      {
        name: "Mtskheta",
        description: "Ancient capital near Tbilisi, main temples and panoramas.",
      },
      {
        name: "Military Georgian Road",
        description: "Ananuri, viewpoints, passes, views, road to mountain regions.",
      },
      {
        name: "Kazbegi, Stepantsminda",
        description: "Kazbek, Gergeti Church, valleys, walks, mountain landscapes.",
      },
      {
        name: "Gudauri",
        description: "Mountain resort, viewpoints, beautiful panoramas any time of year.",
      },
      {
        name: "Truso Valley",
        description: "Route for walks, unusual landscapes, mountain river, seasonal destination.",
      },
      {
        name: "Juta",
        description: "Popular place for hiking, pristine views, mountain trails.",
      },
      {
        name: "Svaneti, Mestia and Ushguli",
        description: "Svan towers, big mountains, hiking, one of the main mountain locations in the country.",
      },
      {
        name: "Tusheti",
        description: "Remote mountain villages, wild nature, seasonal road and more complex logistics.",
      },
      {
        name: "Khevsureti, Shatili",
        description: "Fortress villages, mountain gorges, very atmospheric route.",
      },
      {
        name: "Kakheti",
        description: "Wine region, tastings, wineries, Alazani Valley, gastronomy tours.",
      },
      {
        name: "Borjomi",
        description: "Mineral water, park, forest walks, quiet rest.",
      },
      {
        name: "Bakuriani",
        description: "Mountain resort, skiing in winter, walks and nature in summer.",
      },
      {
        name: "Kutaisi",
        description: "Convenient starting point for Western Georgia and natural routes around.",
      },
      {
        name: "Martvili, canyon",
        description: "Canyon, water, walking routes, one of the most popular natural locations.",
      },
      {
        name: "Okatse, canyon",
        description: "Trails and scenic routes, often combined with waterfalls in the region.",
      },
      {
        name: "Tskhaltubo, caves",
        description: "Prometheus Cave and other natural places nearby.",
      },
      {
        name: "Sataplia",
        description: "Cave and reserve area near Kutaisi.",
      },
      {
        name: "Uplistsikhe",
        description: "Ancient cave city, historical location for a day trip.",
      },
      {
        name: "Gori",
        description: "Historical city in the center of the country, convenient to combine with Uplistsikhe.",
      },
      {
        name: "Vardzia",
        description: "Cave monastery complex, usually a separate day trip.",
      },
      {
        name: "Akhaltsikhe",
        description: "Fortress and old town, often part of route to Vardzia.",
      },
      {
        name: "David Gareja",
        description: "Monastery complex in semi-desert landscapes, unusual views.",
      },
      {
        name: "Batumi",
        description: "Sea, promenade, city walks, beach rest.",
      },
      {
        name: "Mountain Adjara",
        description: "Mountain roads, villages, nature, waterfalls, day trips from Batumi.",
      },
    ],
  },
  reviews: {
    title: "Customer reviews",
    items: [
      {
        name: "Kristina",
        text: "We traveled Tbilisi – Bakuriani and back — everything was comfortable, calm, and safe. Thanks to Sergey for the great organization!",
        tgLink: "https://t.me/SergBushin1984",
      },
      {
        name: "Evgeny",
        text: "The Kazbegi trip Sergey organized was excellent: everything was on time, comfortable, and without any fuss. The route was well planned — top level. Thanks for an awesome tour — we'll definitely come back!",
        tgLink: "https://t.me/SergBushin1984",
      },
      {
        name: "Aleksandr",
        text: "Best value for money: fast and clear support, professional drivers, easy booking, and most importantly — reliability. I've traveled with Sergey multiple times: his drivers have never been late — actually, they always arrived early.",
        tgLink: "https://t.me/SergBushin1984",
      },
    ],
  },
  contacts: {
    title: "Contacts and quick chat",
    hint: "We'll answer quickly — message or call in the way that's most convenient for you.",
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
    defaultTitle: "Transfers and tours in Georgia — prices, routes, fast chat",
    defaultDescription:
      "Private transfers: Tbilisi, Gudauri, Bakuriani, Vladikavkaz and more. Tours in Georgia: top routes, photos, reviews. Fast contact via Telegram and WhatsApp.",
    keywords: [
      "georgia transfer",
      "tbilisi gudauri transfer",
      "tours in georgia",
      "transport georgia",
      "transfer georgia",
      "tours georgia",
    ],
    city: "Tbilisi",
    country: "Georgia",
  },
};

export default en;
