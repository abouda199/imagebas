import React, { useState } from "react";
import "./mid.css";
import SearchBar from "./searchbar/searchbar";
import Box from "./box/box";

function Mid({ onSelectTrip }) {
  const [filters, setFilters] = useState({ from: "", to: "", date: "" });

  const handleSearch = (criteria) => {
    setFilters(criteria); // Met à jour les filtres
  };

  return (
    <div className="midContainer">
      {/* Barre de recherche */}
      <SearchBar onSearch={handleSearch} />
      {/* Liste des trajets */}
      <Box onSelectTrip={onSelectTrip} filters={filters} />
      
    </div>
    
  );
}

export default Mid;
