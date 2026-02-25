import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGallery from "./components/ProjectGallery";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectGallery />
      <Resume />
      <Footer />
    </>
  );
}