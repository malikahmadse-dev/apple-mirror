import heroPhone from "@/assets/hero-phone.jpg";
import heroLaptop from "@/assets/hero-laptop.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productTablet from "@/assets/product-tablet.jpg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: string;
  colors?: { name: string; hex: string }[];
  features?: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    tagline: "Hello, Apple Intelligence.",
    description: "A magical new way to interact with iPhone. A stunning titanium design. Camera Control. A16 Pro chip. And Apple Intelligence.",
    price: 999,
    image: heroPhone,
    category: "iPhone",
    colors: [
      { name: "Natural Titanium", hex: "#8B8178" },
      { name: "Blue Titanium", hex: "#394E6A" },
      { name: "White Titanium", hex: "#F2F1EB" },
      { name: "Black Titanium", hex: "#3C3C3D" },
    ],
    features: ["6.3-inch display", "A18 Pro chip", "48MP camera system", "Titanium design", "Apple Intelligence"],
    isNew: true,
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    tagline: "A new satisfying experience.",
    description: "Built for Apple Intelligence. Featuring Camera Control, a new chip, and vibrant colors.",
    price: 799,
    image: heroPhone,
    category: "iPhone",
    colors: [
      { name: "Ultramarine", hex: "#3F51B5" },
      { name: "Teal", hex: "#009688" },
      { name: "Pink", hex: "#E91E63" },
      { name: "White", hex: "#F5F5F5" },
      { name: "Black", hex: "#212121" },
    ],
    features: ["6.1-inch display", "A18 chip", "48MP camera", "Action button"],
  },
  {
    id: "macbook-air-m4",
    name: "MacBook Air",
    tagline: "Lean. Mean. M4 machine.",
    description: "The world's best-selling laptop, supercharged by the M4 chip with Apple Intelligence built in.",
    price: 1099,
    image: heroLaptop,
    category: "Mac",
    colors: [
      { name: "Midnight", hex: "#1D1D2C" },
      { name: "Starlight", hex: "#F0E6D3" },
      { name: "Space Gray", hex: "#7D7E80" },
      { name: "Silver", hex: "#E3E4E5" },
    ],
    features: ["M4 chip", "13.6-inch Liquid Retina", "18-hour battery", "1080p FaceTime camera", "Apple Intelligence"],
    isNew: true,
  },
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro",
    tagline: "The most advanced Mac laptops.",
    description: "The most advanced Mac laptops for demanding workflows. M4 Pro and M4 Max chips.",
    price: 1599,
    image: heroLaptop,
    category: "Mac",
    colors: [
      { name: "Space Black", hex: "#1D1D1F" },
      { name: "Silver", hex: "#E3E4E5" },
    ],
    features: ["M4 Pro or M4 Max", "Up to 24-hour battery", "Liquid Retina XDR", "ProMotion"],
  },
  {
    id: "ipad-pro-m4",
    name: "iPad Pro",
    tagline: "Thinnovation.",
    description: "The thinnest Apple product ever. M4 chip. Ultra Retina XDR display. And Apple Pencil Pro.",
    price: 1099,
    image: heroLaptop,
    category: "iPad",
    colors: [
      { name: "Space Black", hex: "#1D1D1F" },
      { name: "Silver", hex: "#E3E4E5" },
    ],
    features: ["M4 chip", "Ultra Retina XDR", "Apple Pencil Pro", "Thinnest Apple product"],
    isNew: true,
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    tagline: "Fresh Air.",
    description: "Supercharged by M3. Two sizes. Works with Apple Pencil Pro.",
    price: 599,
    image: heroLaptop,
    category: "iPad",
    features: ["M3 chip", "11\" and 13\"", "Liquid Retina", "Apple Pencil Pro support"],
  },
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    tagline: "Next-level adventure.",
    description: "The most rugged and capable Apple Watch pushes the boundaries of adventure.",
    price: 799,
    image: productWatch,
    category: "Watch",
    colors: [
      { name: "Natural Titanium", hex: "#8B8178" },
      { name: "Black Titanium", hex: "#3C3C3D" },
    ],
    features: ["S9 SiP", "Precision dual-frequency GPS", "3000 nits", "Action Button", "Depth gauge"],
  },
  {
    id: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    tagline: "Thinstant classic.",
    description: "The thinnest Apple Watch yet. Bigger display. Faster charging.",
    price: 399,
    image: productWatch,
    category: "Watch",
    isNew: true,
    features: ["S10 chip", "Bigger display", "Fast charging", "Sleep Apnea detection"],
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2",
    tagline: "Iconic. Now supersonic.",
    description: "Adaptive Audio. Hearing health features. USB‑C charging. A premium listening experience.",
    price: 249,
    image: productEarbuds,
    category: "AirPods",
    features: ["H2 chip", "Active Noise Cancellation", "Adaptive Audio", "Hearing Health", "USB-C"],
    isNew: true,
  },
  {
    id: "airpods-4",
    name: "AirPods 4",
    tagline: "Designed to be heard.",
    description: "Rebuilt from the sound up. Open-ear comfort. Personalized Spatial Audio.",
    price: 129,
    image: productEarbuds,
    category: "AirPods",
    features: ["H2 chip", "Personalized Spatial Audio", "Dust and water resistant"],
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    tagline: "The ultimate listening experience.",
    description: "High-fidelity audio with Active Noise Cancellation and Spatial Audio.",
    price: 549,
    image: productEarbuds,
    category: "AirPods",
    colors: [
      { name: "Midnight", hex: "#1D1D2C" },
      { name: "Blue", hex: "#394E6A" },
      { name: "Purple", hex: "#635E78" },
      { name: "Orange", hex: "#E8703A" },
      { name: "Starlight", hex: "#F0E6D3" },
    ],
    features: ["H1 chip", "Active Noise Cancellation", "Spatial Audio", "USB-C", "20-hour battery"],
  },
  {
    id: "homepod",
    name: "HomePod",
    tagline: "Room-filling sound.",
    description: "A powerful speaker that uses computational audio for immersive sound anywhere in the room.",
    price: 299,
    image: productTablet,
    category: "TV & Home",
    colors: [
      { name: "Midnight", hex: "#1D1D2C" },
      { name: "White", hex: "#F5F5F5" },
    ],
    features: ["S7 chip", "Room sensing", "Siri", "Sound Recognition", "Matter support"],
  },
  {
    id: "apple-tv-4k",
    name: "Apple TV 4K",
    tagline: "The icons of entertainment.",
    description: "Stream it all on Apple TV 4K. Dolby Vision. Dolby Atmos. Apple Fitness+. Apple Arcade.",
    price: 129,
    image: productTablet,
    category: "TV & Home",
    features: ["A15 Bionic", "4K HDR", "Dolby Vision", "Dolby Atmos", "Siri Remote"],
  },
];

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
