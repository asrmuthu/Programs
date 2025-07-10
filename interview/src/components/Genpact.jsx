import React, { useState, useCallback } from 'react';
import './style.css';

// Static product list
const products = [
  { id: 1, name: 'Phone' },
  { id: 2, name: 'Laptop' },
  { id: 3, name: 'Headphones' },
];

// Memoized Product component
const Product = React.memo(function Product({ product, liked, onLike }) {
  console.log(`Rendering: ${product.name}`);
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => onLike(product.id)}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
});

function ProductList() {
  const [likedIds, setLikedIds] = useState([]);

  // Memoize handleLike to avoid changing function reference on every render
  const handleLike = useCallback((id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }, []);

  const likedProducts = products.filter((p) => likedIds.includes(p.id));

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          liked={likedIds.includes(product.id)}
          onLike={handleLike}
        />
      ))}
      <h4>Liked Products: {likedProducts.map((p) => p.name).join(', ') || 'None'}</h4>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ProductList />
    </div>
  );
}
