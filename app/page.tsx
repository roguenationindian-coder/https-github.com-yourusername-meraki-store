export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-6 border-b">
        <h1 className="text-3xl font-bold tracking-widest">
          MERAKI <span className="font-light">& Co.</span>
        </h1>

        <div className="flex gap-8 text-sm uppercase">
          <a href="#">Home</a>
          <a href="#">Oversized</a>
          <a href="#">Regular</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="flex gap-5 text-xl">
          ❤️ 🛒 👤
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-8">
        <h2 className="text-6xl font-extrabold mb-6">
          Wear Your Identity
        </h2>

        <p className="max-w-xl text-lg text-gray-600 mb-10">
          Premium oversized and regular t-shirts designed for comfort,
          confidence and everyday style.
        </p>

        <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="grid md:grid-cols-2 gap-8 px-10 pb-24">
        <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Oversized Collection</h3>
          <p className="text-gray-600">
            Relaxed fit, premium cotton, modern streetwear.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Regular Collection</h3>
          <p className="text-gray-600">
            Classic everyday comfort with premium quality.
          </p>
        </div>
      </section>
    </main>
  );
}