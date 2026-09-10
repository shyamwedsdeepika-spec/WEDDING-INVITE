import Vine from "@/components/Vine";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <ScrollProgress />
      <Nav />
      <Vine />
      <Countdown />
      <Hero />
      <Story />
      <Schedule />
      <Gallery />
      <Footer />
    </main>
  );
}
