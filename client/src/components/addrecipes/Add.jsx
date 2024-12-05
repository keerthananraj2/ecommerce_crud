import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./add.css"; // Import your CSS file

const AddRecipe = () => {
  const initialRecipe = {
    dish_name: "",
    cuisine: "",
    ingredients: "",
    cooking_time: "",
    serving_size: ""
  };

  const [recipe, setRecipe] = useState(initialRecipe);
  const navigate = useNavigate();

  // Handler for form input changes
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Form submission handler
  const submitRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/create", recipe);
      toast.success(response.data.msg, { position: "top-right" });
      navigate('/'); // Redirect to the home page after successful submission
    } catch (error) {
      console.error(error);
      toast.error("Error adding recipe. Please try again.");
    }
  };

  return (
    <div className="add-container">
      <Link to="/">Back</Link>
      <h1 className="add-header">Add New Product</h1>
      <form onSubmit={submitRecipe}>
        {/* Dish Name */}
        <div className="add-group">
          <label htmlFor="dish_name" className="add-label">Product Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="dish_name"
            name="dish_name"
            placeholder="Enter Product Name"
            className="add-control"
          />
        </div>

        {/* Cuisine */}
        <div className="add-group">
          <label htmlFor="cuisine" className="add-label">Product type</label>
          <input
            type="text"
            onChange={inputHandler}
            id="cuisine"
            name="cuisine"
            placeholder="e.g., Accessories,electronics,healthcare,furniture,hardware"
            className="add-control"
          />
        </div>

        {/* Ingredients */}
        <div className="add-group">
          <label htmlFor="ingredients" className="add-label">Material Discription</label>
          <textarea
            onChange={inputHandler}
            id="ingredients"
            name="ingredients"
            placeholder="Discribe your meterial"
            className="add-control"
            rows="3"
          ></textarea>
        </div>

        {/* Cooking Time */}
        <div className="add-group">
          <label htmlFor="cooking_time" className="add-label">dilivery time</label>
          <input
            type="text"
            onChange={inputHandler}
            id="cooking_time"
            name="cooking_time"
            placeholder="e.g 1,2,3 days"
            className="add-control"
          />
        </div>

        {/* Serving Size */}
        <div className="add-group">
          <label htmlFor="serving_size" className="add-label">No of Product</label>
          <input
            type="text"
            onChange={inputHandler}
            id="serving_size"
            name="serving_size"
            placeholder="e.g., 4 peices"
            className="add-control"
          />
        </div>

        {/* Submit Button */}
        <div className="add-group">
          <button type="submit" className="add-button">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;