import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/site/Navbar";
import { Footer } from "./components/site/Footer";
import { MobileBar } from "./components/site/MobileBar";
import Home from "./pages/Home";
import DrivingLessons from "./pages/DrivingLessons";
import Reviews from "./pages/Reviews";
import Areas from "./pages/Areas";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-center" richColors />
        <Navbar />
        <main className="pb-20 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/driving-lessons" element={<DrivingLessons />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/areas-we-cover" element={<Areas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
