import { SiteContent } from "./types";

const en: SiteContent = {
  locale: "en",
  brand: {
    name: "Georgia Transfers & Tours",
    tagline: "Transfers, passenger transport, and tours across Georgia — fast, comfortable, and hassle-free.",
  },
  nav: { home: "Home", transfers: "Transfers", tours: "Tours" },
  cta: {
    primary: "Message on Telegram",
    secondary: "Message on WhatsApp",
  },
  home: {
    title: "Transfers and Tours in Georgia",
    subtitle:
      "Clear pricing, comfortable and clean cars, and quick replies in messengers — you’re always in touch and know what’s going on. We make the trip easy at every step: we quickly accept your request, уточняем детали маршрута и времени, confirm the booking, and arrive exactly where needed. We also organize great tours around Georgia — we’ll match the route to your preferences and show the best places without extra fuss.",
    bullets: [
      "We’ve built our reputation for years — only trusted drivers.",
      "Plenty of space for luggage (suitcases, skis/snowboard). No smoking in the car — clean and comfortable.",
      "Private trips from anywhere in Georgia to anywhere in Georgia, and also to Russia and Armenia — available both ways.",
      "We can help you book trusted accommodation in Tbilisi, Gudauri, Bakuriani, and Batumi for your vacation.",
    ],
    cards: [
      { title: "Transfers and Transport", text: "", href: "/transfers" },
      { title: "Tours in Georgia", text: "", href: "/tours" },
    ],
  },
  transfers: {
    title: "Transfers and Transport",
    subtitle:
      "Transparent pricing and neat, comfortable vehicles — no unnecessary hassle. We reply quickly in messengers: confirm details, lock in the time and address, and confirm the ride. The car arrives on time, there’s enough trunk space for suitcases and gear, and the cabin is always clean.",
    routeTitle: "Popular routes and prices",
    routeHint:
      "Prices are shown as “from” and depend on season, time, and number of passengers. For an exact price — message us.",
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
    routeNote: "All routes are available both ways.",
    conditionsTitle: "Trip conditions",
    conditions: [
      "Non-smoking cars",
      "Luggage space + separate space for skis/boards (on request)",
      "Comfortable seating and seat belts",
      "Stops on the way if needed (coffee/restroom)",
    ],
    addonsTitle: "Extra services",
    addons: [
      "Instructor/guide (on request)",
      "Help with accommodation (options and booking)",
      "Custom routes around Georgia",
      "Trips to Russia and Armenia (ask for details)",
    ],
  },
  tours: {
    title: "Tours in Georgia",
    subtitle:
      "We organize great tours all across Georgia — we’ll match the route to your preferences and travel pace. Everything is planned in advance: departure time, stops, beautiful locations, and a comfortable ride. You just enjoy the views and the trip — we handle the organization.",
    featuredTitle: "Top 3 popular routes",
    featured: [
      {
        id: "kazbegi",
        title: "Tbilisi → Mtskheta → Georgian Military Road → Kazbegi (Stepantsminda)",
        duration: "1 day",
        highlight:
          "Along the way, people usually stop at Ananuri, viewpoints, Gudauri, and the main highlight is Gergeti Trinity Church with a view of Mount Kazbek.",
        image: "/images/tour1-1.jpg",
        images: [
          "/images/tour1-1.jpg",
          "/images/tour1-2.jpg",
          "/images/tour1-3.jpg",
          "/images/tour1-4.jpg",
          "/images/tour1-5.jpg",
          "/images/tour1-6.jpg",
          "/images/tour1-7.jpg",
          "/images/tour1-8.jpg",
          "/images/tour1-9.jpg",
          "/images/tour1-10.jpg",
          "/images/tour1-11.jpg",
        ],
      },
      {
        id: "kakheti",
        title: "Tbilisi → Kakheti (wine region) → Sighnaghi / Telavi / Alazani Valley",
        duration: "1 day",
        highlight:
          "The tastiest route: wineries, tastings, Sighnaghi (a small town with views), and often Bodbe Monastery is included.",
        image: "/images/tour2-1.jpg",
        images: [
          "/images/tour2-1.jpg",
          "/images/tour2-2.jpg",
          "/images/tour2-3.jpg",
          "/images/tour2-4.jpg",
          "/images/tour2-5.jpg",
          "/images/tour2-6.jpg",
          "/images/tour2-7.jpg",
          "/images/tour2-8.jpg",
        ],
      },
      {
        id: "svaneti",
        title: "Kutaisi or Tbilisi → Svaneti (Mestia → Ushguli)",
        duration: "1 day",
        highlight:
          "Mountain views, medieval Svan towers, hiking — the classic “wow” mountain route in Georgia.",
        image: "/images/tour3-1.jpg",
        images: [
          "/images/tour3-1.jpg",
          "/images/tour3-2.jpg",
          "/images/tour3-3.jpg",
          "/images/tour3-4.jpg",
          "/images/tour3-5.jpg",
          "/images/tour3-6.jpg",
          "/images/tour3-7.jpg",
          "/images/tour3-8.jpg",
        ],
      },
    ],
    allTitle: "All destinations we’ve already taken tourists to",
    allDirectionsSubtitle: "If you don’t see the destination you want — message us, we’ll create a custom route.",
    allRoutes: [
      {
        name: "Tbilisi city tour",
        description: "Old Town, sulfur baths, Narikala, viewpoints, and the modern part of the city.",
      },
      {
        name: "Mtskheta",
        description: "The ancient capital near Tbilisi, main churches and panoramic views.",
      },
      {
        name: "Georgian Military Road",
        description: "Ananuri, viewpoints, passes, scenic views, and the road to the mountain regions.",
      },
      {
        name: "Kazbegi, Stepantsminda",
        description: "Mount Kazbek, Gergeti Trinity Church, valleys, walks, and mountain landscapes.",
      },
      {
        name: "Gudauri",
        description: "Mountain resort, viewpoints, and beautiful panoramas all year round.",
      },
      {
        name: "Truso Valley",
        description: "A walking route with unusual landscapes and a mountain river; seasonal destination.",
      },
      {
        name: "Juta",
        description: "A popular spot for hiking, clean views, and mountain trails.",
      },
      {
        name: "Svaneti, Mestia and Ushguli",
        description: "Svan towers, big mountains, hiking — one of Georgia’s top mountain regions.",
      },
      {
        name: "Tusheti",
        description: "Remote mountain villages, wild nature, seasonal road, and more complex logistics.",
      },
      {
        name: "Khevsureti, Shatili",
        description: "Fortress villages, mountain gorges, and a very atmospheric route.",
      },
      {
        name: "Kakheti",
        description: "Wine region: tastings, wineries, Alazani Valley, and гастротуры.",
      },
      {
        name: "Borjomi",
        description: "Mineral water, park, forest walks, and a спокойный отдых.",
      },
      {
        name: "Bakuriani",
        description: "Mountain resort: skiing in winter, walks and nature in summer.",
      },
      {
        name: "Kutaisi",
        description: "A convenient base for Western Georgia and nature routes nearby.",
      },
      {
        name: "Martvili Canyon",
        description: "Canyon, water, walking paths — one of the most popular nature spots.",
      },
      {
        name: "Okatse Canyon",
        description: "Trails and viewpoints; often combined with waterfalls in the region.",
      },
      {
        name: "Tskaltubo caves",
        description: "Prometheus Cave and other nature places nearby.",
      },
      {
        name: "Sataplia",
        description: "A cave and protected area near Kutaisi.",
      },
      {
        name: "Uplistsikhe",
        description: "An ancient cave city — a historical day trip destination.",
      },
      {
        name: "Gori",
        description: "A historic city in central Georgia, easy to combine with Uplistsikhe.",
      },
      {
        name: "Vardzia",
        description: "A cave monastery complex, usually a separate full-day trip.",
      },
      {
        name: "Akhaltsikhe",
        description: "A fortress and old town, often part of the route to Vardzia.",
      },
      {
        name: "David Gareji",
        description: "Monastery complex in semi-desert landscapes with unusual views.",
      },
      {
        name: "Batumi",
        description: "Sea, promenade, city walks, and beach отдых.",
      },
      {
        name: "Mountain Adjara",
        description: "Mountain roads, villages, nature, waterfalls — day trips from Batumi.",
      },
    ],
  },
  reviews: {
    title: "Customer reviews",
    items: [
      {
        name: "Kristina",
        text: "We traveled Tbilisi – Bakuriani and back — everything was comfortable, calm, and safe. Thanks to Sergey for great organization!",
        tgLink: "https://t.me/SergBushin1984",
      },
      {
        name: "Evgeniy",
        text: "The Kazbegi trip Sergey organized was excellent: on time, comfortable, and without any extra hassle. The route was well planned — top level. Thanks for an awesome tour — we’ll definitely book again!",
        tgLink: "https://t.me/SergBushin1984",
      },
      {
        name: "Alexander",
        text: "Best value for money: fast and clear support, professional drivers, easy booking, and most importantly — reliability. I traveled with Sergey several times: his drivers never arrived late — they always came early.",
        tgLink: "https://t.me/SergBushin1984",
      },
    ],
  },
  contacts: {
    title: "Contacts and quick chat",
    hint: "We reply fast — message or call in the way that’s most convenient for you.",
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
    defaultTitle: "Transfers and tours in Georgia — prices, routes, quick chat",
    defaultDescription:
      "Private transfers: Tbilisi, Gudauri, Bakuriani, Vladikavkaz and more. Tours in Georgia: top routes, photos, reviews. Fast contact via Telegram and WhatsApp.",
    keywords: ["transfer georgia", "tbilisi gudauri transfer", "tours in georgia", "transport georgia", "transfer georgia", "georgia tours"],
    city: "Tbilisi",
    country: "Georgia",
  },
};

export default en;
