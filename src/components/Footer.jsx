import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-cta-strip">
        <div className="fcs-inner">
          <div className="fcs-left">
            <p className="fcs-eyebrow">Experience Freshness</p>
            <h2 className="fcs-heading">
              Pure. Natural.<br />
              <span className="fcs-accent">Fresh.</span>
            </h2>
            <p className="fcs-annotation">Choose organic, natural, and premium veg products for your family today ✦</p>
          </div>
          <div className="fcs-right">
            <div className="fcs-tags">
              <span>🌿 Chemical-Free</span>
              <span>🥛 Pure Dairy</span>
              <span>🥦 Organic Veg</span>
              <span>🍮 Bengali Sweets</span>
              <span>🍚 Heritage Rice</span>
              <span>🍯 Natural Honey</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImg} alt="Freshlyn Nature" className="footer-logo-img" />
            </div>
            <p className="footer-brand-desc">
              Farm-fresh organic, natural, and premium veg products directly to your doorstep.
            </p>
            <p className="footer-mission-line">
              "Our mission: a healthy, organic, chemical-free diet."
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/freshlynnature?utm_source=qr&igsh=dmNpd2M1YXplejV3" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/share/18Zyb7sgva/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li>Organic Dairy</li>
              <li>Fresh Vegetables</li>
              <li>Premium Rice</li>
              <li>Traditional Sweets</li>
              <li>Natural Honey</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Specialties</h4>
            <ul>
              <li>Joynagar er Moa</li>
              <li>Bardhaman er Sitabhog</li>
              <li>Bardhaman er Mihidana</li>
              <li>Shaktigarh er Langcha</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>Our Story</li>
              <li>Pure Veg Promise</li>
              <li>Farm Sourcing</li>
              <li>Quality Checks</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Freshlyn Nature · 100% Pure Veg · Organic & Natural</p>
          <p>
            FreshLyn Organic Veg Products | Pure Veg, Dairy & Bengal Sweets
            &nbsp;·&nbsp;
            <Link to="/terms-and-conditions" className="footer-tnc-link">Terms & Conditions</Link>
            &nbsp;·&nbsp;
            <Link to="/manufacturing-details" className="footer-tnc-link">Manufacturing Details</Link>
            &nbsp;·&nbsp;
            <Link to="/product-details" className="footer-tnc-link">Product Details</Link>
          </p>
        </div>
      </div>

    </footer>
  );
}
