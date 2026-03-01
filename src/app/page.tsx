import Hero from "@/components/sections/Hero";
import CountdownTimer from "@/components/common/CountdownTimer";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import Mentors from "@/components/sections/Mentors";
import FAQ from "@/components/sections/FAQ";
import Sponsors from "@/components/sections/Sponsors";
import Register from "@/components/sections/Register";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CountdownTimer />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <Mentors />
      <FAQ />
      <Sponsors />
      <Register />
      <Footer />
    </main>
  );
}
