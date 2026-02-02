export type TransportType = "car" | "minivan";

export type RoutePrice = {
  from: string;
  to: string;
  transport: TransportType;
  priceFrom: string; // keep as string: "160 ₾" or "$120"
  note?: string;
};

export type FeaturedTour = {
  id: string;
  title: string;
  duration: string;
  highlight: string;
  image: string; // path in /public (для обратной совместимости)
  images?: string[]; // массив изображений для слайдера
};

export type Review = {
  name: string;
  text: string;
  tgLink: string;
};

export type Contacts = {
  phone?: string;
  telegram: string;  // url
  whatsapp: string;  // url
  whatsappMessage?: string;  // url для сообщения
  telegramReviews?: string;  // url на чат с отзывами
  telegramChooseCar?: string;  // url на канал выбора машины
  telegramTours?: string;  // url на программы экскурсий
  instagram?: string;
  facebook?: string;
  vk?: string;
  email?: string;
};

export type SiteContent = {
  locale: "ru" | "en" | "ge";
  brand: { name: string; };
  nav: { home: string; transfers: string; tours: string; contacts?: string; };
  cta: { primary: string; secondary: string; };
  home: {
    title: string;
    subtitle: string;
    bullets: string[];
    cards: Array<{ title: string; text: string; href: string; }>;
    whyTitle?: string;
    quickLinksTitle?: string;
    quickLinksHint?: string;
  };
  transfers: {
    title: string;
    subtitle: string;
    sliderSubtitle?: string;
    routeTitle: string;
    routeHint: string;
    routes: RoutePrice[];
    routeNote?: string;
    transportTitles: { car: string; minivan: string; };
    conditionsTitle: string;
    conditions: string[];
    addonsTitle: string;
    addons: string[];
  };
  tours: {
    title: string;
    subtitle: string;
    featuredTitle: string;
    featured: FeaturedTour[];
    allTitle: string;
    allDirectionsSubtitle: string;
    allRoutes: Array<{
      name: string;
      description: string;
    }>;
  };
  reviews: { title: string; items: Review[]; };
  contacts: { 
    title: string; 
    hint: string; 
    data: Contacts;
    labels?: {
      reviews?: string;
      chooseCar?: string;
      whatsappMessage?: string;
      tours?: string;
    };
  };
  seo: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    city: string;
    country: string;
  };
};
