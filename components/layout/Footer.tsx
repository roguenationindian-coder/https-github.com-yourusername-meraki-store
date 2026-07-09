export default function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="container-custom flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h3 className="font-heading text-3xl">
            MERAKI & CO.
          </h3>

          <p className="mt-2 text-sm text-zinc-500">
            Premium Streetwear • Made in India
          </p>
        </div>

        <div className="flex gap-6 text-sm uppercase">
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}