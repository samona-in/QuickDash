import {
  AirVent,
  Armchair,
  Battery,
  Car,
  Droplets,
  Hammer,
  Laptop,
  PaintRoller,
  Plug,
  Refrigerator,
  Sparkles,
  Truck,
  Tv,
  WashingMachine,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/** Single place to swap in the final brand name. */
export const BRAND = "QuickDash";

export type ServiceCategory = {
  title: string;
  tagline: string;
  icon: LucideIcon;
  items: { label: string; icon: LucideIcon }[];
  /** Bento sizing on desktop */
  span: "wide" | "tall" | "base";
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Repairs",
    tagline: "Keep your home running.",
    icon: Wrench,
    span: "wide",
    items: [
      { label: "AC", icon: AirVent },
      { label: "TV", icon: Tv },
      { label: "Laptop", icon: Laptop },
      { label: "Refrigerator", icon: Refrigerator },
      { label: "Washing Machine", icon: WashingMachine },
      { label: "Appliances", icon: Plug },
    ],
  },
  {
    title: "Home",
    tagline: "From leaks to fresh coats.",
    icon: Sparkles,
    span: "tall",
    items: [
      { label: "Cleaning", icon: Sparkles },
      { label: "Plumbing", icon: Droplets },
      { label: "Electrical", icon: Plug },
      { label: "Carpentry", icon: Hammer },
      { label: "Painting", icon: PaintRoller },
    ],
  },
  {
    title: "Auto",
    tagline: "Care for what moves you.",
    icon: Car,
    span: "base",
    items: [
      { label: "Car Wash", icon: Droplets },
      { label: "Detailing", icon: Sparkles },
      { label: "Mechanic", icon: Wrench },
      { label: "Battery", icon: Battery },
      { label: "Puncture", icon: Car },
    ],
  },
  {
    title: "Everyday",
    tagline: "Extra hands, on demand.",
    icon: Truck,
    span: "base",
    items: [
      { label: "Moving", icon: Truck },
      { label: "Installation", icon: Plug },
      { label: "Helpers", icon: Hammer },
      { label: "Furniture Assembly", icon: Armchair },
    ],
  },
];

export type Professional = {
  name: string;
  role: string;
  rating: number;
  jobs: number;
  years: number;
  distanceKm: number;
  visitFee: number;
  skills: string[];
};

export const professionals: Professional[] = [
  {
    name: "Ravi Kumar",
    role: "AC Technician",
    rating: 4.9,
    jobs: 326,
    years: 8,
    distanceKm: 1.2,
    visitFee: 299,
    skills: ["AC", "Refrigerator", "Washing Machine"],
  },
  {
    name: "Suresh Babu",
    role: "AC Technician",
    rating: 4.8,
    jobs: 214,
    years: 5,
    distanceKm: 2.1,
    visitFee: 249,
    skills: ["AC", "Appliances"],
  },
  {
    name: "Lakshmi Devi",
    role: "Home Cleaning",
    rating: 4.9,
    jobs: 412,
    years: 6,
    distanceKm: 0.8,
    visitFee: 199,
    skills: ["Deep Cleaning", "Kitchen", "Bathroom"],
  },
];

export const trustFeatures = [
  {
    title: "Verified profiles",
    body: "Every professional joins with a reviewed identity and skill profile.",
  },
  {
    title: "Ratings & reviews",
    body: "Real ratings from completed jobs, not testimonials we picked.",
  },
  {
    title: "Experience up front",
    body: "Years worked and jobs completed, visible before you book.",
  },
  {
    title: "Transparent pricing",
    body: "See the visit fee and estimates before anyone shows up.",
  },
  {
    title: "Secure payments",
    body: "Pay in the app when the work is done. No cash pressure.",
  },
  {
    title: "Support that answers",
    body: "If something goes wrong, a human helps you sort it out.",
  },
];

export const proBenefits = [
  {
    title: "Build your profile",
    body: "Show your skills, experience and work.",
  },
  {
    title: "Get nearby jobs",
    body: "Receive requests from customers around you.",
  },
  {
    title: "Build your reputation",
    body: "Collect ratings and grow your profile.",
  },
  {
    title: "Grow your income",
    body: "Track jobs, earnings and customers.",
  },
];
