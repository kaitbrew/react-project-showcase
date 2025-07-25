import { useState } from "react";

export default function SearchProjects({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="searchContainer">
      <input
        id="projectSearch"
        type="Text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}
