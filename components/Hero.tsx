import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-custom">

          <p className="font-body mb-6 uppercase tracking-[8px] text-gray-300">
            Premium Streetwear
          </p>

          <h1 className="font-heading max-w-3xl text-6xl leading-[0.95] text-white md:text-8xl">
            Wear Your
            <br />
            Confidence
          </h1>

          <p className="font-body mt-8 max-w-md text-lg leading-8 text-gray-300">
            Minimal.
            <br />
            Timeless.
            <br />
            Made to Inspire.
          </p>

          <button>
  Shop Collection →
</button>

        </div>
      </div>
    </section>
  );
}