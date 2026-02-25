import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectGallery.css';

const projects = [
  {
    title: 'Cookstove Emissions Sensor',
    description: 'Multidisciplinary hardware project for rural Peru.',
    media: 'public/assets/videos/cookstove.mp4',
  },
  {
    title: 'Live Translation System',
    description: 'Hardware-software integration with AI-driven translation.',
    media: 'public/assets/videos/translation.mp4',
  },
  {
    title: 'Self-driving Robot',
    description: 'Autonomous navigation and perception with ROS.',
    media: 'public/assets/videos/robot.mp4',
  }
];

export default function ProjectGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="project-gallery">
      {projects.map((p, i) => (
        <div key={i} className="project-card" onClick={() => setActive(p)}>
          <video src={p.media} muted loop className="project-preview" />
          <h3>{p.title}</h3>
        </div>
      ))}

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}