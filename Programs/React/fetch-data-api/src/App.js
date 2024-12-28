import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const API_URL = 'https://jsonplaceholder.typicode.com';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchData = async (endpoint) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${endpoint}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> |{' '}
          <Link to="/users">Users</Link> | <Link to="/comments">Comments</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to JSONPlaceholder App</h1>} />
          <Route
            path="/posts"
            element={<FetchAndDisplay fetchData={fetchData} data={data} loading={loading} error={error} endpoint="posts" />}
          />
          <Route
            path="/users"
            element={<FetchAndDisplay fetchData={fetchData} data={data} loading={loading} error={error} endpoint="users" />}
          />
          <Route
            path="/comments"
            element={<FetchAndDisplay fetchData={fetchData} data={data} loading={loading} error={error} endpoint="comments" />}
          />
        </Routes>
      </div>
    </Router>
  );
}


const FetchAndDisplay = ({ fetchData, data, loading, error, endpoint }) => {
  useEffect(() => {
    fetchData(endpoint);
  }, [endpoint]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div>
      <h2>{endpoint.toUpperCase()}</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;