import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PromiseAll() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Async function inside useEffect to fetch users
    const fetchUsers = async () => {
      try {
        // Simulate multiple API requests (e.g., users from different pages)
        const requests = [
          axios.get('https://jsonplaceholder.typicode.com/users'),
          axios.get('https://dummyjson.com/products')
        ];

        // Wait for all requests to resolve with Promise.all
        const responses = await Promise.all(requests);

        // Use flatMap to flatten and combine the user data from all responses
        const allUsers = responses.flatMap(response => response.data.users);

        setUsers(allUsers);  // Set the combined and flattened user data

      } catch (error) {
        // Handle any errors (e.g., network issues)
        setError('Failed to fetch users');
        console.error(error);  // Log the error for debugging
      }
    };

    fetchUsers();  // Call the async function

  }, []); // Empty dependency array to only run on component mount

  // Show an error message if there is an issue with the request
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display the fetched users in a list
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PromiseAll;
