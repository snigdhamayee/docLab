import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap 5 CSS
import '../styles.css';

import '../searchBar.css';
function MedicinesComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [relatedData, setRelatedData] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Mock dataset - replace with your actual dataset or API call
    const mockData = [
      { id: 1, name: "Medicine A" },
      { id: 2, name: "Medicine B" },
      { id: 3, name: "Medicine C" },
      // Add more data as needed
    ];

    // Filter the data based on the search query
    const filteredData = mockData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setRelatedData(filteredData);
  };

  return (
    <div className="medicines-container">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search medicines..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <i className="bi bi-search search-icon"></i>
      </div>

      {/* Display related data */}
      <div className="related-data-container">
        {relatedData.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default MedicinesComponent
