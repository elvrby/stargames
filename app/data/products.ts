// app/data/products.ts
export interface Product {
    id: number;
    slug: string;
    category: "game" | "aplikasi";
    title: string;
    subtitle: string;
    image: string;
    description: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      slug: "grand-theft-auto-v",
      category: "game",
      title: "Grand Theft Auto V",
      subtitle: "Action Story RPG",
      image: "/IMG/GTAV-1.jpg",
      description:
        "Grand Theft Auto V adalah game aksi yang menawarkan dunia terbuka dengan cerita mendalam dan gameplay yang seru.",
    },
    {
      id: 2,
      slug: "elden-ring-nighrein",
      category: "game",
      title: "Elden Ring: NIGHTREIN",
      subtitle: "Action Exploration RPG",
      image: "/IMG/EldenRing-1.png",
      description:
        "Elden Ring: NIGHTREIN adalah game RPG aksi dengan dunia yang luas, penuh tantangan, dan eksplorasi yang menarik.",
    },
    {
      id: 3,
      slug: "microsoft-office",
      category: "aplikasi",
      title: "Microsoft Office",
      subtitle: "Applications",
      image: "/IMG/MSOffice-1.jpg",
      description:
        "Microsoft Office adalah paket aplikasi produktivitas yang meliputi Word, Excel, PowerPoint, dan lain-lain untuk kebutuhan bisnis dan pendidikan.",
    },
    {
      id: 4,
      slug: "adobe-creative-clouds",
      category: "aplikasi",
      title: "Adobe Creative Clouds",
      subtitle: "Applications",
      image: "/IMG/AdobeCC-1.jpg",
      description:
        "Adobe Creative Clouds menyediakan berbagai aplikasi kreatif untuk desain grafis, video editing, dan pembuatan konten digital.",
    },
  ];
  