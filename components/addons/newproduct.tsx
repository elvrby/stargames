"use client";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  category: "game" | "aplikasi";
  title: string;
  subtitle: string;
  image: string;
}

const NewProductComponent: React.FC = () => {
  // State untuk kategori yang terpilih, default "all"
  const [selectedCategory, setSelectedCategory] = useState<"all" | "game" | "aplikasi">("all");
  // State untuk toggle dropdown menu kategori
  const [showDropdown, setShowDropdown] = useState(false);

  // Data produk
  const products: Product[] = [
    {
      id: 1,
      category: "game",
      title: "Grand Theft Auto V",
      subtitle: "Action Story RPG",
      image: "/IMG/GTAV-1.jpg",
    },
    {
      id: 2,
      category: "game",
      title: "Elden Ring: NIGHTREIN",
      subtitle: "Action Exploration RPG",
      image: "/IMG/EldenRing-1.png",
    },
    {
      id: 3,
      category: "aplikasi",
      title: "Microsoft Office",
      subtitle: "Applications",
      image: "/IMG/MSOffice-1.jpg",
    },
    {
      id: 4,
      category: "aplikasi",
      title: "Adobe Creative Clouds",
      subtitle: "Applications",
      image: "/IMG/AdobeCC-1.jpg",
    },
  ];

  // Filter produk berdasarkan kategori terpilih
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="mt-10">
      {/* Judul */}
      <div>
        <h2 className="text-3xl font-bold">Latest Games & Apps</h2>
        <span className="text-sm">New Games and Apps For You</span>
      </div>

      {/* Menu Kategori (Dropdown) */}
      <div className="relative mt-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="px-5 py-1 rounded bg-red-800 text-white"
        >
          Category
        </button>
        {showDropdown && (
          <div className="absolute mt-2 bg-zinc-800 shadow rounded w-40 z-10">
            <button
              onClick={() => {
                setSelectedCategory("all");
                setShowDropdown(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-zinc-700"
            >
              All
            </button>
            <button
              onClick={() => {
                setSelectedCategory("game");
                setShowDropdown(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-zinc-700"
            >
              Game
            </button>
            <button
              onClick={() => {
                setSelectedCategory("aplikasi");
                setShowDropdown(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-zinc-700"
            >
              Aplikasi
            </button>
          </div>
        )}
      </div>

      {/* Grid Produk Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-800 rounded-2xl shadowH"
          >
            <div className="relative h-40 w-full">
              <Image
                className="rounded-t-2xl"
                src={product.image}
                alt={`Gambar ${product.title}`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between mt-2 mb-2">
                <span className="text-xs bg-red-800 pl-3 pr-3 rounded-lg">
                  Trends
                </span>
              </div>
              <h2 className="font-bold text-xl">{product.title}</h2>
              <span className="text-xs" style={{ wordSpacing: "0.5rem" }}>
                {product.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProductComponent;
