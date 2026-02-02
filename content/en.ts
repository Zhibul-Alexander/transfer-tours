import { SiteContent } from "./types";

const en: SiteContent = {
  locale: "en",
  brand: {
    name: "Georgia Transfers and Tours",
  },
  nav: { home: "Home", transfers: "Transfers", tours: "Tours", contacts: "Contacts" },
  cta: {
    primary: "Message on Telegram",
    secondary: "Message on WhatsApp",
  },
  home: {
    title: "Transfers and Tours in Georgia",
    subtitle:
      "Clear pricing, comfortable and clean cars, and quick replies in messengers — you’re always in touch and know what’s going on. We make the trip easy at every step: we quickly accept your request, confirm route and time details, and confirm the booking, and arrive exactly where needed. We also organize great tours around Georgia — we’ll match the route to your preferences and show the best places without extra fuss.",
    bullets: [
      "We’ve built our reputation for years — only trusted drivers.",
      "Plenty of space for luggage (suitcases, skis/snowboard). The cabin is clean and comfortable.",
      "Private trips from anywhere in Georgia to anywhere in Georgia, and also to Russia — available both ways.",
    ],
    cards: [
      { title: "Transfers and Transport", text: "", href: "/transfers" },
      { title: "Tours in Georgia", text: "", href: "/tours" },
    ],
    whyTitle: "Why it's easy",
    quickLinksTitle: "Quick links",
    quickLinksHint: "Open what you need — routes/prices or tours.",
  },
  transfers: {
    title: "Transfers and Transport",
    subtitle:
      "Transparent pricing and neat, comfortable vehicles — no unnecessary hassle. We reply quickly in messengers: confirm details, lock in the time and address, and confirm the ride. The car arrives on time, there’s enough trunk space for suitcases and gear, and the cabin is always clean.",
    sliderSubtitle: "Different car options available. To clarify — message us.",
    routeTitle: "Popular routes and prices",
    routeHint:
      "Prices are shown as “from” and depend on season, time, and number of passengers. For an exact price — message us.",
    transportTitles: { car: "Cars", minivan: "Minivans" },
    routes: [
      { from: "Tbilisi", to: "Gudauri", transport: "car", priceFrom: "from 160 ₾" },
      { from: "Tbilisi", to: "Bakuriani", transport: "car", priceFrom: "from 210 ₾" },
      { from: "Tbilisi", to: "Vladikavkaz", transport: "car", priceFrom: "11 000 ₽" },
      { from: "Vladikavkaz", to: "Gudauri", transport: "car", priceFrom: "8 000 ₽" },
      { from: "Tbilisi", to: "Gudauri", transport: "minivan", priceFrom: "from 250 ₾" },
      { from: "Tbilisi", to: "Bakuriani", transport: "minivan", priceFrom: "from 300 ₾" },
      { from: "Vladikavkaz", to: "Gudauri", transport: "minivan", priceFrom: "from 12 000 ₽" },
      { from: "Tbilisi", to: "Vladikavkaz", transport: "minivan", priceFrom: "from 15 000 ₽" },
    ],
    routeNote: "All routes are available both ways.",
    conditionsTitle: "Trip conditions",
    conditions: [
      "Luggage space + separate space for skis/boards (on request)",
      "Comfortable seating and seat belts",
      "Stops on the way if needed (coffee/restroom)",
    ],
    addonsTitle: "Extra services",
    addons: [
      "Custom routes around Georgia",
      "Help with accommodation (options and booking)",
      "Trips to Russia (ask for details)",
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
        image: "/images/slider1/tour1-1.webp",
        images: [
          "/images/slider1/tour1-1.webp",
          "/images/slider1/tour1-2.webp",
          "/images/slider1/tour1-3.webp",
          "/images/slider1/tour1-6.webp",
          "/images/slider1/tour1-7.webp",
          "/images/slider1/tour1-8.webp",
          "/images/slider1/tour1-11.webp",
        ],
      },
      {
        id: "kakheti",
        title: "Tbilisi → Kakheti (wine region) → Sighnaghi / Telavi / Alazani Valley",
        duration: "1 day",
        highlight:
          "The tastiest route: wineries, tastings, Sighnaghi (a small town with views), and often Bodbe Monastery is included.",
        image: "/images/slider2/tour2-1.webp",
        images: [
          "/images/slider2/tour2-2.webp",
          "/images/slider2/tour2-4.webp",
          "/images/slider2/tour2-5.webp",
          "/images/slider2/tour2-6.webp",
          "/images/slider2/tour2-7.webp",
          "/images/slider2/tour2-8.webp"
        ],
      },
      {
        id: "svaneti",
        title: "Kutaisi or Tbilisi → Svaneti (Mestia → Ushguli)",
        duration: "1 day",
        highlight:
          "Mountain views, medieval Svan towers, hiking — the classic “wow” mountain route in Georgia.",
        image: "/images/slider3/tour3-1.webp",
        images: [
          "/images/slider3/tour3-1.webp",
          "/images/slider3/tour3-3.webp",
          "/images/slider3/tour3-4.webp",
          "/images/slider3/tour3-5.webp",
          "/images/slider3/tour3-7.webp",
          "/images/slider3/tour3-8.webp",
          "/images/slider3/tour3-9.webp"
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
        description: "Wine region: tastings, wineries, Alazani Valley, and food tours.",
      },
      {
        name: "Borjomi",
        description: "Mineral water, park, forest walks, and a relaxing break.",
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
        description: "Sea, promenade, city walks, and beach relaxation.",
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
        text: "We traveled Tbilisi – Bakuriani and back — everything was comfortable, calm, and safe. Thanks for great organization!",
        tgLink: "https://t.me/+995574408533",
      },
      {
        name: "Evgeniy",
        text: "The Kazbegi trip was excellent: on time, comfortable, and without any extra hassle. The route was well planned — top level. Thanks for an awesome tour — we’ll definitely book again!",
        tgLink: "https://t.me/+995574408533",
      },
      {
        name: "Alexander",
        text: "Best value for money: fast and clear support, professional drivers, easy booking, and most importantly — reliability. I traveled several times: the drivers never arrived late — they always came early.",
        tgLink: "https://t.me/+995574408533",
      },
    ],
  },
  contacts: {
    title: "Contacts and quick chat",
    hint: "We reply fast — message or call in the way that’s most convenient for you.",
    data: {
      phone: "+995 551 532 661",
      telegram: "https://t.me/+995574408533",
      whatsapp: "https://wa.me/995577368489",
      whatsappMessage: "https://wa.me/995577368489",
      telegramReviews: "https://t.me/+995574408533",
      telegramChooseCar: "https://t.me/+995574408533",
      telegramTours: "https://t.me/+995574408533",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/profile.php?id=61576754228243",
      email: "zhibul.alexander.work@gmail.com",
    },
  },
  seo: {
    siteName: "Georgia Transfers and Tours",
    defaultTitle: "Transfers and tours in Georgia — prices, routes, quick chat",
    defaultDescription:
      "Private transfers: Tbilisi, Gudauri, Bakuriani, Vladikavkaz and more. Tours in Georgia: top routes, photos, reviews. Fast contact via Telegram and WhatsApp.",
    keywords: ["transfer georgia", "tbilisi gudauri transfer", "tours in georgia", "transport georgia", "transfer georgia", "georgia tours"],
    city: "Tbilisi",
    country: "Georgia",
  },
};

export default en;
