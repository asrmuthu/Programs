import { useState, useEffect } from "react";
import axios from "axios";

const useCustomAPI = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError('Error Message', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  return { data, loading, error };
};

export default useCustomAPI;