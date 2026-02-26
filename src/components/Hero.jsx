import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Joseph Nelson</h1>
        <p>Immersive hardware & software projects, crafted with precision.</p>
        <a href="#projects" className="btn-primary">Explore Projects</a>
      </div>
    </section>
  );
}