import Image from "next/image";
import { Heart } from "lucide-react";

type ProductCardProps = {
  image: string;
  name: string;
  category: string;
  price: number;
};

export default function ProductCard({
  image,
  name,
  category,
  price,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">

      <div className="relative overflow-hidden rounded-3xl bg-zinc-100">

        <Image
          src={image}
          alt={name}
          width={600}
          height={800}
          className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10"></div>

        {/* Wishlist */}
        <button className="absolute right-5 top-5 rounded-full bg-white/90 p-3 backdrop-blur transition-all duration-300 hover:scale-110">
          <Heart size={18} />
        </button>

        {/* Quick View */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg">
            Quick View
          </button>
        </div>

      </div>

      <div className="mt-6">

        <p className="font-body text-xs uppercase tracking-[5px] text-gray-500">
          {category}
        </p>

        <h3 className="font-heading mt-2 text-2xl">
          {name}
        </h3>

        <p className="font-body mt-2 text-lg font-semibold">
          ₹{price}
        </p>

      </div>

    </div>
  );
}