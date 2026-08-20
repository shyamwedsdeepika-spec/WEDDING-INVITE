import Vine from "@/components/Vine";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Locations from "@/components/Locations";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <ScrollProgress />
      <Nav />
      <Vine />
      <Hero />
      <Story />
      <Gallery />
      <Schedule />
      <Locations />
      <Countdown />
      <Footer />
    </main>
  );
}
