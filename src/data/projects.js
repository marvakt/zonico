import market from "../assets/supermarket.jpg";
import pos from "../assets/pos.jpg";
import cctv from "../assets/cctv.jpg";
import hero from "../assets/hero.png";

export const workCategories = [
  {
    slug: "/works/accounting-software",
    title: "Accounting Software",
    audience: "Supermarket, Restaurant, Shops",
    problem: "Manual billing, stock confusion",
    solution: "POS + inventory system",
    result: "Faster billing and clearer stock control",
    image: market,
    highlight: "Billing, inventory, and daily operations in one system",
    works: [
      {
        name: "Supermarket Billing",
        detail: "Barcode checkout, stock updates, and sales summaries.",
        image: market,
      },
      {
        name: "Restaurant POS",
        detail: "Fast order entry, receipt printing, and payment tracking.",
        image: pos,
      },
      {
        name: "Shop Stock Tracking",
        detail: "Inventory monitoring with low-stock alerts and purchase logs.",
        image: hero,
      },
    ],
  },
  {
    slug: "/works/it-services",
    title: "IT Services",
    audience: "Offices, shops, and business teams",
    problem: "Slow setup and unstable office systems",
    solution: "Network, printer, and maintenance support",
    result: "Reliable day-to-day business operations",
    image: pos,
    highlight: "Setup and support that keeps your team moving",
    works: [
      {
        name: "Network Setup",
        detail: "Router configuration, device connection, and office network planning.",
        image: hero,
      },
      {
        name: "Printer Installation",
        detail: "Driver setup, sharing configuration, and printing tests.",
        image: pos,
      },
      {
        name: "System Maintenance",
        detail: "Performance checks, software updates, and troubleshooting.",
        image: market,
      },
    ],
  },
  {
    slug: "/works/cctv-services",
    title: "CCTV Services",
    audience: "Homes, shops, and business premises",
    problem: "No monitoring and weak security visibility",
    solution: "CCTV installation with remote monitoring",
    result: "Safer spaces with 24/7 visibility",
    image: cctv,
    highlight: "Security installation and remote access control",
    works: [
      {
        name: "CCTV Installation",
        detail: "Camera placement, wiring, recorder setup, and testing.",
        image: cctv,
      },
      {
        name: "Remote Monitoring",
        detail: "Mobile access, live viewing, and playback configuration.",
        image: hero,
      },
      {
        name: "Site Security Review",
        detail: "Coverage planning to reduce blind spots and improve safety.",
        image: pos,
      },
    ],
  },
];