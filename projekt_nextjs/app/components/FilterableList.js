import { useState } from "react";
function FilterableList({ items }) {
  const [filterText, setFilterText] = useState("");

  const filteredItems = items.filter((item) =>    item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <div><input type="text"placeholder="Filtruj..."value={filterText}onChange={(e) => setFilterText(e.target.value)}
      />      <ul>        {filteredItems.map((item, index) => (          <li key={index}>{item.name}</li>
        ))}
      </ul></div>
  );
}

export default FilterableList;