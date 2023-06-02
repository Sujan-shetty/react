import { useState } from "react";
import './Employee.css';

export default function EmployeeInput({ handleformdata }) {
  const [formdata, setFormdata] = useState({
    name: "",
    price: "",
    description: "",
    imgURL: null
  });

  const handleChange = (e) => {
    const { id, value, checked, type, files } = e.target;
    const inputValue = type === "checkbox" ? checked : type === "file" ? files[0] : value;
    
    setFormdata((prevFormData) => ({
      ...prevFormData,
      [id]: inputValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleformdata(formdata);
    setFormdata({
      name: "",
      price: "",
      description: "",
      imgURL: null
    });
    console.log(formdata);
  };

  return (
    <div className="container">
      <div className="employee-input-container">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Product Name:</label>
          <input
            type="text"
            value={formdata.name}
            id="name"
            onChange={handleChange}
          />

          <br />
          <br />

          <label>Product Description:</label>
          <input
            value={formdata.description}
            type="text"
            id="description"
            onChange={handleChange}
          />

          <br />

          <label>Price:</label>
          <input
            value={formdata.price}
            type="number"
            id="price"
            onChange={handleChange}
          />

          <br />

          <label>Upload Image:</label>
          <input
            type="file"
            id="imgURL"
            onChange={handleChange}
          />

          <br />

          <input className="submitBtn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
