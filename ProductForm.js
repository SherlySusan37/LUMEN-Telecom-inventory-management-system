import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    stock_level: 0,
    reorder_point: 0,
    price: 0.0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', product);
      alert('Product added successfully');
      setProduct({ name: '', category: '', stock_level: 0, reorder_point: 0, price: 0.0 });
    } catch (error) {
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />
      </div>
      <div>
        <label>Stock Level:</label>
        <input type="number" name="stock_level" value={product.stock_level} onChange={handleChange} required />
      </div>
      <div>
        <label>Reorder Point:</label>
        <input type="number" name="reorder_point" value={product.reorder_point} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" step="0.01" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
