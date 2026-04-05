import './USP.css';

const specialties = [
  { name: 'Joynagar er Moa', origin: 'Joynagar', desc: 'Famous traditional sweet from the heart of West Bengal.', icon: '🍡', bg: '#f0faf0' },
  { name: 'Bardhaman er Sitabhog', origin: 'Bardhaman', desc: 'Iconic delicacy of fine white rice flakes and sugar.', icon: '🍚', bg: '#fdf5ec' },
  { name: 'Bardhaman er Mihidana', origin: 'Bardhaman', desc: 'Tiny golden sugar-coated rice pearls, a festive favourite.', icon: '✨', bg: '#f0faf0' },
  { name: 'Shaktigarh er Langcha', origin: 'Shaktigarh', desc: 'Celebrated cylindrical sweet soaked in sugar syrup.', icon: '🍯', bg: '#fdf5ec' },
];

export default function USP() {
  return (
    <section className="usp" id="usp">
      <div className="usp-container">

        <div className="usp-header-row">
          <div className="usp-header-left">
            <p className="section-eyebrow-dark">Our Unique Specialty</p>
            <h2 className="usp-heading">
              The real taste<br />
              of <span className="usp-accent">Bengal.</span>
            </h2>
          </div>
          <div className="usp-header-right">
            <p className="usp-intro">
              At FreshLyn, we go beyond regular grocery delivery. We specialize in sourcing <strong>authentic, traditional products directly from their place of origin</strong> — so you experience the true taste of Bengal.
            </p>
            <div className="usp-annotation">
              <span>Each product sourced to preserve its original taste, quality, and authenticity ✦</span>
            </div>
          </div>
        </div>

        <div className="specialty-grid">
          {specialties.map((s, i) => (
            <div className="specialty-card" key={i} style={{ background: s.bg }}>
              <div className="sc-top">
                <span className="sc-origin">From {s.origin}</span>
                <span className="sc-icon">{s.icon}</span>
              </div>
              <h3 className="sc-name">{s.name}</h3>
              <p className="sc-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="pure-veg-row">
          <div className="pv-left">
            <div className="pv-badge">
              <span className="pv-val">100%</span>
              <span className="pv-lbl">Pure Veg</span>
            </div>
          </div>
          <div className="pv-right">
            <h3 className="pv-title">Pure Veg Promise</h3>
            <p className="pv-body">
              FreshLyn proudly delivers <strong>100% pure veg products</strong> — ensuring every item in our collection aligns with vegetarian households and conscious food choices. From farm-fresh vegetables and dairy to traditional sweets, rice, and regional specialties — our carefully curated range is fully vegetarian, fresh, and naturally sourced.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
