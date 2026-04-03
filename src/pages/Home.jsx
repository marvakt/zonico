import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

