// ProjectsPage.js
import React from "react";
import "./Portfolio.css";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      imageUrl: "#",
      alt: "Project 1",
      description: "This was my first project",
      link: "#",
    },
    {
      id: 2,
      imageUrl: "#",
      alt: "Project 2",
      description: "This was my second project",
      link: "#",
    },
    {
      id: 3,
      imageUrl: "#",
      alt: "Project 3",
      description: "This was my third project",
      link: "#",
    },
    {
      id: 4,
      imageUrl: "#",
      alt: "Project 4",
      description: "This was my fourth project",
      link: "#",
    },
  ];

  return (
    <div className="projects-page">
      <h2>Here are the projects I've worked on.</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <a href={project.link}>
              <img
                src={project.imageUrl}
                alt={project.alt}
                className="project-image"
              />
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
