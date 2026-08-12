export type Market = {
  name: string;
  tag: string;
  region: "North America & Caribbean" | "Europe" | "Middle East";
};

export const markets: Market[] = [
  { name: "The Hamptons, NY", tag: "Coastal", region: "North America & Caribbean" },
  { name: "Los Cabos, MX", tag: "Oceanfront", region: "North America & Caribbean" },
  { name: "Big Sky, MT", tag: "Ranch", region: "North America & Caribbean" },
  { name: "La Quinta, CA", tag: "Golf", region: "North America & Caribbean" },
  { name: "Kauai, HI", tag: "Tropical", region: "North America & Caribbean" },
  { name: "Aspen, CO", tag: "Mountain", region: "North America & Caribbean" },

  { name: "Sintra, Portugal", tag: "Estate", region: "Europe" },
  { name: "Comporta, Portugal", tag: "Coastal", region: "Europe" },
  { name: "Perthshire, Scotland", tag: "Historic", region: "Europe" },
  { name: "Lake Como, Italy", tag: "Lake", region: "Europe" },
  { name: "Marbella, Spain", tag: "Coastal", region: "Europe" },
  { name: "Provence, France", tag: "Country Estate", region: "Europe" },

  { name: "Dubai, UAE", tag: "Waterfront", region: "Middle East" },
  { name: "Abu Dhabi, UAE", tag: "Waterfront", region: "Middle East" },
  { name: "Doha, Qatar", tag: "Urban", region: "Middle East" },
  { name: "Riyadh, Saudi Arabia", tag: "Estate", region: "Middle East" },
  { name: "The Red Sea, Saudi Arabia", tag: "Resort", region: "Middle East" },
  { name: "Muscat, Oman", tag: "Coastal", region: "Middle East" },
];

export const regions = [
  "North America & Caribbean",
  "Europe",
  "Middle East",
] as const;
