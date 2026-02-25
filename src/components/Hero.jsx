import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="public/assets/videos/cookstove.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <h1>Joseph Nelson</h1>
        <p>Engineering & Design | Embedded Systems | Visual Storytelling</p>
      </div>
    </section>
  );
}