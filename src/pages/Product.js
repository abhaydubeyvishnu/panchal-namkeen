// import React, { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // your custom hook
// import "./Product.css";

// import pic1 from "./assets/Gadbad.png";
// import pic2 from "./assets/Bhujiya.png";
// import pic3 from "./assets/Dalmoth.png";
// import pic4 from "./assets/BesanDaana.png";
// import pic5 from "./assets/HeengSev.png";

// /**
//  * NOTE: this uses the uploaded decorative image path. Your environment/tooling
//  * will convert this filesystem path into a usable URL. Keep as-is:
//  */
// const aboutDecorativeImage = "/mnt/data/d87aa24c-68cf-471a-88c6-6f0d8be82fff.png";

// export default function Product() {
//   const navigate = useNavigate();
//   const { cart = [], addToCart } = useCart();

//   const categories = ["All", "Namkeen", "Bhujia", "Mixturess", "Snacks"];

//   const [activeCategory, setActiveCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortBy, setSortBy] = useState("popular"); // popular | price-asc | price-desc | name
//   const [modalProduct, setModalProduct] = useState(null);
//   const [showOnlyOffers, setShowOnlyOffers] = useState(false);

//   // product list (images referenced as pic1..pic5)
//   const products = [
//     {
//       id: 1,
//       name: "Special Namkeen Mix",
//       category: "Namkeen",
//       price: 120,
//       weight: "500g",
//       img: pic1,
//       desc:
//         "A curated mix of traditional namkeens — balanced spices, crisp texture, and a classic Farrukhabadi touch.",
//       isOffer: false,
//     },
//     {
//       id: 2,
//       name: "Aloo Bhujia",
//       category: "Bhujia",
//       price: 80,
//       weight: "250g",
//       img: pic2,
//       desc:
//         "Crispy aloo strands, light and perfectly spiced. A pantry staple and tea-time companion.",
//       isOffer: true,
//     },
//     {
//       id: 3,
//       name: "Heeng Dal Biji",
//       category: "Mixturess",
//       price: 150,
//       weight: "500g",
//       img: pic3,
//       desc:
//         "Tangy-sweet mix with crunchy boondi and roasted nuts — sweet, sour and utterly addictive.",
//       isOffer: false,
//     },
//     {
//       id: 4,
//       name: "Masala Peanuts",
//       category: "Snacks",
//       price: 100,
//       weight: "200g",
//       img: pic4,
//       desc:
//         "Roasted peanuts tossed in our secret masala — spicy, crunchy and protein-rich.",
//       isOffer: true,
//     },
//     {
//       id: 5,
//       name: "Sev Namkeen",
//       category: "Namkeen",
//       price: 90,
//       weight: "250g",
//       img: pic5,
//       desc:
//         "Thin sev made from premium gram flour, light on oil and loaded with flavor.",
//       isOffer: false,
//     },
//   ];

//   // helper: returns first N words + ellipsis if trimmed
//   const getSnippet = (text = "", words = 6) => {
//     if (!text) return "";
//     const parts = text.trim().split(/\s+/);
//     if (parts.length <= words) return text;
//     return parts.slice(0, words).join(" ") + " …";
//   };

//   // Derived filtered/sorted list
//   const filteredProducts = useMemo(() => {
//     let list = products.slice();

//     if (activeCategory !== "All") {
//       list = list.filter((p) => p.category === activeCategory);
//     }

//     if (showOnlyOffers) {
//       list = list.filter((p) => p.isOffer);
//     }

//     if (searchTerm.trim()) {
//       const q = searchTerm.toLowerCase();
//       list = list.filter(
//         (p) =>
//           p.name.toLowerCase().includes(q) ||
//           p.desc.toLowerCase().includes(q) ||
//           p.category.toLowerCase().includes(q)
//       );
//     }

//     if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
//     else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
//     else if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
//     // else popular: keep original array order

//     return list;
//   }, [activeCategory, searchTerm, sortBy, showOnlyOffers, products]);

//   const isInCart = (productId) => cart.some((c) => c.id === productId);

//   const handleAddToCart = (product) => {
//     // add qty default to 1; your addToCart may accept product or (product, qty)
//     addToCart({ ...product, qty: 1 });
//   };

//   return (
//     <div className="product-page">
//       {/* HERO */}
//       <section className="product-hero">
//         <div className="product-hero-overlay" aria-hidden="true" />
//         <div className="product-hero-content">
//           <h1 className="hero-title">Our Delicious Products</h1>
//           <p className="hero-sub">
//             Bringing you the authentic taste of Bharat in every bite — Aprakashi
//             Foods
//           </p>
//           <div className="hero-actions">
//             <button
//               className="btn-primary"
//               onClick={() => {
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//                 navigate("/contact");
//               }}
//             >
//               Contact Us
//             </button>
//             <button
//               className="btn-outline hero"
//               onClick={() => {
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//                 navigate("/about");
//               }}
//             >
//               About Brand
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT BANNER - professional replacement for previous block */}
//       <section className="about-banner" aria-labelledby="about-banner-title">
//         <div className="about-banner-inner">
//           <div className="about-text">
//             <h2 id="about-banner-title">Crafted with tradition, perfected with passion</h2>
//             <p className="about-sub">
//               Panchal Namkeen blends authentic Indian flavours with modern food excellence to give you a truly unforgettable snacking experience.
//             </p>

//             <div className="about-actions">
//               <button
//                 className="about-cta"
//                 onClick={() => {
//                   // same navigation as the old button but with polished micro-interaction
//                   navigate("/about");
//                 }}
//                 aria-label="Learn more about Panchal Namkeen"
//               >
//                 About Brand
//                 <span className="cta-arrow" aria-hidden="true">➜</span>
//               </button>
//               <button
//                 className="about-secondary"
//                 onClick={() => {
//                   navigate("/contact");
//                 }}
//                 aria-label="Contact Panchal Namkeen"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           <div className="about-decor">
//             <img src={aboutDecorativeImage} alt="decorative snacks" />
//           </div>
//         </div>
//       </section>

//       {/* Products heading + Quick controls */}
//       <section className="our-products-heading">
//         <h2>✨ Our Products ✨</h2>
//         <p className="subtitle">Taste of Bharat in Every Bite</p>

//         <div className="controls-row">
//           <div className="left-controls">
//             <div className="category-list" role="tablist" aria-label="Product categories">
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
//                   onClick={() => setActiveCategory(cat)}
//                   aria-pressed={activeCategory === cat}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//             <label className="offers-toggle">
//               <input
//                 type="checkbox"
//                 checked={showOnlyOffers}
//                 onChange={(e) => setShowOnlyOffers(e.target.checked)}
//               />
//               Show offers only
//             </label>
//           </div>

//           <div className="right-controls">
//             <input
//               type="search"
//               className="search-input"
//               placeholder="Search products, e.g. Sev, Bhujia..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               aria-label="Search products"
//             />
//             <select
//               className="sort-select"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               aria-label="Sort products"
//             >
//               <option value="popular">Sort: Popular</option>
//               <option value="price-asc">Price: Low → High</option>
//               <option value="price-desc">Price: High → Low</option>
//               <option value="name">Sort: Name</option>
//             </select>
//           </div>
//         </div>
//       </section>

//       {/* Product Grid */}
//       <section className="product-grid-section">
//         <div className="product-grid">
//           {filteredProducts.length === 0 ? (
//             <div className="no-results">No products found. Try another filter.</div>
//           ) : (
//             filteredProducts.map((p) => (
//               <article className="product-card fade-in" key={p.id}>
//                 <div
//                   className="product-media"
//                   role="button"
//                   tabIndex={0}
//                   onClick={() => setModalProduct(p)}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") setModalProduct(p);
//                   }}
//                   aria-label={`View details for ${p.name}`}
//                 >
//                   <img
//                     src={p.img}
//                     alt={p.name}
//                     loading="lazy"
//                     className="product-img"
//                   />
//                   {p.isOffer && <span className="badge">Offer</span>}
//                 </div>

//                 <div className="product-body">
//                   <h3
//                     className="product-title"
//                     onClick={() => setModalProduct(p)}
//                     role="link"
//                     tabIndex={0}
//                     onKeyDown={(e) => { if (e.key === "Enter") setModalProduct(p); }}
//                   >
//                     {p.name}
//                   </h3>

//                   <p className="price">₹{p.price} • {p.weight}</p>

//                   {/* show a snippet of first 6 words + ellipsis; CSS will also add single-line ellipsis if needed */}
//                   <p className="mini-desc" title={p.desc}>
//                     {getSnippet(p.desc, 6)}
//                   </p>

//                   {/* Buttons: centered and always visible under the product */}
//                   <div className="product-actions button-group" role="group" aria-label={`Actions for ${p.name}`}>
//                     {isInCart(p.id) ? (
//                       <button
//                         className="btn-cart open-cart"
//                         onClick={() => navigate("/cart")}
//                         aria-label="Open cart"
//                       >
//                         🛍️ Open Cart
//                       </button>
//                     ) : (
//                       <button
//                         className="btn-cart add-cart"
//                         onClick={() => handleAddToCart(p)}
//                         aria-label={`Add ${p.name} to cart`}
//                       >
//                         🛒 Add to Cart
//                       </button>
//                     )}

//                     <button
//                       className="btn-outline small"
//                       onClick={() => setModalProduct(p)}
//                       aria-label="Quick view"
//                     >
//                       Quick View
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))
//           )}
//         </div>

//         <div className="view-all-container">
//           <button
//             className="btn-primary"
//             onClick={() => {
//               window.scrollTo({ top: 0, behavior: "smooth" });
//               navigate("/all-products");
//             }}
//           >
//             View All Products →
//           </button>
//         </div>
//       </section>

//       {/* SPECIAL OFFERS */}
//       <section className="special-offers">
//         <h2>Special Offers</h2>
//         <div className="offer-grid">
//           <div className="offer-card slide-in-left">
//             <div className="offer-left">
//               <h3>🎉 Festive Combo</h3>
//               <p>Buy 3 packs of Namkeen and get 1 FREE! (Auto-applied at checkout)</p>
//               <button className="btn-outline">Shop Now</button>
//             </div>
//             <img src={pic1} alt="festive combo" loading="lazy" />
//           </div>

//           <div className="offer-card slide-in-right">
//             <div className="offer-left">
//               <h3>🔥 Hot Deals</h3>
//               <p>Flat 20% off on Bhujia Sev this week only. Limited stocks.</p>
//               <button className="btn-outline">Grab Offer</button>
//             </div>
//             <img src={pic2} alt="hot deals" loading="lazy" />
//           </div>
//         </div>
//       </section>

//       {/* QUALITY PROMISE */}
//       <section className="quality-promise">
//         <h2>Our Promise of Quality</h2>
//         <div className="quality-grid">
//           <div className="quality-card">🌿 100% Fresh Ingredients</div>
//           <div className="quality-card">✅ Hygienic Manufacturing</div>
//           <div className="quality-card">⭐ Authentic Taste Guaranteed</div>
//           <div className="quality-card">🚚 Fast Delivery</div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="product-cta">
//         <div className="product-cta-overlay" aria-hidden="true" />
//         <div className="product-cta-content">
//           <h2>Order Now & Savor the Flavor of Tradition</h2>
//           <button
//             className="btn-primary"
//             onClick={() => {
//               window.scrollTo({ top: 0, behavior: "smooth" });
//               navigate("/cart");
//             }}
//           >
//             Go to Cart →
//           </button>
//         </div>
//       </section>

//       {/* Modal: quick product view */}
//       {modalProduct && (
//         <div
//           className="modal-backdrop"
//           onClick={() => setModalProduct(null)}
//           role="dialog"
//           aria-modal="true"
//           aria-label={`Details for ${modalProduct.name}`}
//         >
//           <div
//             className="modal"
//             onClick={(e) => e.stopPropagation()}
//             role="document"
//           >
//             <button className="modal-close" onClick={() => setModalProduct(null)}>
//               ×
//             </button>
//             <div className="modal-body">
//               <img src={modalProduct.img} alt={modalProduct.name} />
//               <div className="modal-info">
//                 <h3>{modalProduct.name}</h3>
//                 <p className="price">₹{modalProduct.price} • {modalProduct.weight}</p>
//                 {/* full description in modal */}
//                 <p>{modalProduct.desc}</p>
//                 <div className="modal-actions">
//                   {isInCart(modalProduct.id) ? (
//                     <button
//                       className="btn-cart open-cart"
//                       onClick={() => navigate("/cart")}
//                     >
//                       🛍️ Open Cart
//                     </button>
//                   ) : (
//                     <button
//                       className="btn-cart add-cart"
//                       onClick={() => {
//                         handleAddToCart(modalProduct);
//                         setModalProduct(null);
//                       }}
//                     >
//                       🛒 Add to Cart
//                     </button>
//                   )}
//                   <button
//                     className="btn-outline"
//                     onClick={() => {
//                       window.scrollTo({ top: 0, behavior: "smooth" });
//                       navigate("/all-products");
//                     }}
//                   >
//                     View Full Catalog
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* add bottom spacing so footer separation looks professional */}
//       <div className="page-bottom-space" aria-hidden="true" />
//     </div>
//   );
// }
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Product.css";

import pic1 from "./assets/Gadbad.png";
import pic2 from "./assets/Bhujiya.png";
import pic3 from "./assets/Dalmoth.png";
import pic4 from "./assets/BesanDaana.png";
import pic5 from "./assets/HeengSev.png";
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

  /* -------------------- DATA -------------------- */

  const categories = ["All", "Namkeen", "Bhujiya", "Mixtures", "Snacks"];

  const products = [
    {
      
    id: 1,
    name: "Namkeen Mix",
    category: "Mixtures",
    desc: "A perfect blend of spices and crunch.",
    weight: "500g",
    price: 120,
    img: GadbadMixture,
    isOffer: true,
  },
  {
    id: 2,
    name: "Bhujiya Sev",
    category: "Bhujiya",
    desc: "Crispy, golden, authentic flavor.",
    weight: "400g",
    price: 90,
    img: BesanBhujiya,
    isOffer: false,
  },
  {
    id: 3,
    name: "Aloo Bhujiya",
    category: "Bhujiya",
    desc: "Potato-based crunchy snack.",
    weight: "450g",
    price: 100,
    img: AlooBhujiya,
    isOffer: false,
  },
  {
    id: 4,
    name: "Moong Dal",
    category: "Snacks",
    desc: "Crispy fried moong dal.",
    weight: "400g",
    price: 110,
    img: MoongDal,
    isOffer: false,
  },
  {
    id: 5,
    name: "Masala Peanuts",
    category: "Snacks",
    desc: "Spicy roasted peanuts.",
    weight: "500g",
    price: 130,
    img: HeengDana,
    isOffer: true,
  },
  {
    id: 6,
    name: "Punjabi Tadka",
    category: "Namkeen",
    desc: "Light & crunchy tea-time snack.",
    weight: "500g",
    price: 115,
    img: PunjabiTadka,
    isOffer: false,
  },
  {
    id: 7,
    name: "Navratan Mix",
    category: "Mixtures",
    desc: "Royal mix of 9 premium ingredients.",
    weight: "500g",
    price: 125,
    img: Navratan,
    isOffer: false,
  },
  {
    id: 8,
    name: "Khatta Meetha",
    category: "Mixtures",
    desc: "Sweet & tangy classic namkeen.",
    weight: "400g",
    price: 95,
    img: KhattaMeetha,
    isOffer: false,
  },
  {
    id: 9,
    name: "Sem Seeds",
    category: "Namkeen",
    desc: "Premium roasted cashews with light salt.",
    weight: "250g",
    price: 220,
    img: SemBeej,
    isOffer: false,
  },
  // {
  //   id: 10,
  //   name: "Salted Almonds",
  //   desc: "Crunchy roasted almonds, lightly salted.",
  //   weight: "250g",
  //   price: 210,
  //   img: SaltedAlmonds,
  // },

  // 🔽 Rest of products remain SAME as earlier

  {
    id: 11,
    name: "Heeng Sev",
    category: "Bhujiya",
    desc: "Aromatic hing-flavored sev with extra crunch.",
    weight: "400g",
    price: 105,
    img: HeengSev,
    isOffer: false,
  },
  {
    id: 12,
    name: "Badam Mixture",
    category: "Mixtures",
    desc: "Rich mixture loaded with crunchy almonds.",
    weight: "500g",
    price: 150,
    img: BadamMixture,
    isOffer: false,
  },
  {
    id: 13,
    name: "Besan Bhujiya",
    category: "Bhujiya",
    desc: "Traditional besan bhujia with bold spices.",
    weight: "400g",
    price: 95,
    img: BesanBhujiya,
    isOffer: false,
  },
  {
    id: 14,
    name: "Besan Daana",
    category: "Snacks",
    desc: "Crunchy fried besan pearls.",
    weight: "400g",
    price: 90,
    img: BesanDaana,
    isOffer: false,
  },
  {
    id: 15,
    name: "Besan Gathiya",
    category: "Namkeen",
    desc: "Soft yet crispy besan gathiya.",
    weight: "500g",
    price: 110,
    img: BesanGathiya,
    isOffer: false,
  },
  {
    id: 16,
    name: "Bhakarwadi",
    category: "Snacks",
    desc: "Spicy rolled snack with traditional masala.",
    weight: "400g",
    price: 120,
    img: Bhakharbadi,
    isOffer: false,
  },
  {
    id: 17,
    name: "Kaju Maheen",
    category: "Namkeen",
    desc: "Thin sev blended with premium cashews.",
    weight: "500g",
    price: 160,
    img: CasewMaheen,
    isOffer: true,
  },
  {
    id: 18,
    name: "Chana Dal",
    category: "Snacks",
    desc: "Crunchy roasted chana dal.",
    weight: "400g",
    price: 100,
    img: ChanaDal,
    isOffer: false,
  },
  {
    id: 19,
    name: "Chana Jor Garam",
    category: "Namkeen",
    desc: "Flat fried spicy chana snack.",
    weight: "400g",
    price: 95,
    img: ChanaJorGaram,
    isOffer: false,
  },
  {
    id: 20,
    name: "Gadbad Mixture",
    category: "Mixtures",
    desc: "Fun mix of multiple crunchy elements.",
    weight: "500g",
    price: 130,
    img: GadbadMixture,
    isOffer: false,
  },
  {
    id: 21,
    name: "Hara Matar",
    category: "Snacks",
    desc: "Crispy fried green peas.",
    weight: "400g",
    price: 90,
    img: HaraMatar,
    isOffer: true,
  },
  {
    id: 22,
    name: "Hara Moong Mixture",
    category: "Mixtures",
    desc: "Protein-rich green moong snack.",
    weight: "500g",
    price: 115,
    img: HaraMoongMixture,
    isOffer: false,
  },
  {
    id: 23,
    name: "Heeng Dana",
    category: "Snacks",
    desc: "Hing flavored crunchy dana.",
    weight: "400g",
    price: 95,
    img: HeengDana,
    isOffer: false,
  },
  {
    id: 24,
    name: "Heeng Maheen",
    category: "Namkeen",
    desc: "Fine sev with strong hing aroma.",
    weight: "400g",
    price: 100,
    img: HeengMahin,
    isOffer: false,
  },
  {
    id: 25,
    name: "Kaju Dalmoth",
    category: "Namkeen",
    desc: "Premium dalmoth enriched with cashews.",
    weight: "500g",
    price: 170,
    img: KajuDalmoth,
    isOffer: true,
  },
  {
    id: 26,
    name: "Lehsun Mixture",
    category: "Mixtures",
    desc: "Garlic-flavored spicy mixture.",
    weight: "500g",
    price: 120,
    img: LehsunMixture,
    isOffer: false,
  },
  {
    id: 27,
    name: "Paneer Bhujiya",
    category: "Bhujiya",
    desc: "Special bhujia with paneer flavor.",
    weight: "400g",
    price: 140,
    img: PaneerBhujiya,
    isOffer: false,
  },
  {
    id: 28,
    name: "Potato Chips",
    category: "Snacks",
    desc: "Classic crispy salted potato chips.",
    weight: "300g",
    price: 80,
    img: PotatoChips,
    isOffer: true,
  },
];

  /* -------------------- STATE -------------------- */

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showOnlyOffers, setShowOnlyOffers] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  /* -------------------- HELPERS -------------------- */

  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    addToCart({ ...product, qty: 1 });
  };

  const getSnippet = (text, words = 7) =>
    text.split(" ").length <= words
      ? text
      : text.split(" ").slice(0, words).join(" ") + "…";

  /* -------------------- DERIVED LIST -------------------- */

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (showOnlyOffers) {
      list = list.filter((p) => p.isOffer);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, searchTerm, sortBy, showOnlyOffers]);

  /* -------------------- UI -------------------- */

  return (
    <div className="product-page">

      {/* CLEAN HERO */}
      <section className="product-hero clean">
        <h1>Our Products</h1>
        <p>Taste of Bharat in Every Bite • Aprakashi Foods</p>
      </section>

      {/* CONTROLS */}
      <section className="product-controls">
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="filters">
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name</option>
          </select>

          <label className="offer-check">
            <input
              type="checkbox"
              checked={showOnlyOffers}
              onChange={(e) => setShowOnlyOffers(e.target.checked)}
            />
            Offers only
          </label>
        </div>
      </section>

      {/* PRODUCT GRID */}
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
                  <button
                    className="btn open"
                    onClick={() => navigate("/cart")}
                  >
                    🛍 Open Cart
                  </button>
                ) : (
                  <button
                    className="btn add"
                    onClick={() => handleAddToCart(p)}
                  >
                    🛒 Add to Cart
                  </button>
                )}

                <button
                  className="btn outline"
                  onClick={() => setModalProduct(p)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* QUICK VIEW MODAL */}
      {modalProduct && (
        <div className="modal-backdrop" onClick={() => setModalProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setModalProduct(null)}>×</button>
            <img src={modalProduct.img} alt={modalProduct.name} />
            <h3>{modalProduct.name}</h3>
            <p>₹{modalProduct.price} • {modalProduct.weight}</p>
            <p>{modalProduct.desc}</p>

            {isInCart(modalProduct.id) ? (
              <button className="btn open" onClick={() => navigate("/cart")}>
                Open Cart
              </button>
            ) : (
              <button
                className="btn add"
                onClick={() => {
                  handleAddToCart(modalProduct);
                  setModalProduct(null);
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
          <div className="view-all-container">
  {/* <button
    className="btn btn-primary view-all-btn"
    onClick={() => navigate("/all-products")}
  >
    View All Products →
  </button> */}
</div>
{/* ✅ VIEW ALL BUTTON (ONLY HERE) */}
    
        </div>
        
      )}<div className="view-all-wrapper">
  {/* <button 
    className="view-all-products-btn"
    onClick={() => navigate("/all-products")}
  >
    View All Products →
  </button> */}
</div>

    </div>
  );
}
