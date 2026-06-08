import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import USP from "./components/USP";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-container">
        <Hero />
        <About />
        <Products />
        <USP />
        <WhyChoose />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
