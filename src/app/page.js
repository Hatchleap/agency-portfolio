import About from "@/component/About";
import Home from "@/component/Home";
import Hero from "@/component/Hero";
import WhereCreateSection from "@/component/Wherecreatesection";
import Image from "next/image";
import StatsSection from "@/component/StatsSection";
import ProcessSection from "@/component/ProcessSection";


export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <WhereCreateSection />
      <ProcessSection />
      <StatsSection />
    </div>
  );
}
