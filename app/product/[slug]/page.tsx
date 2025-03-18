// app/product/[slug]/page.tsx
import Image from "next/image";
import { products, Product } from "../../data/products";
import CommentsSection from "@/components/CommentsSection";
import PageViewCounter from "@/components/PageViewCounter";

interface PageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  // Unwrap params menggunakan await
  const { slug } = await params;

  const product: Product | undefined = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="relative w-full h-80 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-lg"
        />
      </div>
      <p className="text-lg">{product.description}</p>

      {/* Menampilkan total views untuk halaman produk */}
      <PageViewCounter slug={product.slug} />

      {/* Menampilkan komentar untuk produk */}
      <CommentsSection productSlug={product.slug} />
    </div>
  );
}
