export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="flex h-screen flex-col items-center justify-center text-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[8px] text-gray-500">
          Premium Clothing Brand
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          MERAKI & CO
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Luxury streetwear crafted for those who wear confidence.
          Premium oversized tees, hoodies, sweatshirts and more.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-black px-8 py-3 text-white hover:bg-zinc-800 transition">
            Shop Now
          </button>

          <button className="rounded-full border border-black px-8 py-3 hover:bg-black hover:text-white transition">
            Explore
          </button>
        </div>
      </section>
    </main>
  );
}