import React, { useState, useCallback } from "react";

// Child component that renders a filtered list and only re-renders if the filter function changes.
const ItemList = React.memo(({ items, filterItems }) => {
  console.log("ItemList rendered!");
  const filteredItems = filterItems(items);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

const UseCalback = () => {
  const [filterText, setFilterText] = useState("");
  const [items] = useState(["Apple", "Banana", "Orange", "Grapes", "Watermelon"]);

  // Memoize the filter function to prevent re-creation on every render
  const filterItems = useCallback(
    (items) => items.filter((item) => item.toLowerCase().includes(filterText.toLowerCase())),
    [filterText]
  );

  return (
    <div>
      <h2>Filterable List with useCallback</h2>
      <input
        type="text"
        placeholder="Type to filter..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      {/* Pass memoized filter function to the memoized child component */}
      <ItemList items={items} filterItems={filterItems} />
    </div>
  );
};

export default UseCalback;
