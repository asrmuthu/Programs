import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', description: 'This is item 1', status: 'Active' },
    { id: 2, name: 'Item 2', description: 'This is item 2', status: 'Inactive' },
    { id: 3, name: 'Item 3', description: 'This is item 3', status: 'Active' },
  ]);


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState(''); // State for search input


  // Function to add a new item
  const addItem = () => {
    if (name.trim() === '' || description.trim() === '') {
      alert('Please fill out both fields.');
      return;
    }
    const newItem = {
      id: items.length + 1,
      name,
      description,
      status: items.length % 2 === 0 ? 'Active' : 'Inactive',
    };


    setItems([...items, newItem]);
    setName(''); // Clear input fields
    setDescription('');
  };


  // Function to toggle the status of an item
  const toggleStatus = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' }
          : item
      )
    );
  };


  // Function to delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };


  // Filtered items based on the search input
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );  


  return (
    <div>
      <h1>Array Map Example</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Enter item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button
          onClick={addItem}
          style={{
            padding: '5px 10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
        >
          Add Item
        </button>
      </div>


      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '5px', width: '300px' }}
        />
      </div>


      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
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
          ))
        ) : (
          <p>No items match your search.</p>
        )}
      </ul>
    </div>
  );
};


export default App;
