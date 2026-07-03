import Image from "next/image";
import { Heart } from "lucide-react";
import Button from "./Button";

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
    <div className="group">

      {/* Image */}
      <div className="relative overflow-hidden rounded-3xl bg-zinc-100">

        <Image
          src={image}
          alt={name}
          width={500}
          height={650}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <button className="absolute right-5 top-5 rounded-full bg-white p-3 shadow-md transition hover:scale-110">
          <Heart size={20} />
        </button>

      </div>

      {/* Product Info */}
      <div className="mt-6">

        <p className="font-body text-sm uppercase tracking-[4px] text-gray-500">
          {category}
        </p>

        <h3 className="font-heading mt-2 text-3xl">
          {name}
        </h3>

        <p className="font-body mt-2 text-lg font-semibold">
          ₹{price}
        </p>

        <div className="mt-6">
          <Button>Add to Cart</Button>
        </div>

      </div>

    </div>
  );
}