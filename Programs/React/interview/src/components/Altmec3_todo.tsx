import React, { useState } from "react";

const Altmec3_todo = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleAdd = () => {
    if (val.trim() === "") return;
    setItems([...items, val]);
    setVal("");
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const selectAll = () => {
    setSelected(items.map((_, i) => i));
  };

  const deleteSelected = () => {
    const newItems = items.filter((_, i) => !selected.includes(i));
    setItems(newItems);
    setSelected([]);
  };

  const deleteAll = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>To Do</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {items.length > 0 && (
        <>
          <button onClick={selectAll}>Select All</button>
          <button onClick={deleteSelected}>Delete Selected</button>
          <button onClick={deleteAll}>Delete All</button>
        </>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selected.includes(index)}
              onChange={() => handleSelect(index)}
            />
            {item}
            <button onClick={() => handleDelete(index)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Altmec3_todo;
