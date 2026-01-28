// import React from 'react';
// function About() {
//   return <h1>About Us</h1>;
// }
// export default About;
// import React from "react";
// import "./About.css";
// import pic7 from './assets/pic7.jpeg';
// export default function About() {
//   return (
//     <div className="about-page">
//       {/* HERO BANNER */}
//       <section className="about-hero">
//         <div className="about-hero-overlay"></div>
//         <div className="about-hero-content">
//           <h1>About Panchal Namkeen</h1>
//           <p>Crafting Taste, Tradition, and Trust Since Our Beginning</p>
//         </div>
//       </section>

//       {/* COMPANY STORY */}
//       <section className="about-story">
//         <div className="story-grid">
//           {/* <img
//             src="https://via.placeholder.com/600x400"
//             alt="Our Story"
//             className="story-img"
//           />*/
//           <img src={pic7} alt="Our Story" className="story-img" /> }
//           <div className="story-text">
//             <h2>Farrukhabadi Namkeen</h2>
//             <h3> A Flavorful Delight Infused with the Aroma of Heeng</h3>
//             <p>
//               The Essence of Farrukhabadi Namkeen
// What sets Farrukhabadi namkeen apart from other varieties across India is its bold use of heeng—a pungent, aromatic spice derived from the dried resin of the asafoetida plant. In Indian cuisine, heeng is valued for its strong flavor, digestive properties, and the depth it adds to savory dishes.
// In Farrukhabadi namkeen, this ingredient plays a central role, imparting a distinct earthy, musky flavor that elevates the snack. Whether it is crispy sev, crunchy matthi, or spiced kachori, the pronounced use of heeng ties them all together, creating a snack that delights both the taste buds and the senses.

//             </p>
//           </div>
//         </div>
//       </section>

//       {/* OUR MISSION & VISION */}
//       <section className="about-mission">
//         <h2>Our Mission & Vision</h2>
//         <div className="mission-grid">
//           <div className="mission-card">
//             <h3>🎯 Mission</h3>
//             <p>
//               To deliver high-quality, authentic Indian snacks that bring
//               happiness and connect people with the taste of tradition.
//             </p>
//           </div>
//           <div className="mission-card">
//             <h3>🌟 Vision</h3>
//             <p>
//               To become a household name across India and beyond, known for our
//               dedication to quality, taste, and trust.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* OUR VALUES */}
//       <section className="about-values">
//         <h2>Our Core Values</h2>
//         <div className="values-grid">
//           <div className="value-card">✅ Quality First</div>
//           <div className="value-card">🤝 Customer Trust</div>
//           <div className="value-card">🌿 Authentic Ingredients</div>
//           <div className="value-card">❤️ Passion for Taste</div>
//         </div>
//       </section>

//       {/* TEAM SECTION */}
//       <section className="about-team">
//         <h2>Meet Our Team</h2>
//         <div className="team-grid">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="team-card">
//               <img
//                 src={`https://via.placeholder.com/300x300?text=Member+${i}`}
//                 alt={`Team Member ${i}`}
//                 className="team-img"
//               />
//               <h4>Member {i}</h4>
//               <p>Position {i}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="about-cta">
//         <div className="about-cta-overlay"></div>
//         <div className="about-cta-content">
//           <h2>Join Us on Our Flavorful Journey</h2>
//           <button className="btn-primary">Explore Products</button>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./About.css";
import pic7 from "./assets/pic7.jpeg";
import akash from "./assets/Akash.jpg";
import ayush from "./assets/Ayush.JPG";
import abhay from "./assets/Abhay.jpg";

export default function About() {
  const [popup, setPopup] = useState(null);

  const closePopup = () => setPopup(null);

  return (
    <div className="about-page">

      {/* HEADER */}
      <section className="about-header">
        <h1>About Panchal Namkeen</h1>
        <p>Taste of Bharat in Every Bite – Aprakashi Foods</p>
      </section>

      {/* STORY */}
      <section className="about-section">
        <div className="about-grid">
          <img src={pic7} alt="Our Story" />
          <div>
            <h2>Farrukhabadi Namkeen</h2>
            <h3>Heeng infused legacy snack</h3>
            <p>
              What sets Farrukhabadi namkeen apart is the bold use of
              <b> heeng (asafoetida)</b>. Its aroma, taste and digestive
              qualities define our products. Each bite carries tradition,
              authenticity and unmatched flavor.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-light">
        <div className="mission-box">
          <div>
            <h3>🎯 Mission</h3>
            <p>
              Deliver authentic Indian snacks that feel like home,
              ensuring consistent quality and taste.
            </p>
            <button
              className="read-more-btn"
              onClick={() => setPopup("mission")}
            >
              View More
            </button>
          </div>

          <div>
            <h3>🌟 Vision</h3>
            <p>
              Build Panchal Namkeen as a trusted Indian snack brand
              across the country and beyond.
            </p>
            <button
              className="read-more-btn"
              onClick={() => setPopup("vision")}
            >
              View More
            </button>
          </div>
        </div>
      </section>


 {/* OUR VALUES */}
      <section className="about-values">
         <h2>Our Core Values</h2>
         <div className="values-grid">
           <div className="value-card">✅ Quality First</div>
           <div className="value-card">🤝 Customer Trust</div>
        <div className="value-card">🌿 Authentic Ingredients</div>
          <div className="value-card">❤️ Passion for Taste</div>
        </div>
      </section>


      {/* TEAM */}
      <section className="about-section">
        <h2 className="center-title">Our Team</h2>

        <div className="team-row">
          <div className="team-card">
            <img src={akash} alt="Akash" />
            <h4>Akash Panchal</h4>
            <p>Founder & MD</p>
          </div>

          <div className="team-card">
            <img src={ayush} alt="Ayush" />
            <h4>Ayush Panchal</h4>
            <p>Operations Head</p>
          </div>

          <div className="team-card">
            <img src={abhay} alt="Abhay" />
            <h4>Abhay Dubey</h4>
            <p>Marketing & Creative</p>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {popup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>✕</span>

            {popup === "mission" && (
              <>
                <h2>🎯 Our Mission</h2>
                <p>
                  At Panchal Namkeen, our mission is to preserve the soul
                  of Indian snacking by crafting authentic, hygienic,
                  and high-quality namkeen using time-honored recipes.
                  Every bite reflects purity, tradition, and trust.
                </p>
                <p>
                  We focus on premium ingredients, strict quality
                  standards, and consistent taste — delivering snacks
                  that families can enjoy every day with confidence.
                </p>
              </>
            )}

            {popup === "vision" && (
              <>
                <h2>🌟 Our Vision</h2>
                <p>
                  Our vision is to take the taste of Bharat from local
                  kitchens to global shelves, building Panchal Namkeen
                  as a legacy Indian snack brand.
                </p>
                <p>
                  By blending tradition with innovation, we aspire to
                  create products that connect generations and cultures
                  through honest flavors and uncompromising quality.
                </p>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
