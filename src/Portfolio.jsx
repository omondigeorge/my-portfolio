// ProjectsPage.js
import React from "react";
import "./Portfolio.css";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      imageUrl: "https://logo.com/image-cdn/images/kts928pd/production/480d1678eed6a77b9992d693ada7b900841f4160-500x375.webp?w=640&q=72",
      alt: "Project 1",
      description: "This was my first project",
      link: "https://chronos.thqnordic.com/",
    },
    {
      id: 2,
      imageUrl: "https://logo.com/image-cdn/images/kts928pd/production/63cd674b64834445926040b72aa5295cb99960b9-500x375.webp?w=640&q=72",
      alt: "Project 2",
      description: "This was my second project",
      link: "https://www.enkelmann.org/",
    },
    {
      id: 3,
      imageUrl: "https://logo.com/image-cdn/images/kts928pd/production/ffedc77ab32dd34f7229f24a2a6423dfb9839dae-500x375.webp?w=640&q=72",
      alt: "Project 3",
      description: "This was my third project",
      link: "https://www.crunchybakery.co.uk/",
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
