import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import USP from './components/USP';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <USP />
      <WhyChoose />
      <Footer />
    </div>
  );
}

export default App;
