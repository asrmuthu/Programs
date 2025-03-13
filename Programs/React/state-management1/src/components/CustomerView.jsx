import React from 'react';

const CustomerView = ({ items = [], handleDelete }) => {
  return (
    <div>
      <h3>Customer List</h3>
      {items.length === 0 ? (
        <p>No customers added yet.</p>
      ) : (
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CustomerView;
