import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-top">
          <div className="about-left">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="about-heading">
              Honest food.<br />
              Honest<br />
              <span className="heading-accent">sourcing.</span>
            </h2>
          </div>
          <div className="about-right">
            <p className="about-body">
              At <strong>FreshLyn</strong>, we believe healthy living starts with pure food and honest sourcing. Our mission is to provide families with organic vegetables, natural dairy products, premium rice, wholesome pantry items, and authentic traditional sweets — sourced from trusted farms and local producers.
            </p>
            <p className="about-body">
              Every product is carefully selected for <strong>freshness, quality, nutrition, and taste</strong>, so your family enjoys only the best. Whether you need farm-fresh milk, pure ghee, paneer, seasonal vegetables, natural honey, or heritage rice varieties — FreshLyn is your trusted destination.
            </p>
            <div className="mission-line">
              <span className="mission-icon">🌱</span>
              <span className="mission-text">Our mission: we provide a healthy and organic, chemical-free diet.</span>
            </div>
          </div>
        </div>

        <div className="about-stats-row">
          {[
            { val: '100%', label: 'Pure Veg', note: 'always' },
            { val: '0', label: 'Preservatives', note: 'chemical-free' },
            { val: '5+', label: 'Product Categories', note: 'dairy · veg · rice · sweets · pantry' },
            { val: '∞', label: 'Freshness', note: 'everyday' },
          ].map((s, i) => (
            <div className="stat-block" key={i}>
              <span className="stat-val">{s.val}</span>
              <span className="stat-lbl">{s.label}</span>
              <span className="stat-note">{s.note}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
