import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectGallery.css';

const projects = [
  {
    title: 'Cookstove Emissions Sensor',
    description: 'Multidisciplinary hardware project for rural Peru.',
    media: "https://www.youtube.com/embed/tMV2oE0BjUo?si=AjYnkoBW52Ki2bns",
  },
  {
    title: 'Live Translation System',
    description: 'Hardware-software integration with AI-driven translation.',
    media: "https://www.youtube.com/embed/tMV2oE0BjUo?si=AjYnkoBW52Ki2bns",
  },
  {
    title: 'Self-driving Robot',
    description: 'Autonomous navigation and perception with ROS.',
    media: "https://www.youtube.com/embed/tMV2oE0BjUo?si=AjYnkoBW52Ki2bns",
  }
];

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-thumbnail">
              <iframe
                src={project.media}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <iframe
              src={activeProject.media}
              title={activeProject.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{activeProject.description}</p>
            <button className="close-button" onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;