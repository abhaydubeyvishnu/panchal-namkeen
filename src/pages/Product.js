import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Product.css";

import HeengSev from "./assets/HeengSev.png";
import BadamMixture from "./assets/BadamMixture.png";
import AlooBhujiya from "./assets/AlooBhujiya.png";
import BesanBhujiya from "./assets/BesanBhujiya.png";
import BesanDaana from "./assets/BesanDaana.png";
import BesanGathiya from "./assets/BesanGathiya.png";
import Bhakharbadi from "./assets/Bhakharbadi.png";
import CasewMaheen from "./assets/CasewMaheen.png";
import ChanaDal from "./assets/ChanaDal.png";
import ChanaJorGaram from "./assets/ChanaJorGaram.png";
import GadbadMixture from "./assets/GadbadMixture.png";
import HaraMatar from "./assets/HaraMatar.png";
import HaraMoongMixture from "./assets/HaraMoongMixture.png";
import HeengDana from "./assets/HeengDana.png";
import HeengMahin from "./assets/HeengMahin.png";
import KajuDalmoth from "./assets/KajuDalmoth.png";
import KhattaMeetha from "./assets/KhattaMeetha.png";
import LehsunMixture from "./assets/LehsunMixture.png";
import MoongDal from "./assets/MoongDal.png";
import Navratan from "./assets/Navratan.png";
import PaneerBhujiya from "./assets/PaneerBhujiya.png";
import PotatoChips from "./assets/PotatoChips.png";
import PunjabiTadka from "./assets/PunjabiTadka.png";
import SemBeej from "./assets/SemBeej.png";

export default function Product() {
  const navigate = useNavigate();
  const { cart = [], addToCart } = useCart();

  const categories = ["All", "Namkeen", "Bhujiya", "Mixtures", "Snacks"];

  const products = [
    { id: 1, name: "Namkeen Mix", category: "Mixtures", desc: "A perfect blend of spices and crunch.", weight: "500g", price: 120, img: GadbadMixture, isOffer: true },
    { id: 2, name: "Bhujiya Sev", category: "Bhujiya", desc: "Crispy, golden, authentic flavor.", weight: "400g", price: 90, img: BesanBhujiya, isOffer: false },
    { id: 3, name: "Aloo Bhujiya", category: "Bhujiya", desc: "Potato-based crunchy snack.", weight: "450g", price: 100, img: AlooBhujiya, isOffer: false },
    { id: 4, name: "Moong Dal", category: "Snacks", desc: "Crispy fried moong dal.", weight: "400g", price: 110, img: MoongDal, isOffer: false },
    { id: 5, name: "Masala Peanuts", category: "Snacks", desc: "Spicy roasted peanuts.", weight: "500g", price: 130, img: HeengDana, isOffer: true },
    { id: 6, name: "Punjabi Tadka", category: "Namkeen", desc: "Light & crunchy tea-time snack.", weight: "500g", price: 115, img: PunjabiTadka, isOffer: false },
    { id: 7, name: "Navratan Mix", category: "Mixtures", desc: "Royal mix of 9 premium ingredients.", weight: "500g", price: 125, img: Navratan, isOffer: false },
    { id: 8, name: "Khatta Meetha", category: "Mixtures", desc: "Sweet & tangy classic namkeen.", weight: "400g", price: 95, img: KhattaMeetha, isOffer: false },
    { id: 9, name: "Sem Seeds", category: "Namkeen", desc: "Premium roasted cashews with light salt.", weight: "250g", price: 220, img: SemBeej, isOffer: false },
    { id: 11, name: "Heeng Sev", category: "Bhujiya", desc: "Aromatic hing-flavored sev with extra crunch.", weight: "400g", price: 105, img: HeengSev, isOffer: false },
    { id: 12, name: "Badam Mixture", category: "Mixtures", desc: "Rich mixture loaded with crunchy almonds.", weight: "500g", price: 150, img: BadamMixture, isOffer: false },
    { id: 13, name: "Besan Bhujiya", category: "Bhujiya", desc: "Traditional besan bhujia with bold spices.", weight: "400g", price: 95, img: BesanBhujiya, isOffer: false },
    { id: 14, name: "Besan Daana", category: "Snacks", desc: "Crunchy fried besan pearls.", weight: "400g", price: 90, img: BesanDaana, isOffer: false },
    { id: 15, name: "Besan Gathiya", category: "Namkeen", desc: "Soft yet crispy besan gathiya.", weight: "500g", price: 110, img: BesanGathiya, isOffer: false },
    { id: 16, name: "Bhakarbadi", category: "Snacks", desc: "Spicy rolled snack with traditional masala.", weight: "400g", price: 120, img: Bhakharbadi, isOffer: false },
    { id: 17, name: "Kaju Maheen", category: "Namkeen", desc: "Thin sev blended with premium cashews.", weight: "500g", price: 160, img: CasewMaheen, isOffer: true },
    { id: 18, name: "Chana Dal", category: "Snacks", desc: "Crunchy roasted chana dal.", weight: "400g", price: 100, img: ChanaDal, isOffer: false },
    { id: 19, name: "Chana Jor Garam", category: "Namkeen", desc: "Flat fried spicy chana snack.", weight: "400g", price: 95, img: ChanaJorGaram, isOffer: false },
    { id: 20, name: "Gadbad Mixture", category: "Mixtures", desc: "Fun mix of multiple crunchy elements.", weight: "500g", price: 130, img: GadbadMixture, isOffer: false },
    { id: 21, name: "Hara Matar", category: "Snacks", desc: "Crispy fried green peas.", weight: "400g", price: 90, img: HaraMatar, isOffer: true },
    { id: 22, name: "Hara Moong Mixture", category: "Mixtures", desc: "Protein-rich green moong snack.", weight: "500g", price: 115, img: HaraMoongMixture, isOffer: false },
    { id: 23, name: "Heeng Dana", category: "Snacks", desc: "Hing flavored crunchy dana.", weight: "400g", price: 95, img: HeengDana, isOffer: false },
    { id: 24, name: "Heeng Maheen", category: "Namkeen", desc: "Fine sev with strong hing aroma.", weight: "400g", price: 100, img: HeengMahin, isOffer: false },
    { id: 25, name: "Kaju Dalmoth", category: "Namkeen", desc: "Premium dalmoth enriched with cashews.", weight: "500g", price: 170, img: KajuDalmoth, isOffer: true },
    { id: 26, name: "Lehsun Mixture", category: "Mixtures", desc: "Garlic-flavored spicy mixture.", weight: "500g", price: 120, img: LehsunMixture, isOffer: false },
    { id: 27, name: "Paneer Bhujiya", category: "Bhujiya", desc: "Special bhujia with paneer flavor.", weight: "400g", price: 140, img: PaneerBhujiya, isOffer: false },
    { id: 28, name: "Potato Chips", category: "Snacks", desc: "Classic crispy salted potato chips.", weight: "300g", price: 80, img: PotatoChips, isOffer: true },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showOnlyOffers, setShowOnlyOffers] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  const isInCart = (id) => cart.some((item) => item.id === id);
  const handleAddToCart = (product) => addToCart({ ...product, qty: 1 });
  const getSnippet = (text, words = 7) =>
    text.split(" ").length <= words
      ? text
      : text.split(" ").slice(0, words).join(" ") + "…";

  const filteredProducts = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "All") list = list.filter((p) => p.category === activeCategory);
    if (showOnlyOffers) list = list.filter((p) => p.isOffer);
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, searchTerm, sortBy, showOnlyOffers, products]); // ✅ included products

  return (
    <div className="product-page">
      <section className="product-hero clean">
        <h1>Our Products</h1>
        <p>Taste of Bharat in Every Bite • Aprakashi Foods</p>
      </section>

      <section className="product-controls">
        <div className="categories">
          {categories.map((cat) => (
            <button key={cat} className={cat === activeCategory ? "active" : ""} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="filters">
          <input type="search" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name</option>
          </select>
          <label className="offer-check">
            <input type="checkbox" checked={showOnlyOffers} onChange={(e) => setShowOnlyOffers(e.target.checked)} />
            Offers only
          </label>
        </div>
      </section>

      <section className="product-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products found.</p>
        ) : (
          filteredProducts.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-img-wrap" onClick={() => setModalProduct(p)}>
                <img src={p.img} alt={p.name} />
                {p.isOffer && <span className="badge">Offer</span>}
              </div>
              <h3>{p.name}</h3>
              <p className="price">₹{p.price} • {p.weight}</p>
              <p className="desc">{getSnippet(p.desc)}</p>

              <div className="actions">
                {isInCart(p.id) ? (
                  <button className="btn open" onClick={() => navigate("/cart")}>🛍 Open Cart</button>
                ) : (
                  <button className="btn add" onClick={() => handleAddToCart(p)}>🛒 Add to Cart</button>
                )}
                <button className="btn outline" onClick={() => setModalProduct(p)}>View Details</button>
              </div>
            </div>
          ))
        )}
      </section>

      {modalProduct && (
        <div className="modal-backdrop" onClick={() => setModalProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setModalProduct(null)}>×</button>
            <img src={modalProduct.img} alt={modalProduct.name} />
            <h3>{modalProduct.name}</h3>
            <p>₹{modalProduct.price} • {modalProduct.weight}</p>
            <p>{modalProduct.desc}</p>
            {isInCart(modalProduct.id) ? (
              <button className="btn open" onClick={() => navigate("/cart")}>Open Cart</button>
            ) : (
              <button className="btn add" onClick={() => { handleAddToCart(modalProduct); setModalProduct(null); }}>Add to Cart</button>
            )}
            <button className="btn view-all" onClick={() => navigate("/all-products")}>View All Products →</button>
          </div>
        </div>
      )}
    </div>
  );
}
