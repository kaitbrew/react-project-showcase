import { useState } from "react";

export default function AddProject({ onAddProject }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    setErrors({});

    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Project title is required";
    }
    if (!description.trim()) {
      newErrors.description = "Project description is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProject = { name: name.trim(), description: description.trim() };
    onAddProject(newProject);
    setName("");
    setDescription("");
  }

  return (
    <>
      <form className="projectForm" onSubmit={handleSubmit}>
        {" "}
        <h2 className="projectFormHeader">Add Project</h2>
        <div className="titleField">
          <label htmlFor="projectName">Title</label>
          <br />
          <input
            id="projectName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="descriptionField">
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
