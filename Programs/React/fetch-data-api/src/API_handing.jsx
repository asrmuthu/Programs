import React, { useState, useEffect } from "react";

const API_handing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      try {
        const API1 = await fetch("https://dummyjson.com/products");
        const API = await API1.json();
        setItems(API.products); // Store products in state
      } catch (error) {
        console.log("Error", error);
      }
    };

    FetchAPI();
  }, []);

  return (
    <div>
      <p>Product Reviews</p>
      <ol>
        {items.map((item, id) =>
          item.reviews.filter((rew) => rew.rating > 3).map((filteredReview, index) => (
              <li key={index}>{filteredReview.reviewerName}</li>
            ))
        )}
      </ol>
    </div>
  );
};

export default API_handing;
