import React, { useState } from 'react';

const SelectDeselectAll = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
    { id: 4, name: 'Item 4', selected: false },
    { id: 5, name: 'Item 5', selected: false }
  ]);

  // Handle select all
  const handleSelectAll = () => {
    setItems(items.map(item => ({ ...item, selected: true })));
  };

  // Handle deselect all
  const handleDeselectAll = () => {
    setItems(items.map(item => ({ ...item, selected: false })));
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  return (
    <div>
      <div>
        <button onClick={handleSelectAll}>Select All</button>
        <button onClick={handleDeselectAll}>Deselect All</button>
      </div>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDeselectAll;