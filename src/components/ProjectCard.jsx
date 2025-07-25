import { useState } from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="projectCard">
      <img
        src="https://placehold.co/100x100?text=X"
        alt="Project placeholder"
        className="projectImage"
      />
      <div className="projectCardContent">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
