import { useEffect, useState } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "sonner";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { MarqueeBar } from "./components/site/MarqueeBar";
import { Manifesto } from "./components/site/Manifesto";
import { Packages } from "./components/site/Packages";
import { Reviews } from "./components/site/Reviews";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";

function App() {
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const handleSelect = (name) => {
    setSelectedPackage(name);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="noise-overlay" />
      <Toaster theme="dark" position="bottom-right" />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <Manifesto />
        <Packages onSelect={handleSelect} />
        <Reviews />
        <Contact selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
