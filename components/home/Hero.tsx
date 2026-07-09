export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center bg-[#F8F5F0] px-6">
      <div className="max-w-3xl text-center">

        <p className="mb-4 uppercase tracking-[0.45em] text-gray-500">
          Premium Streetwear
        </p>

        <h1 className="mb-6 text-6xl font-bold leading-tight md:text-8xl">
          Wear Your
          <br />
          Identity
        </h1>

        <p className="mx-auto max-w-xl text-lg leading-8 text-gray-600">
          Premium oversized t-shirts, regular fits, hoodies and sweatshirts
          crafted for everyday comfort with luxury quality.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-zinc-800">
            Shop Now
          </button>

          <button className="rounded-full border border-black px-8 py-4 hover:bg-black hover:text-white transition">
            Explore
          </button>
        </div>

      </div>
    </section>
  );
}