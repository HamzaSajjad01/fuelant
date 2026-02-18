import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Benefits from "./Components/Benefits";
import Testimonials from "./Components/Testimonials";
import FeatureBar from "./Components/FeatureBar";
import Performance from "./Components/Performance";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import HowToUse from "./Components/HowToUse";
import BenefitsPage from "./Components/BenefitsPage";
import Contact from "./Components/Contact";
import QRCodePage from "./Components/QRCodePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME PAGE - SAME SEQUENCE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeatureBar />
              <Product />
              <Performance />
              <Benefits />
              <Testimonials />
            </>
          }
        />

        {/* Navbar Links Pages */}
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/contact" element={<Contact />} />

        {/* QR Code Page */}
        <Route path="/codes" element={<QRCodePage />} /> {/* ✅ New Route */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
