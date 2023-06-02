import React, { useState } from "react";
import "./App.css";
import productImage from './downloads/download.jpg';
import productImage1 from './downloads/images.jpg';
import productImage2 from './downloads/images2.jpg';

const ProductBox = ({ imageUrl, name, price, description }) => {
  const handleEdit = () => {
    console.log("Edit clicked for", name);
    // Add your edit logic here
  };

  const handleDelete = () => {
    console.log("Delete clicked for", name);
    // Add your delete logic here
  };

  return (
    <div className="product-box">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>{description}</p>
      <div>
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

const AppIn = () => {
  const handleFormData = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div className="product-container">
        <ProductBox
          imageUrl={productImage}
          name="Shirt 1"
          price="$19.99"
          description="This is a stylish shirt for any occasion."
        />
        <ProductBox
          imageUrl={productImage1}
          name="Shirt 2"
          price="$29.99"
          description="This is another stylish shirt."
        />
        <ProductBox
          imageUrl={productImage2}
          name="Shirt 3"
          price="$39.99"
          description="Yet another stylish shirt."
        />
      </div>
    </div>
  );
};

export default AppIn;
