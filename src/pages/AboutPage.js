import React from 'react';
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="text">
        <h1>關於我們</h1>
        <p>透過養貓的經驗，分享關於貓咪的大小事。</p>
      </div>

      <div className="image-grid">
        <img src="/a1.jpg" alt="Cat 1"  loading="lazy"  width="100%" height="250"/>
        <img src="/a2.jpg " alt="Cat 2" loading="lazy"  width="100%" height="250" />
        <img src="/a3.jpg" alt="Cat 3" loading="lazy"  width="100%" height="250"/>
        <img src="/a4.jpg" alt="Cat 4" loading="lazy"  width="100%" height="250" />
        <img src="/a5.jpg" alt="Cat 5" loading="lazy"  width="100%" height="250" />
        <img src="/a6.jpg" alt="Cat 6" loading="lazy"   width="100%" height="250"/>
      </div>
    </div>
  );
}

export default AboutPage;

