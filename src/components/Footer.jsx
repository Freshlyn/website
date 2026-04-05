import './Footer.css';

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
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <circle cx="20" cy="20" r="19" fill="#3a7d44" />
                <path d="M20 7 C13 13 9 18 11 25 C13 29 16.5 31.5 20 31.5 C23.5 31.5 27 29 29 25 C31 18 27 13 20 7Z" fill="#6abf69" />
                <path d="M20 13 C20 13 15.5 20.5 17.5 26 C18.5 29 20 31.5 20 31.5" stroke="#e8f5e9" strokeWidth="1.6" fill="none" />
              </svg>
              <div>
                <div className="footer-logo-name">FRESHLYN NATURE</div>
                <div className="footer-logo-tag">Naturally Fresh Everyday</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Farm-fresh organic, natural, and premium veg products directly to your doorstep.
            </p>
            <p className="footer-mission-line">
              "Our mission: a healthy, organic, chemical-free diet."
            </p>
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
          <p>FreshLyn Organic Veg Products | Pure Veg, Dairy & Bengal Sweets</p>
        </div>
      </div>

    </footer>
  );
}
