import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { products } from "@/data/products";

export default function NewArrivals() {
  return (
    <section className="bg-white py-28">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Latest Drop"
          title="New Arrivals"
          description="Fresh styles crafted for everyday confidence."
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}