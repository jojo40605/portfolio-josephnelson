import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{project.title}</h2>

        {project.content.map((item, idx) => {
          if (item.type === "image") {
            return <img key={idx} src={item.src} alt={item.alt || ""} className="modal-image" />;
          }
          if (item.type === "video") {
            return (
              <iframe
                key={idx}
                width="100%"
                height="400"
                src={item.src}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            );
          }
          if (item.type === "text") {
            return <p key={idx} dangerouslySetInnerHTML={{ __html: item.content }} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}