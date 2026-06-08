import { Link } from "react-router-dom";
import "./TermsAndConditions.css";
import logoImg from "../assets/logo.png";

export default function TermsAndConditions() {
  return (
    <div className="tnc-wrapper">
      <header className="tnc-header">
        <Link to="/" className="tnc-back-link">
          ← Back to Home
        </Link>
        <div className="tnc-logo-area">
          <img src={logoImg} alt="Freshlyn Nature" className="tnc-logo-img" />
        </div>
      </header>

      <main className="tnc-container">
        <h1 className="tnc-title">Terms and Conditions</h1>
        <p className="tnc-date">Last Updated: May 2, 2026</p>
        <p className="tnc-intro">
          Welcome to Freshlyn Nature! These Terms and Conditions govern your use
          of our website, products, and services available at{" "}
          <a
            href="https://freshlynnature.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://freshlynnature.com/
          </a>
          . By accessing or using our website, you agree to comply with and be
          bound by these Terms and Conditions. If you do not agree with any part
          of these terms, please do not use our website.
        </p>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>1. Definitions</h2>
          <p>In these Terms and Conditions:</p>
          <ul>
            <li>
              <strong>"Company," "We," "Us," "Our"</strong> refer to Freshlyn
              Nature.
            </li>
            <li>
              <strong>"User," "You," "Your"</strong> refer to any person
              accessing or using our website.
            </li>
            <li>
              <strong>"Products"</strong> refer to all goods offered for sale
              through our website.
            </li>
            <li>
              <strong>"Services"</strong> refer to all services provided by
              Freshlyn Nature.
            </li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>2. Eligibility</h2>
          <p>By using this website, you confirm that:</p>
          <ul>
            <li>You are at least 18 years old, or</li>
            <li>
              You are using the website under the supervision of a parent or
              legal guardian.
            </li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>3. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, all content on this website, including but
            not limited to text, images, graphics, logos, product descriptions,
            videos, and software, is the exclusive property of Freshlyn Nature
            and is protected by applicable intellectual property laws.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Copy, reproduce, republish, or redistribute any material.</li>
            <li>Sell, rent, or sub-license any content.</li>
            <li>
              Use our trademarks, branding, or logos without prior written
              permission.
            </li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>4. Products and Services</h2>
          <p>
            Freshlyn Nature offers natural, fresh, and premium-quality products.
            We strive to ensure that all product descriptions, images, pricing,
            and availability are accurate.
          </p>
          <p>However, we reserve the right to:</p>
          <ul>
            <li>Modify or discontinue any product without prior notice.</li>
            <li>Correct any errors, inaccuracies, or omissions.</li>
            <li>Limit product quantities at our sole discretion.</li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>5. Food Safety and Product Usage</h2>
          <p>
            All food, dairy, and consumable products sold by Freshlyn Nature are
            manufactured, processed, and packaged in accordance with applicable
            food safety standards, including FSSAI regulations.
          </p>
          <p>Customers are responsible for:</p>
          <ul>
            <li>Checking product labels and expiry dates upon delivery.</li>
            <li>Storing products according to the instructions provided.</li>
            <li>Consuming products before the recommended date.</li>
          </ul>
          <p>
            Freshlyn Nature shall not be liable for any damage, spoilage, or
            health issues arising from improper storage, mishandling, or use
            after delivery.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>6. Orders and Payments</h2>
          <ul>
            <li>All orders are subject to acceptance and availability.</li>
            <li>
              We reserve the right to refuse or cancel any order at our
              discretion.
            </li>
            <li>Full payment must be received before order processing.</li>
            <li>Prices are subject to change without prior notice.</li>
            <li>
              In case of pricing errors, we reserve the right to cancel the
              affected order.
            </li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>7. Shipping and Delivery</h2>
          <ul>
            <li>Delivery timelines are estimates only.</li>
            <li>
              Delays may occur due to unforeseen circumstances, including
              weather, transportation issues, or force majeure events.
            </li>
            <li>
              Ownership and risk transfer to the customer upon successful
              delivery.
            </li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>8. Returns, Refunds, and Cancellations</h2>
          <p>
            Please refer to our separate Return and Refund Policy for detailed
            information regarding returns, refunds, replacements, and
            cancellations.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>9. User Reviews and Comments</h2>
          <p>Users may post reviews, comments, and feedback on our website.</p>
          <p>By submitting content, you represent that:</p>
          <ul>
            <li>The content is accurate and lawful.</li>
            <li>You own or control all rights to the content.</li>
            <li>The content does not violate any third-party rights.</li>
            <li>
              The content is not defamatory, offensive, obscene, or misleading.
            </li>
          </ul>
          <p>
            We reserve the right to monitor, edit, or remove any content without
            prior notice. By posting content, you grant Freshlyn Nature a
            non-exclusive, royalty-free, perpetual, and worldwide license to
            use, reproduce, modify, and publish such content.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>10. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for unlawful purposes.</li>
            <li>Upload malicious software or harmful code.</li>
            <li>Attempt unauthorized access to our systems.</li>
            <li>Interfere with website operations.</li>
            <li>Collect customer data without authorization.</li>
            <li>Engage in fraudulent activities.</li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>11. Hyperlinking</h2>
          <p>
            You may link to our website only in a fair and legal manner that
            does not damage our reputation or imply any association, approval,
            or endorsement without our written consent.
          </p>
          <p>
            We reserve the right to request the removal of any link to our
            website at any time.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>12. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy policies, or practices of such
            external websites.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>13. Privacy Policy</h2>
          <p>
            Your use of this website is also governed by our Privacy Policy.
            Please review it carefully.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>14. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Freshlyn Nature shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from:
          </p>
          <ul>
            <li>Your use of our website.</li>
            <li>Purchase or use of our products.</li>
            <li>Service interruptions.</li>
            <li>Errors or omissions in website content.</li>
          </ul>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>15. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Freshlyn Nature, its
            directors, employees, affiliates, and partners from any claims,
            liabilities, damages, losses, or expenses arising out of your breach
            of these Terms.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>16. Force Majeure</h2>
          <p>
            Freshlyn Nature shall not be held liable for any failure or delay in
            performance resulting from events beyond our reasonable control,
            including natural disasters, pandemics, strikes, transportation
            disruptions, or government actions.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>17. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India.
          </p>
          <p>
            Any disputes arising out of or relating to these Terms shall be
            subject to the exclusive jurisdiction of the courts located in
            Kolkata, West Bengal.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>18. Changes to Terms</h2>
          <p>
            We reserve the right to update, modify, or replace these Terms and
            Conditions at any time without prior notice.
          </p>
          <p>
            Your continued use of the website following any changes constitutes
            acceptance of those changes.
          </p>
        </section>

        <hr className="tnc-divider" />

        <section className="tnc-section">
          <h2>19. Contact Information</h2>
          <p>
            For any questions regarding these Terms and Conditions, please
            contact us:
          </p>
          <address className="tnc-contact">
            <strong>Freshlyn Nature</strong>
            <br />
            Kolkata, West Bengal, India
            <br />
            Email:{" "}
            <a href="mailto:info@freshlynnature.com">info@freshlynnature.com</a>
            <br />
            Website:{" "}
            <a
              href="https://www.freshlynnature.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.freshlynnature.com
            </a>
          </address>
        </section>

        <hr className="tnc-divider" />

        <p className="tnc-acknowledgement">
          By using our website, you acknowledge that you have read, understood,
          and agreed to these Terms and Conditions.
        </p>
      </main>

      <footer className="tnc-footer">
        <p>© 2024 Freshlyn Nature · 100% Pure Veg · Organic &amp; Natural</p>
      </footer>
    </div>
  );
}
