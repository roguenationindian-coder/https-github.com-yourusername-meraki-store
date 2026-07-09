export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F5F0]/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <div>
          <h1 className="text-3xl font-bold tracking-[0.35em]">
            MERAKI
            <span className="font-light ml-2">& CO.</span>
          </h1>
        </div>

        <ul className="hidden lg:flex gap-10 uppercase text-sm tracking-widest">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Oversized</a></li>
          <li><a href="#">Regular</a></li>
          <li><a href="#">Hoodies</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="flex gap-5 text-xl">
          <button>♡</button>
          <button>🛒</button>
          <button>👤</button>
        </div>

      </nav>
    </header>
  );
}