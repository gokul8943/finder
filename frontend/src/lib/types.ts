export interface PhoneSpecs {
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  display: string;
  processor: string;
}

export interface Phone {
  rank: number;
  name: string;
  variant: string;
  brand: string;
  price: string;
  badge: string;
  badgeColor: string;
  specs: PhoneSpecs;
  reason: string;
}

export const recommendedPhones: Phone[] = [
  {
    rank: 1,
    name: "realme P4 Pro 5G",
    variant: "Birch Wood · 256 GB",
    brand: "Realme",
    price: "30,999",
    badge: "Best Match",
    badgeColor: "emerald",
    specs: {
      ram: "8 GB",
      storage: "256 GB",
      camera: "50MP + 8MP | 50MP Front",
      battery: "7000 mAh",
      display: "6.8″",
      processor: "Snapdragon 7 Gen 4",
    },
    reason:
      "Best gaming performance with Snapdragon 7 Gen 4. The massive 7000 mAh battery ensures extended gaming sessions, and 256 GB storage is ample for multiple games — perfectly aligned with your budget and use case.",
  },
  {
    rank: 2,
    name: "realme 15 Pro 5G",
    variant: "Flowing Silver · 128 GB",
    brand: "Realme",
    price: "30,999",
    badge: "Top Camera",
    badgeColor: "sky",
    specs: {
      ram: "8 GB",
      storage: "128 GB",
      camera: "50MP + 50MP | 50MP Front",
      battery: "7000 mAh",
      display: "6.8″",
      processor: "Snapdragon 7 Gen 4",
    },
    reason:
      "Same top-tier Snapdragon 7 Gen 4 and 7000 mAh battery as the #1 pick — making it equally powerful for gaming. The triple 50MP camera system is a standout upgrade, with slightly less storage as the trade-off.",
  },
  {
    rank: 3,
    name: "realme 15 5G",
    variant: "Flowing Silver · 256 GB",
    brand: "Realme",
    price: "31,999",
    badge: "+₹1K Over",
    badgeColor: "amber",
    specs: {
      ram: "8 GB",
      storage: "256 GB",
      camera: "50MP + 8MP | 50MP Front",
      battery: "7000 mAh",
      display: "6.8″",
      processor: "Dimensity 7300+",
    },
    reason:
      "Dimensity 7300+ delivers solid gaming performance at scale. Outstanding 7000 mAh battery for marathon sessions and generous 256 GB storage — just ₹1,000 over your target budget.",
  },
  {
    rank: 4,
    name: "realme 14 Pro+ 5G",
    variant: "Bikaner Purple · 256 GB",
    brand: "Realme",
    price: "30,330",
    badge: "Budget Pick",
    badgeColor: "violet",
    specs: {
      ram: "8 GB",
      storage: "256 GB",
      camera: "50MP + 50MP + 8MP | 32MP Front",
      battery: "6000 mAh",
      display: "6.83″",
      processor: "Snapdragon 7s Gen 3",
    },
    reason:
      "Most affordable in the set. Snapdragon 7s Gen 3 handles most games with ease. Versatile triple rear cameras, solid 6000 mAh endurance, and generous 256 GB storage make it the best value-per-rupee option.",
  },
];

export const badgeStyles: Record<string, { bg: string; text: string; dot: string }> = {
  emerald: {
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  sky: {
    bg: "bg-sky-50 border-sky-200",
    text: "text-sky-700",
    dot: "bg-sky-500",
  },
  amber: {
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  violet: {
    bg: "bg-violet-50 border-violet-200",
    text: "text-violet-700",
    dot: "bg-violet-500",
  },
};

export const specLabels: Record<keyof PhoneSpecs, string> = {
  ram: "RAM",
  storage: "Storage",
  camera: "Camera",
  battery: "Battery",
  display: "Display",
  processor: "Chipset",
};