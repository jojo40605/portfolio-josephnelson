import React, { useState } from 'react';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ProjectModal from './components/ProjectModal';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="app">
      {/* Hero Section */}
      <Hero />

      {/* Project Gallery */}
      <ProjectGallery onSelectProject={setActiveProject} />

      {/* Resume / About Section */}
      <Resume />

      {/* Footer */}
      <Footer />

      {/* Modal for Project Detail */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}