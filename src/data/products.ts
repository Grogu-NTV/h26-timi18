// Skref 1
export type Category = {
  slug: string;
  name: string;
};

// Skref 1
export const categories: Category[] = [
  { slug: "ilat", name: "Ílát" },
  { slug: "toskur", name: "Töskur" },
  { slug: "drykkir", name: "Drykkir" },
];

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

// Skref 1 bæta við category við hverja vöru
export const products: Product[] = [
  { id: 1, name: "Kaffibolli", price: 1290, category: "Ílát" },
  { id: 2, name: "Vatnsbrusi", price: 1190, category: "Ílát" },
  { id: 3, name: "Bakpoki", price: 5900, category: "Töskur" },
  { id: 4, name: "Taska", price: 4900, category: "Töskur" },
  { id: 5, name: "Nocco", price: 490, category: "Drykkir" },
  { id: 6, name: "Collab", price: 490, category: "Drykkir" },
];
