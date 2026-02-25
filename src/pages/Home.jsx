<section>
  <h2>Projects</h2>
  <div className="projects-grid">
    {projects.map((p, idx) => (
      <ProjectCard key={idx} {...p} />
    ))}
  </div>
</section>