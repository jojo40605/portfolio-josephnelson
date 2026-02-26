import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import "./ProjectGallery.css";

const projects = [
  {
    title: "Cookstove Emissions Sensor",
    overview: "Hardware project for rural Peru. Custom PCBs and sensors.",
    content: [
      { type: "image", src: "/assets/images/laser_tag_1.jpg", alt: "Cookstove Image 1" },
      { type: "image", src: "/assets/images/laser_tag_2.jpg", alt: "Cookstove Image 2" },
      { type: "image", src: "/assets/images/laser_tag_3.jpg", alt: "Cookstove Image 3" },
      { type: "text", content: "Designed custom PCBs to measure emissions and temperature. Integrated sensors for real-time data collection in rural Peru." }
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
      { type: "image", src: "src/assets/images/robot_thumb.png", alt: "Laser Tag Image 1" },
      { type: "image", src: "src/assets/images/robot_thumb.png", alt: "Laser Tag Image 2" },
      { type: "image", src: "src/assets/images/robot_thumb.png", alt: "Laser Tag Image 3" },
      { type: "text", content: "Designed IR communication protocol and signal processing system for a laser tag setup. Tested range, latency, and accuracy." }
    ],
    thumbnail: "assets/images/robot_thumb.png",
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