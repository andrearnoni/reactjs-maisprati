import React, { useState } from "react";

function FilterList() {
  const [filter, setFilter] = useState("");
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Bradd",
    "Antonio",
  ];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Filtro de Lista</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar nomes"
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
