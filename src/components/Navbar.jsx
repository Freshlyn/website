import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logoImg} alt="Freshlyn Nature" className="logo-img" />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#usp" onClick={() => setMenuOpen(false)}>Specialties</a></li>
          <li><a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a></li>
          <li><Link to="/product-details" onClick={() => setMenuOpen(false)}>Product Details</Link></li>
          <li><Link to="/terms-and-conditions" onClick={() => setMenuOpen(false)}>Terms</Link></li>
        </ul>
      </div>
    </nav>
  );
}
