import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([...items, { text: val, checked: false }]);
    setVal("");
  };

  const handleDel = (index) => {
    const del = items.filter((_, i) => i !== index);
    setItems(del);
  };

  const handleCheckbox = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelect = () => {
    setItems(items.filter((item) => !item.checked));
  };

  const DeleteAll = () => {
    setItems([]);
  };

  const handleEdit = (index) => {
    setVal(items[index].text);
    handleDel(index);
  };

    // Load items from localStorage on mount
  useEffect(() => {
    const s = localStorage.getItem("val");
    if (s) {
      setItems(JSON.parse(s));
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("val", JSON.stringify(items));
    } 
  }, [items]);

    return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSelect}>DeleteSelected</button>
      <button onClick={DeleteAll}>DeleteAll</button>
      <ol>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              color: item.checked ? "red" : "black",
              textDecoration: item.checked ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckbox(index)}
            />
            {item.text}
            <button onClick={() => handleDel(index)}>Del</button>
<button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
