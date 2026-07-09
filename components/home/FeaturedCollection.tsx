const products = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    price: "₹999",
    category: "Oversized",
  },
  {
    id: 2,
    name: "Classic Regular Tee",
    price: "₹799",
    category: "Regular",
  },
  {
    id: 3,
    name: "Premium Hoodie",
    price: "₹1,999",
    category: "Hoodie",
  },
  {
    id: 4,
    name: "Heavyweight Sweatshirt",
    price: "₹1,699",
    category: "Sweatshirt",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-2 text-center text-4xl font-bold">
          Featured Collection
        </h2>

        <p className="mb-12 text-center text-gray-500">
          Crafted for everyday confidence.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-72 items-center justify-center bg-gray-200">
                <span className="text-gray-500">
                  Product Image
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-4 text-lg font-bold">
                  {product.price}
                </p>

                <button className="mt-6 w-full rounded-full bg-black py-3 text-white hover:bg-zinc-800">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}