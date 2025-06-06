import React, { useState } from "react";

const Altmecs2 = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (val.trim()) {
      setItems([...items, { text: val, checked: false }]);
      setVal("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  
  const handleCheckbox = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  
  const deletechecked = () => {
    setItems(items.filter((item) => !item.checked));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={deletechecked}>Delete checked</button>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckbox(index)}
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
