import NavBar from "@/app/components/NavBar";
import HomeCarousel from "./components/HomeCarousel";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main >
      <NavBar />
      <HomeCarousel />
      <section className="md:p-32 p-6">
        <h2 className="text-6xl font-extrabold text-iggreen">Domingo 19h</h2>
        <p></p>
      </section>
      <ContactSection />
    </main>
  );
}