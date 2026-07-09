export default function Newsletter() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container-custom max-w-3xl text-center">
        <h2 className="font-heading text-5xl">
          Join the MERAKI Community
        </h2>

        <p className="mt-6 text-zinc-300">
          Get early access to new collections, exclusive offers, and style updates.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full px-6 py-4 text-black outline-none"
          />

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-black hover:bg-zinc-200 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}