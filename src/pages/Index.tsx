import MobileNav from "@/components/MobileNav";
import DockNav from "@/components/DockNav";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import WhyNow from "@/components/sections/WhyNow";
import RitualSystem from "@/components/sections/RitualSystem";
import Platform from "@/components/sections/Platform";
import Experience from "@/components/sections/Experience";
import Moat from "@/components/sections/Moat";
import Progress from "@/components/sections/Progress";
import Roadmap from "@/components/sections/Roadmap";
import Contact from "@/components/sections/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
      <DockNav />
      <Hero />
      <Problem />
      <WhyNow />
      <RitualSystem />
      <Platform />
      <Experience />
      <Moat />
      <Progress />
      <Roadmap />
      <Contact />
    </div>
  );
}
