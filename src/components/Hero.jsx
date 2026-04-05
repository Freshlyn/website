import './Hero.css';
import milkImg from '../assets/milk.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-left">
          <p className="hero-eyebrow">100% Organic &nbsp;·&nbsp; Pure Veg &nbsp;·&nbsp; Farm Fresh</p>
          <h1 className="hero-heading">
            Fresh.<br />
            Organic.<br />
            <span className="hero-heading-accent">Naturally<br />Better.</span>
          </h1>
          <div className="hero-annotation">
            <span className="annotation-text">— Organic Goodness. Natural Taste. Everyday Fresh.</span>
          </div>
          <p className="hero-body">
            Farm-fresh organic vegetables, pure dairy, traditional sweets, premium rice, and pantry essentials — delivered straight from trusted farms to your doorstep.
          </p>
          <div className="hero-actions">
            <a href="#products" className="pill-btn">Explore our products →</a>
            <a href="#about" className="pill-btn pill-btn-dark">Our story →</a>
          </div>
        </div>

        {/* RIGHT — product visual */}
        <div className="hero-right">
          <div className="hero-product-card">
            <img src={milkImg} alt="Freshlyn Milk" className="hero-product-img" />

            {/* Overlaid badge top-left */}
            <div className="badge-topleft">
              <span className="badge-val">100%</span>
              <span className="badge-sub">Pure Veg</span>
            </div>

            {/* Overlaid badge top-right */}
            <div className="badge-topright">
              <span className="badge-icon">🌿</span>
              <span className="badge-label">Chemical<br/>Free</span>
            </div>

            {/* Bottom strip */}
            <div className="product-strip">
              <div className="ps-item">
                <span className="ps-icon">🥛</span>
                <div>
                  <p className="ps-title">Pure Dairy</p>
                  <p className="ps-sub">Farm fresh, daily</p>
                </div>
              </div>
              <div className="ps-divider"></div>
              <div className="ps-item">
                <span className="ps-icon">0</span>
                <div>
                  <p className="ps-title">Preservatives</p>
                  <p className="ps-sub">Always natural</p>
                </div>
              </div>
              <div className="ps-divider"></div>
              <div className="ps-item">
                <span className="ps-icon">🚜</span>
                <div>
                  <p className="ps-title">Farm to Home</p>
                  <p className="ps-sub">Direct sourcing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category pills below card */}
          <div className="hero-cat-row">
            <span className="hcat">🥦 Organic Veggies</span>
            <span className="hcat">🍮 Bengal Sweets</span>
            <span className="hcat">🍚 Heritage Rice</span>
            <span className="hcat">🍯 Natural Honey</span>
          </div>
        </div>

      </div>

      {/* Ticker */}
      <div className="hero-ticker">
        <div className="ticker-track">
          {['Organic Dairy', 'Farm Fresh Vegetables', 'Premium Rice', 'Traditional Sweets', 'Natural Honey', 'Pure Veg', 'Joynagar Moa', 'Chemical-Free', 'Organic Dairy', 'Farm Fresh Vegetables', 'Premium Rice', 'Traditional Sweets', 'Natural Honey', 'Pure Veg'].map((t, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot">✦</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
