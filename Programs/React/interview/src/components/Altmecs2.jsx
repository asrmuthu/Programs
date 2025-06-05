import React, { useState } from 'react';

const Altmecs2 = () => {
  const [val, setVal] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (val.trim()) {
      setItems([...items, { text: val, selected: false }]);
      setVal('');
    }
  };

  const toggleSelect = (index) => {
    setItems(items.map((item, i) =>
      i === index ? { ...item, selected: !item.selected } : item
    ));
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const deleteSelected = () => {
    setItems(items.filter(item => !item.selected));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={deleteSelected}>Delete Selected</button>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.selected}
              onChange={() => toggleSelect(index)}
            />
            {item.text}
            <button onClick={() => deleteItem(index)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Altmecs2;
