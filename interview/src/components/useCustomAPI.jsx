import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useCustomAPI = (url) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API = async () => {
      setLoading(true);
      try {
        const FetchData = await axios.get(url);
        console.log(FetchData.data.products);
        setItems(FetchData.data.products);
      } catch (error) {
        console.log(error, "Please contact Developers");
        setError("An error occurred, please contact dev");
      } finally {
        setLoading(false);
      }
    };
    API();
  }, []);

  return { items, error, loading, setItems };
};

export default useCustomAPI;
