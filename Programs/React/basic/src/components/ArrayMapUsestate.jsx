import React, { useState } from 'react';


const ArrayMapUsestate = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1', description: 'This is item 1', status: 'Active' },
        { id: 2, name: 'Item 2', description: 'This is item 2', status: 'Inactive' },
        { id: 3, name: 'Item 3', description: 'This is item 3', status: 'Active' },
      ]);
   
      // Function to add a new item
      const addItem = () => {
        const newItem = {
          id: items.length + 1,
          name: `Item ${items.length + 1}`,
          description: `This is item ${items.length + 1}`,
          status: items.length % 2 === 0 ? 'Active' : 'Inactive',
        };
        setItems([...items, newItem]);
      };
   
      // Function to toggle the status of an item
      const toggleStatus = (id) => {
        setItems(items.map((item) =>
            item.id === id ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' } : item
          )
        );
      };
      // Function to delete an item
      //filter() is a method used to create a new array that includes all items except for the one that matches the provided id.
      const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
      };
   
      return (
        <div>
          <h1>Array Map Example</h1>
          <button onClick={addItem} style={{ marginBottom: '20px' }}>
            Add Item
          </button>
          <ul>
            {items.map((item) => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <strong>{item.name}</strong> - {item.description}
                <span
                  style={{
                    marginLeft: '10px',
                    fontWeight: 'bold',
                    color: item.status === 'Active' ? 'green' : 'red',
                  }}
                >
                  ({item.status})
                </span>
                <button
                  onClick={() => toggleStatus(item.id)}
                  style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
export default ArrayMapUsestate