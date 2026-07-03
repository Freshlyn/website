import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ManufacturingDetails.css";
import logoImg from "../assets/logo.png";

function IconBuilding() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18" />
      <path d="M6 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2" />
      <path d="M18 12h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2" />
      <path d="M10 6h.01M14 6h.01M10 10h.01M14 10h.01M10 14h.01M14 14h.01" />
      <path d="M10 22v-4h4v4" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export default function ManufacturingDetails() {
  useEffect(() => {
    document.title = "Manufacturing Details & FSSAI | FreshLyn";
  }, []);

  return (
    <div className="md-wrapper">
      <header className="md-header">
        <Link to="/" className="md-back-link">
          ← Back to Home
        </Link>
        <div className="md-logo-area">
          <img src={logoImg} alt="Freshlyn Nature" className="md-logo-img" />
        </div>
      </header>

      <main className="md-container">
        <div className="md-hero">
          <h1 className="md-title">Manufacturing Details</h1>
          <p className="md-intro">
            Manufacturing and food-safety information for products sold by
            Freshlyn Nature, published in accordance with FSSAI labelling
            requirements.
          </p>
        </div>

        <section className="md-section">
          <h2 className="md-section-title">Manufactured &amp; Marketed By</h2>
          <div className="md-card">
            <div className="md-row">
              <span className="md-icon">
                <IconBuilding />
              </span>
              <div className="md-row-body">
                <span className="md-row-label">Company</span>
                <span className="md-row-value">Freshlyn Nature</span>
              </div>
            </div>
            <div className="md-row">
              <span className="md-icon">
                <IconMapPin />
              </span>
              <div className="md-row-body">
                <span className="md-row-label">Registered Address</span>
                <span className="md-row-value">
                  Kolkata, West Bengal, India
                </span>
              </div>
            </div>
            <div className="md-row">
              <span className="md-icon">
                <IconMail />
              </span>
              <div className="md-row-body">
                <span className="md-row-label">Email</span>
                <span className="md-row-value">
                  <a href="mailto:info@freshlynnature.com">
                    info@freshlynnature.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="md-section">
          <h2 className="md-section-title">FSSAI License</h2>
          <div className="md-fssai-card">
            <span className="md-fssai-icon">
              <IconShield />
            </span>
            <div className="md-fssai-body">
              <span className="md-row-label">FSSAI License Number</span>
              <span className="md-fssai-number">XXXXXXXXXXXXXXX</span>
            </div>
          </div>
          <p className="md-note">
            All food, dairy, and consumable products sold by Freshlyn Nature are
            manufactured, processed, and packaged in accordance with applicable
            food safety standards prescribed by the Food Safety and Standards
            Authority of India (FSSAI).
          </p>
        </section>

        <section className="md-section">
          <h2 className="md-section-title">Best Before / Expiry</h2>
          <div className="md-card">
            <div className="md-row">
              <span className="md-icon">
                <IconCalendar />
              </span>
              <div className="md-row-body">
                <span className="md-row-label">Where to check</span>
                <span className="md-row-value">
                  Refer to the product packaging for the specific manufacturing
                  and best-before dates applicable to each product.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="md-footer">
        <p>© 2024 Freshlyn Nature · 100% Pure Veg · Organic &amp; Natural</p>
      </footer>
    </div>
  );
}
