import React from "react";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleAdd = () => {
    const trimInput = input.trim();

    if (!input || !trimInput) {
      alert("Please enter the value");
      return;
    }

    if (edit !== null) {
      const updateItems = [...items];
      updateItems[edit] = trimInput;
      setItems(updateItems);
      setEdit(null);
    } else {
      setItems([...items, input]);
    }

    setInput("");
  };

  const handleDelete = (index) => {
    const fileterDel = items.filter((_, i) => i !== index);
    setItems(fileterDel);
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEdit(index);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleAdd}>{!edit ? "Update" : "Add"}</button>
      <ol style={{ listStyleType: "none" }}>
        {" "}
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
