import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import Essentials from "@/components/Essentials";
import RoadMap from "@/components/RoadMap";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Essentials />
      <RoadMap />
    </div>
  );
}
