import ProjectCard from "./ProjectCard";

function ProjectList({ projects = [] }) {
  return (
    <div className="verticalListContainer">
      {projects.map((project) => (
        <div key={project.name} className="verticalList">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
