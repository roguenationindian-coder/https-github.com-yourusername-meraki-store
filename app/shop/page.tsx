import Navbar from "@/components/layout/Navbar";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32">
        <div className="container-custom">

          <SectionTitle
            eyebrow="Shop"
            title="All Products"
            description="Explore the complete MERAKI & CO collection."
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}