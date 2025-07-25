import { useState } from "react";
import projectData from "./components/project_data.js";
import Header from "./components/Header.jsx";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList.jsx";
import SearchProjects from "./components/SearchProjects";

function App() {
  const [projects, setProjects] = useState(projectData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="contentContainer">
        <AddProject onAddProject={handleAddProject} />
        <div className="searchAndList">
          <SearchProjects onSearchChange={handleSearchChange} />
          <ProjectList projects={filteredProjects} />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
