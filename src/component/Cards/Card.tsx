import { useRef } from "react";
import { projects } from "../../data/data";

export const Card = () => {
    const projectsRef = useRef<HTMLHeadingElement>(null);
  return (
    <div className="projects" ref={projectsRef}>
      {projects.map((project) => (
        <div className="project" key={project.name}>
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noreferrer">
            Ver proyecto
          </a>
        </div>
      ))}
    </div>
  );
};
