import { Layers, Handshake, Wallet, BadgeCheck, Users, Film } from "lucide-react";

export const COLORS = {
  MAGENTA: "#D62460",
  ROSE: "#F06A8A",
  PLUM: "#5A0A2C",
  DARK_GREY_TEXT: "#4F5A60",
  LIGHT_GREY_TEXT: "#C7D1D4",
  WHATSAPP: "#25D366",
};



export const PHONE = {
  PRIMARY: "+919122161317",
  WHATSAPP: "919122161317",
};

export const SECTIONS = {
  SERVICES: "#services",
  ABOUT: "#about",
  WHY_US: "#why-us",
  TESTIMONIALS: "#testimonials",
};

export const SERVICES = [
  {
    title: "Event Management",
    description:
      "Complete wedding & event planning with decor, catering, logistics, beauticians, coordination, & theme-based celebrations.",
    image: "/images/services/event.png",
  },
  {
    title: "Photography",
    description:
      "Candid & traditional photography capturing authentic emotions with cinematic lighting and premium editing.",
    image: "/images/services/photography.png",
  },
  {
    title: "Cinematography",
    description:
      "Cinematic wedding films, storytelling edits, premium equipment, and visually rich cinematic sequences.",
    image: "/images/services/cinematography.png",
  },
  {
    title: "Drone Shoots",
    description:
      "Aerial cinematography with 4K drones — perfect for grand venue shots, baraat entry, and outdoor functions.",
    image: "/images/services/drone.png",
  },
  {
    title: "Makeup & Portfolio Shoots",
    description:
      "Professional makeup shoots, model portfolios, fashion shoots, and premium beauty photography.",
    image: "/images/services/makeup.png",
  },
  {
    title: "Birthday & Anniversary Events",
    description:
      "Theme-based birthday parties, anniversary celebrations, stage decor, and complete event execution.",
    image: "/images/services/birthday.png",
  },
  {
    title: "Corporate Events",
    description:
      "Corporate shoots, award nights, conferences, promotions, brand launch events & documentation.",
    image: "/images/services/corporate.png",
  },
  {
    title: "Destination Weddings",
    description:
      "Complete destination wedding planning with decor, logistics, filming & photography across exotic locations.",
    image: "/images/services/destination.png",
  },
  {
    title: "Album Designing",
    description:
      "Premium album designing with matte, glossy, metallic, and custom luxury print options.",
    image: "/images/services/album.png",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    review:
      "The team delivered exceptional quality. Every moment was beautifully captured with emotion and precision.",
  },
  {
    name: "Priya Verma",
    review:
      "Exceeded all expectations! Elegant planning, smooth execution, and beautiful cinematic results.",
  },
  {
    name: "Rahul Singh",
    review:
      "Professional, creative, and highly reliable. The final output was beyond stunning!",
  },
];



export const WHY_POINTS = [
  { text: "One-stop solution for all special events", icon: <Layers size={48} /> },
  { text: "High client trust and repeat referrals", icon: <Handshake size={48} /> },
  { text: "Budget-friendly to premium packages", icon: <Wallet size={48} /> },
  { text: "Quality-focused execution", icon: <BadgeCheck size={48} /> },
  { text: "Expert professional team", icon: <Users size={48} /> },
  { text: "Cinematic storytelling approach", icon: <Film size={48} /> },
];