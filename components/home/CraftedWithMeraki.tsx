import Button from "@/components/ui/Button";

export default function CraftedWithMeraki() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="font-body uppercase tracking-[8px] text-gray-400">
              Our Philosophy
            </p>

            <h2 className="font-heading mt-6 text-5xl md:text-6xl leading-tight">
              Crafted
              <br />
              with Meraki.
            </h2>

            <p className="font-body mt-8 max-w-lg text-lg leading-9 text-gray-300">
              Every stitch, every silhouette and every detail is designed
              with intention.

              We don't create clothing.

              We create confidence you can wear.
            </p>

            <div className="mt-12">
              <Button>
                Discover Our Story →
              </Button>
            </div>

          </div>

          {/* Right */}

          <div className="relative h-[650px] overflow-hidden rounded-3xl">

            <img
              src="/images/hero.jpg"
              alt="Meraki"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}