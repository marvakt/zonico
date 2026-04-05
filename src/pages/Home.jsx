import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,_#f8fbff_0%,_#f1f8ff_45%,_#f8fbff_100%)] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_64%)]" />
      <div className="pointer-events-none absolute -left-20 top-[30rem] h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[54rem] h-72 w-72 rounded-full bg-sky-300/15 blur-3xl" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;

