import { useState } from 'react';
import './Products.css';
import milkImg from '../assets/milk.jpg';

const categories = [
  {
    id: 'dairy',
    icon: '🥛',
    label: 'Dairy',
    title: 'Organic & Natural Dairy',
    color: '#2a5e32',
    seo: 'Fresh organic dairy products delivered daily with natural taste and rich nutrition.',
    items: ['Cow Milk', 'Buffalo Milk', 'Low Fat Milk', 'Goat Milk', 'Paneer', 'Ghee', 'Butter', 'Curd', 'Lassi', 'Milk Shakes'],
    featured: {
      name: 'Farm Fresh Cow Milk',
      description: 'Pure, natural cow milk sourced directly from trusted farms. Rich in nutrients, free from preservatives — delivered fresh every morning.',
      image: milkImg,
    }
  },
  {
    id: 'vegetables',
    icon: '🥦',
    label: 'Vegetables',
    title: 'Farm Fresh Organic Vegetables',
    color: '#3a7d44',
    seo: 'Organic vegetables sourced directly from farms for maximum freshness.',
    items: ['Potato', 'Pumpkin', 'Gourd', 'Bitter Gourd', 'Brinjal', 'Tomato', 'Cabbage', 'Cauliflower', 'Broccoli', 'Capsicum', 'Raw Papaya', 'Green Mango', 'Lemon Varieties', 'Lettuce', 'Beans', 'Okra', 'Mint Leaves'],
  },
  {
    id: 'rice',
    icon: '🍚',
    label: 'Rice',
    title: 'Premium Rice Collection',
    color: '#7c4a1e',
    seo: 'Natural premium rice varieties perfect for everyday meals and festive cooking.',
    items: ['Tulaipanji Rice', 'Gobindavog Rice', 'Bansmoti Rice', 'Dehradun Rice', 'Jirakanthi Rice'],
  },
  {
    id: 'sweets',
    icon: '🍮',
    label: 'Sweets',
    title: 'Traditional Sweets',
    color: '#5a3210',
    seo: 'Freshly prepared authentic traditional sweets from Bengal.',
    items: ['Rosogolla', 'Gulab Jamun', 'Kaju Barfi', 'Rasomalai', 'Rabri', 'Chamcham', 'Mihidana', 'Lengcha', 'Jol Bhora'],
  },
  {
    id: 'pantry',
    icon: '🍯',
    label: 'Pantry',
    title: 'Pantry & Natural Essentials',
    color: '#4a7c3f',
    seo: 'Homemade daler bori, organic spices, natural honey and more.',
    items: ['Natural Honey', 'Daler Bori', 'Organic Spices', 'Puja Items'],
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('dairy');
  const active = categories.find(c => c.id === activeTab);

  return (
    <section className="products" id="products">
      <div className="products-container">

        <div className="products-header">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="products-heading">Our Product<br />Categories.</h2>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tab-pill ${activeTab === cat.id ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              style={activeTab === cat.id ? { borderColor: cat.color, color: cat.color } : {}}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        <div className="category-panel">
          {active.featured && (
            <div className="featured-card">
              <div className="featured-img-col">
                <img src={active.featured.image} alt={active.featured.name} />
                <div className="featured-label-strip" style={{ background: active.color }}>
                  <span>{active.title}</span>
                  <span className="strip-arrow">→</span>
                </div>
              </div>
              <div className="featured-text-col">
                <p className="featured-category-tag">{active.title}</p>
                <h3 className="featured-name">{active.featured.name}</h3>
                <p className="featured-desc">{active.featured.description}</p>
              </div>
            </div>
          )}

          <div className="items-block">
            <div className="items-block-header">
              <h4 className="items-title">{active.title}</h4>
              <p className="items-seo">{active.seo}</p>
            </div>
            <div className="items-chips">
              {active.items.map((item, i) => (
                <span className="item-chip" key={i}>{item}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
