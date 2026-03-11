import heroFight from "@/assets/hero-fight.jpg";
import thumb1 from "@/assets/fight-thumb-1.jpg";
import thumb2 from "@/assets/fight-thumb-2.jpg";
import thumb3 from "@/assets/fight-thumb-3.jpg";
import thumb4 from "@/assets/fight-thumb-4.jpg";
import thumb5 from "@/assets/fight-thumb-5.jpg";
import thumb6 from "@/assets/fight-thumb-6.jpg";

export interface Fight {
  id: string;
  title: string;
  fighter1: Fighter;
  fighter2: Fighter;
  category: string;
  thumbnail: string;
  summary: string;
  date: string;
  views: string;
  featured?: boolean;
  tags: string[];
}

export interface Fighter {
  name: string;
  nickname?: string;
  record: string;
  height: string;
  weight: string;
  reach: string;
  style: string;
  country: string;
}

export const WEIGHT_CLASSES = [
  "Heavyweight",
  "Light Heavyweight",
  "Middleweight",
  "Welterweight",
  "Lightweight",
  "Featherweight",
  "Bantamweight",
  "Women's Strawweight",
  "Women's Flyweight",
] as const;

export const CATEGORIES = [
  "All",
  "Heavyweight",
  "Light Heavyweight",
  "Middleweight",
  "Welterweight",
  "Lightweight",
  "Classic Dream Fights",
  "Rivalries",
  "Fan Requests",
  "Women's Divisions",
] as const;

export const fights: Fight[] = [
  {
    id: "jones-vs-ngannou",
    title: "Jon Jones vs Francis Ngannou",
    fighter1: {
      name: "Jon Jones",
      nickname: "Bones",
      record: "27-1-0",
      height: "6'4\"",
      weight: "248 lbs",
      reach: "84.5\"",
      style: "Wrestling / Striking",
      country: "USA",
    },
    fighter2: {
      name: "Francis Ngannou",
      nickname: "The Predator",
      record: "17-3-0",
      height: "6'4\"",
      weight: "257 lbs",
      reach: "83\"",
      style: "Knockout Artist",
      country: "Cameroon",
    },
    category: "Heavyweight",
    thumbnail: heroFight,
    summary: "The fight fans were robbed of. The greatest of all time meets the hardest puncher in UFC history in a clash that would define a generation.",
    date: "Mar 8, 2026",
    views: "124K",
    featured: true,
    tags: ["Dream Fight", "Heavyweight", "GOAT Debate"],
  },
  {
    id: "gsp-vs-chimaev",
    title: "Prime GSP vs Khamzat Chimaev",
    fighter1: {
      name: "Georges St-Pierre",
      nickname: "Rush",
      record: "26-2-0",
      height: "5'10\"",
      weight: "170 lbs",
      reach: "72\"",
      style: "MMA / Wrestling",
      country: "Canada",
    },
    fighter2: {
      name: "Khamzat Chimaev",
      nickname: "Borz",
      record: "13-0-0",
      height: "6'2\"",
      weight: "170 lbs",
      reach: "75\"",
      style: "Wrestling / Striking",
      country: "Sweden",
    },
    category: "Welterweight",
    thumbnail: thumb1,
    summary: "Can the most dominant welterweight ever handle the new-era destroyer? A clash of eras at 170 pounds.",
    date: "Mar 5, 2026",
    views: "98K",
    tags: ["Classic Dream Fight", "Welterweight"],
  },
  {
    id: "makhachev-vs-khabib",
    title: "Islam Makhachev vs Khabib Nurmagomedov",
    fighter1: {
      name: "Islam Makhachev",
      nickname: "",
      record: "25-1-0",
      height: "5'10\"",
      weight: "155 lbs",
      reach: "70.5\"",
      style: "Sambo / Wrestling",
      country: "Russia",
    },
    fighter2: {
      name: "Khabib Nurmagomedov",
      nickname: "The Eagle",
      record: "29-0-0",
      height: "5'10\"",
      weight: "155 lbs",
      reach: "70\"",
      style: "Sambo / Wrestling",
      country: "Russia",
    },
    category: "Lightweight",
    thumbnail: thumb2,
    summary: "Teammates who would never fight in real life. In the simulation, we settle the debate once and for all.",
    date: "Mar 1, 2026",
    views: "156K",
    tags: ["Fan Request", "Lightweight", "Rivalry"],
  },
  {
    id: "adesanya-vs-silva",
    title: "Israel Adesanya vs Anderson Silva (Prime)",
    fighter1: {
      name: "Israel Adesanya",
      nickname: "The Last Stylebender",
      record: "24-3-0",
      height: "6'4\"",
      weight: "185 lbs",
      reach: "80\"",
      style: "Kickboxing / Striking",
      country: "New Zealand",
    },
    fighter2: {
      name: "Anderson Silva",
      nickname: "The Spider",
      record: "34-11-0",
      height: "6'2\"",
      weight: "185 lbs",
      reach: "77.6\"",
      style: "Muay Thai / Striking",
      country: "Brazil",
    },
    category: "Middleweight",
    thumbnail: thumb3,
    summary: "Two of the greatest strikers in middleweight history. The matrix vs the stylebender — in their absolute primes.",
    date: "Feb 26, 2026",
    views: "87K",
    tags: ["Classic Dream Fight", "Middleweight", "GOAT Debate"],
  },
  {
    id: "mcgregor-vs-diaz-3",
    title: "Conor McGregor vs Nate Diaz III",
    fighter1: {
      name: "Conor McGregor",
      nickname: "The Notorious",
      record: "22-6-0",
      height: "5'9\"",
      weight: "155 lbs",
      reach: "74\"",
      style: "Boxing / Karate",
      country: "Ireland",
    },
    fighter2: {
      name: "Nate Diaz",
      nickname: "",
      record: "21-13-0",
      height: "6'0\"",
      weight: "170 lbs",
      reach: "76\"",
      style: "Boxing / BJJ",
      country: "USA",
    },
    category: "Welterweight",
    thumbnail: thumb4,
    summary: "The trilogy that never happened. 1-1 in the real world. We settle it in the simulation.",
    date: "Feb 20, 2026",
    views: "201K",
    tags: ["Rivalry", "Fan Request", "Welterweight"],
  },
  {
    id: "pereira-vs-jones",
    title: "Alex Pereira vs Jon Jones",
    fighter1: {
      name: "Alex Pereira",
      nickname: "Poatan",
      record: "11-2-0",
      height: "6'4\"",
      weight: "205 lbs",
      reach: "79\"",
      style: "Kickboxing / Striking",
      country: "Brazil",
    },
    fighter2: {
      name: "Jon Jones",
      nickname: "Bones",
      record: "27-1-0",
      height: "6'4\"",
      weight: "248 lbs",
      reach: "84.5\"",
      style: "Wrestling / Striking",
      country: "USA",
    },
    category: "Light Heavyweight",
    thumbnail: thumb5,
    summary: "The knockout artist meets the GOAT. Can Pereira's power overcome Jones's legendary fight IQ?",
    date: "Feb 15, 2026",
    views: "142K",
    tags: ["Dream Fight", "Light Heavyweight", "GOAT Debate"],
  },
  {
    id: "volkanovski-vs-holloway-4",
    title: "Volkanovski vs Holloway IV",
    fighter1: {
      name: "Alexander Volkanovski",
      nickname: "The Great",
      record: "26-3-0",
      height: "5'6\"",
      weight: "145 lbs",
      reach: "71.5\"",
      style: "Boxing / Wrestling",
      country: "Australia",
    },
    fighter2: {
      name: "Max Holloway",
      nickname: "Blessed",
      record: "25-7-0",
      height: "5'11\"",
      weight: "145 lbs",
      reach: "69\"",
      style: "Boxing / Volume Striking",
      country: "USA",
    },
    category: "Lightweight",
    thumbnail: thumb6,
    summary: "One of the greatest rivalries in featherweight history. The fourth chapter is written in the simulation.",
    date: "Feb 10, 2026",
    views: "76K",
    tags: ["Rivalry", "Lightweight"],
  },
];

export const getFeaturedFight = () => fights.find((f) => f.featured) || fights[0];
export const getFightById = (id: string) => fights.find((f) => f.id === id);
export const getFightsByCategory = (cat: string) =>
  cat === "All" ? fights : fights.filter((f) => f.category === cat || f.tags.includes(cat));
