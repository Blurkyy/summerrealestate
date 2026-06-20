export type SiteStatus = "Under Construction" | "Completed" | "Coming Soon";

export interface SiteMedia {
  type: "image" | "video";
  src: string;
}

export interface ProjectSite {
  slug: "bulgaria" | "british-embassy";
  name: string;
  shortName: string;
  location: string;
  status: SiteStatus;
  statusTag: string;
  description: string;
  longDescription: string;
  totalUnits: number;
  unitsRemaining: number;
  hasMap: boolean;
  mapEmbedSrc?: string;
  features: string[];
  heroImagePlaceholder: string;
  heroMedia?: SiteMedia;
  galleryMedia?: SiteMedia[];
  galleryCount: number;
  typologies: number;
}

export const sites: ProjectSite[] = [
  {
    slug: "bulgaria",
    name: "Summer Bulgaria (Behind AU)",
    shortName: "Summer Bulgaria",
    location: "Bulgaria Area, Behind AU, Addis Ababa",
    status: "Under Construction",
    statusTag: "Now Selling",
    description:
      "A new residential development positioned just behind the African Union headquarters — one of the most strategically connected addresses in Addis Ababa.",
    longDescription:
      "Summer Bulgaria sits in one of Addis Ababa's most central and strategically connected locations, directly behind the African Union headquarters. Built for diaspora families who want proximity to the city's diplomatic and business core without sacrificing the calm of a residential compound, this development pairs a prime address with the transparent, structured buying process Summer Real Estate is known for.",
    totalUnits: 0,
    unitsRemaining: 0,
    hasMap: true,
    mapEmbedSrc:
      "https://www.google.com/maps?q=African+Union+Headquarters+Addis+Ababa&output=embed",
    features: [
      "Behind African Union Headquarters",
      "Central, diplomatic-district location",
      "Modern smart home technology",
      "EV charging stations",
      "Secure gated compound",
      "Underground parking",
      "Premium finishes throughout",
      "Flexible diaspora payment plans",
    ],
    heroImagePlaceholder: "Summer Bulgaria — Hero Image",
    heroMedia: { type: "image", src: "/Images/B1.jpg" },
    galleryMedia: [
      { type: "image", src: "/Images/B1.jpg" },
      { type: "image", src: "/Images/B2.jpg" },
    ],
    galleryCount: 6,
    typologies: 0,
  },
  {
    slug: "british-embassy",
    name: "Summer Abtes (British Embassy)",
    shortName: "Summer Abtes",
    location: "British Embassy Area, Addis Ababa (Hill View)",
    status: "Under Construction",
    statusTag: "6 Units Remaining",
    description:
      "Exclusive hillside development under construction near the British Embassy, with panoramic views over the city.",
    longDescription:
      "Exclusive hillside residential development currently under construction with exceptional hill and city views. Nearly sold out with only 6 units remaining from 150 units, reflecting strong demand for this premier location near the British Embassy.",
    totalUnits: 150,
    unitsRemaining: 6,
    hasMap: false,
    features: [
      "Under Construction",
      "Only 6 Units Remaining",
      "Panoramic hill and city views",
      "Premium finishes throughout",
      "Modern smart home technology",
      "EV charging stations",
      "Fitness & wellness center",
      "Rooftop terrace and gardens",
    ],
    heroImagePlaceholder: "Summer Abtes — Hero Image",
    heroMedia: { type: "video", src: "/Images/Ec.mp4" },
    galleryMedia: [
      { type: "image", src: "/Images/Ea.jpg" },
      { type: "image", src: "/Images/Eb.jpg" },
      { type: "video", src: "/Images/Ec.mp4" },
    ],
    galleryCount: 6,
    typologies: 0,
  },
];

export interface DeliveredSite {
  name: string;
  location: string;
  units: number;
  typologies?: number;
  description: string;
  imagePlaceholder: string;
  videos: string[];
}

export const deliveredSites: DeliveredSite[] = [
  {
    name: "Summer Adwa Victory",
    location: "Adwa Hill, Downtown Addis Ababa",
    units: 156,
    typologies: 4,
    description:
      "A landmark completed development in downtown Addis Ababa, fully delivered and fully sold to satisfied diaspora investors.",
    imagePlaceholder: "Summer Adwa Victory — Delivered",
    videos: ["/images/cmrsA.mp4", "/images/cmrsB.mp4"],
  },
];

export const companyStats = {
  unitsDelivered: 156,
  premiumProjects: 2,
  satisfactionRate: "100%",
};

export const contactInfo = {
  email: "summerrealestate51@gmail.com",
  phone: "+251 98 178 9498",
  phoneHref: "tel:+251 98 178 9498",
  telegramHref: "https://t.me/+251981789498",
  address: ["Urael Area", "Addis Ababa, Ethiopia"],
  hours: "Mon–Sun, 9am–6pm",
};
