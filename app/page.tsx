import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        <Hero />
        <FeaturedCollections />
      </main>
    </>
  );
}