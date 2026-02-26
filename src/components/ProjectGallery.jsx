import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import "./ProjectGallery.css";

const projects = [
  {
    title: "Cookstove Emissions Sensor",
    overview: "Hardware project for rural Peru. Custom PCBs and sensors.",
    content: [
  { 
    type: "text", 
    content: "As part of a Global Engineering Outreach (GEO) team at BYU, I worked on developing sustainable engineering solutions for rural communities in Peru. \
    Our goal was to design systems that could operate reliably in low-resource environments while addressing real health and infrastructure challenges. \
    NGOs provide stoves to aid with cooking of villagers, but these must be regiorously tested to ensure safe CO and particulate emissions. \
    Our custom sensor cost 10% of the comercial alternatives and proved to be more accurate and reliable in field testing."
  },
  { 
    type: "image", 
    src: "assets/images/arduino_pcb.png", 
    alt: "Custom PCB Design" 
  },
  { 
    type: "text", 
    content: "I designed and tested custom PCBs for sensor integration, focusing on durability, power efficiency, and field serviceability. The boards interfaced with environmental sensors to collect real-time data on system performance and emissions." 
  },
  { 
    type: "image", 
    src: "assets/images/lcd_pcb.png", 
    alt: "LCD Interface Board" 
  },
  { 
    type: "text", 
    content: "I implemented embedded firmware to manage sensor acquisition, signal conditioning, and user interface control. The system was designed to be intuitive for local operators while maintaining engineering-grade measurement accuracy. This also included extensive CAD work." 
  },
  { 
    type: "image", 
    src: "assets/images/screen_cad.png", 
    alt: "CAD Design and Interface Layout" 
  },
  { 
    type: "text", 
    content: "Beyond hardware development, I contributed to system validation, field testing preparation, and iterative design improvements based on environmental constraints. The project emphasized sustainable engineering, long-term reliability, and measurable impact in developing regions." 
  }
],
    thumbnail: "assets/images/sensor_thumb.png",
  },
  {
    title: "Live Translation System",
    overview: "Real-time multilingual translation system integrating hardware and Kotlin app.",
    content: [
      { type: "video", src: "https://www.youtube.com/embed/tMV2oE0BjUo?si=AjYnkoBW52Ki2bns" },
      { type: "text", content: "Implemented speech-to-speech translation with Azure ML services, hardware interface, and Kotlin application." }
    ],
    thumbnail: "assets/images/robot_thumb.png",
  },
  {
    title: "Self-Driving Robot",
    overview: "Autonomous robot with embedded systems and sensors.",
    content: [
      { type: "video", src: "https://www.youtube.com/embed/LHD8BvKomRE" },
      { type: "text", content: "Developed a fully autonomous robot with real-time navigation, sensors, and obstacle avoidance." }
    ],
    thumbnail: "assets/images/robot_thumb.png",
  },
  {
    title: "Laser Tag System",
    overview: "IR communication and signal processing project.",
    content: [
      { type: "image", src: "assets/images/robot_thumb.png", alt: "Laser Tag Image 1" },
      { type: "image", src: "assets/images/robot_thumb.png", alt: "Laser Tag Image 2" },
      { type: "image", src: "assets/images/robot_thumb.png", alt: "Laser Tag Image 3" },
      { type: "text", content: "Designed IR communication protocol and signal processing system for a laser tag setup. Tested range, latency, and accuracy." }
    ],
    thumbnail: "assets/images/robot_thumb.png",
  },
  {
    title: "Salem Witch Trials Game",
    overview: "Interactive historical RPG game.",
    content: [
  {
    type: "text",
    content: "I developed a top-down RPG-style game based on the historical Salem Witch Trials. The player assumes the role of a magistrate responsible for collecting evidence, questioning townspeople, and determining the outcome of each case. The goal was to combine interactive storytelling with historically grounded decision-making systems."
  },
  {
    type: "image",
    src: "assets/images/salem.gif",
    alt: "Salem Witch Trials Gameplay"
  },
  {
    type: "text",
    content: "The game features a state-driven dialogue system that tracks evidence, character testimony, and player choices. Each decision influences public opinion, credibility metrics, and the final verdict, creating branching narrative paths and multiple possible outcomes."
  },
  {
    type: "text",
    content: "I implemented modular game systems for movement, interaction zones, and case progression. The architecture separates game logic from rendering, allowing for scalable content expansion and cleaner debugging. Evidence objects, testimonies, and verdict logic are handled through structured data models."
  },
  ],
    thumbnail: "assets/images/salem_thumb.png",
  },
];

export default function ProjectGallery() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="project-gallery">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <img src={project.thumbnail} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.overview}</p>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}