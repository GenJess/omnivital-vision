import SiteNav from "@/components/SiteNav";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import RitualSystem from "@/components/sections/RitualSystem";
import Platform from "@/components/sections/Platform";
import Experience from "@/components/sections/Experience";
import Roadmap from "@/components/sections/Roadmap";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Philosophy />
      <RitualSystem />
      <Platform />
      <Experience />
      <Roadmap />
      <Footer />
    </div>
  );
}
