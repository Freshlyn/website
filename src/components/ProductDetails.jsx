import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import logoImg from "../assets/logo.png";
import { productCategories } from "../data/productDetails";

const ALL = "all";

export default function ProductDetails() {
  const [activeFilter, setActiveFilter] = useState(ALL);

  useEffect(() => {
    document.title = "Product Details & Nutrition | Freshlyn Nature";
  }, []);

  const visibleCategories =
    activeFilter === ALL
      ? productCategories
      : productCategories.filter((cat) => cat.id === activeFilter);

  return (
    <div className="pd-wrapper">
      <header className="pd-header">
        <Link to="/" className="pd-back-link">
          ← Back to Home
        </Link>
        <div className="pd-logo-area">
          <img src={logoImg} alt="Freshlyn Nature" className="pd-logo-img" />
        </div>
      </header>

      <main className="pd-container">
        <div className="pd-hero">
          <span className="pd-eyebrow">Nutrition Information</span>
          <h1 className="pd-title">Product Details</h1>
          <p className="pd-intro">
            Nutritional composition, ingredients and storage information for
            products sold by Freshlyn Nature, published in accordance with FSSAI
            labelling requirements.
          </p>
        </div>

        <nav className="pd-filters" aria-label="Filter products by category">
          <button
            className={`pd-filter ${activeFilter === ALL ? "pd-filter-active" : ""}`}
            onClick={() => setActiveFilter(ALL)}
          >
            All Products
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              className={`pd-filter ${activeFilter === cat.id ? "pd-filter-active" : ""}`}
              onClick={() => setActiveFilter(cat.id)}
              style={
                activeFilter === cat.id
                  ? { borderColor: cat.color, color: cat.color }
                  : undefined
              }
            >
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </button>
          ))}
        </nav>

        {visibleCategories.map((cat) => (
          <section key={cat.id} className="pd-category" id={cat.id}>
            <h2 className="pd-category-title" style={{ color: cat.color }}>
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </h2>

            <div className="pd-product-list">
              {cat.products.map((product) => (
                <article key={product.id} className="pd-card" id={product.id}>
                  <div className="pd-card-media">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="pd-card-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="pd-card-body">
                    <h3 className="pd-product-name">{product.name}</h3>
                    <p className="pd-product-desc">{product.description}</p>

                    <div className="pd-nutrition">
                      <div className="pd-nutrition-head">
                        <span className="pd-nutrition-title">
                          Nutritional Information
                        </span>
                        <span className="pd-serving">{product.servingSize}</span>
                      </div>
                      <table className="pd-table">
                        <tbody>
                          {product.nutrition.map((row) => (
                            <tr key={row.label}>
                              <th scope="row">{row.label}</th>
                              <td>{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <dl className="pd-meta">
                      <div className="pd-meta-row">
                        <dt>Ingredients</dt>
                        <dd>{product.ingredients}</dd>
                      </div>
                      <div className="pd-meta-row">
                        <dt>Shelf Life</dt>
                        <dd>{product.shelfLife}</dd>
                      </div>
                      <div className="pd-meta-row">
                        <dt>Storage</dt>
                        <dd>{product.storage}</dd>
                      </div>
                      {product.allergens && (
                        <div className="pd-meta-row">
                          <dt>Allergen Advice</dt>
                          <dd>{product.allergens}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <p className="pd-disclaimer">
          Nutritional values are indicative and may vary slightly between
          batches due to the natural sourcing of our products. Refer to the
          product packaging for the specific manufacturing and best-before dates
          applicable to each pack.
        </p>
      </main>

      <footer className="pd-footer">
        <p>© 2024 Freshlyn Nature · 100% Pure Veg · Organic &amp; Natural</p>
      </footer>
    </div>
  );
}
