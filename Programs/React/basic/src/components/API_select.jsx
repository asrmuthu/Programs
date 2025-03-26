import React, { useState, useEffect } from "react";
import axios from "axios";

const API_select = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people");
        setUsers(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserSelect = async (e) => {
    const selectedUserName = e.target.value;
    setSelectedUser(selectedUserName);

    // Get the selected user's films if available
    const selectedUser = users.find((user) => user.name === selectedUserName);
    if (selectedUser) {
      const filmRequests = selectedUser.films.map((url) =>
        axios.get(url).then((res) => res.data.title)
      );
      const films = await Promise.all(filmRequests);
      setFilms(films);
    }
  };

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div>
        <label>Name</label>
        <select onChange={handleUserSelect}>
          <option>Select</option>
          {users.map((user, index) => (
            <option key={index} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      {selectedUser && (
        <div>
          <h2>{selectedUser}</h2>
          <h3>Films:</h3>
          {films.length > 0 ? (
            <ul>
              {films.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          ) : (
            <p>No films available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default API_select;
