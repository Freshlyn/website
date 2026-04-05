import './WhyChoose.css';
import imgFresh   from '../assets/why1_fresh.jpg';
import imgFarm    from '../assets/why2_farm.jpg';
import imgRange   from '../assets/why3_range.jpg';
import imgQuality from '../assets/why4_quality.jpg';
import imgTaste   from '../assets/why5_taste.jpg';
import imgHome    from '../assets/why6_home.jpg';

const reasons = [
  { img: imgFresh,   title: '100% Fresh & Naturally Sourced', desc: 'Organic, natural, and preservative-free food products — always.' },
  { img: imgFarm,    title: 'Farm to Home Delivery',          desc: 'Sourced directly from trusted farms and local producers.' },
  { img: imgRange,   title: 'Wide Product Range',             desc: 'Dairy, vegetables, rice, sweets and pantry — all in one place.' },
  { img: imgQuality, title: 'Quality You Can Trust',          desc: 'Every batch goes through freshness and hygiene checks.' },
  { img: imgTaste,   title: 'Traditional Taste',              desc: 'Authentic flavors of Bengal with the ease of modern access.' },
  { img: imgHome,    title: 'Perfect for Every Home',         desc: 'Ideal for daily groceries, festive needs, and healthy living.' },
];

const idealFor = [
  'Daily family groceries',   'Healthy meal planning',
  'Organic vegetable shopping','Natural dairy needs',
  'Traditional festive sweets','Premium rice lovers',
];

export default function WhyChoose() {
  return (
    <section className="why" id="why">
      <div className="why-container">

        <div className="why-header">
          <p className="section-eyebrow">Our Promise</p>
          <h2 className="why-heading">
            Why choose<br />
            <span className="why-accent">FreshLyn?</span>
          </h2>
        </div>

        <div className="reasons-grid">
          {reasons.map(({ img, title, desc }, i) => (
            <div className="reason-card" key={i}>
              <div className="reason-illust-wrap">
                <img src={img} alt={title} />
              </div>
              <div className="reason-text">
                <h3 className="reason-title">{title}</h3>
                <p className="reason-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ideal-section">
          <div className="ideal-left">
            <h3 className="ideal-title">Perfect for every home.</h3>
            <p className="ideal-subtitle">FreshLyn is the go-to choice for families who value freshness, quality, and authenticity.</p>
            <a href="#products" className="pill-btn">Explore products →</a>
          </div>
          <div className="ideal-right">
            {idealFor.map((item, i) => (
              <div className="ideal-item" key={i}>
                <span className="ideal-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
