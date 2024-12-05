import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"; // Adjust the path if needed
import toast from 'react-hot-toast';
import "bootstrap/dist/css/bootstrap.min.css";
import "./update.css"; // Import your CSS file

const Edit = () => {
  const initialRecipeState = {
    dish_name: "",
    cuisine: "",
    ingredients: "",
    cooking_time: "",
    serving_size: ""
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(initialRecipeState);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
    console.log(recipe);
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getone/${id}`) // Fetch the specific recipe
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log("Error fetching recipe:", error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, recipe) // Update the recipe
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/"); // Navigate back to the recipe list
      })
      .catch((error) => {
        console.error("Error updating recipe:", error);
        toast.error("Failed to update the recipe.", { position: "top-right" });
      });
  };

  return (
    <div className='update-container'>
      <Link to={"/"}>Back</Link>
      <h3 className="update-header">Update Recipe</h3>
      <form className='update-form' onSubmit={submitForm}>
        <div className="update-form-group">
          <label htmlFor="dish_name" className="update-label">Product Name</label>
          <input
            type="text"
            value={recipe.dish_name}
            onChange={inputChangeHandler}
            id="dish_name"
            name="dish_name"
            autoComplete='off'
            placeholder='Product Name'
            className="update-control"
          />
        </div>
        <div className="update-form-group">
          <label htmlFor="cuisine" className="update-label">Product Type</label>
          <input
            type="text"
            value={recipe.cuisine}
            onChange={inputChangeHandler}
            id="cuisine"
            name="cuisine"
            autoComplete='off'
            placeholder='Product Type'
            className="update-control"
          />
        </div>
        <div className="update-form-group">
          <label htmlFor="ingredients" className="update-label">Material Description</label>
          <input
            type="text"
            value={recipe.ingredients}
            onChange={inputChangeHandler}
            id="ingredients"
            name="ingredients"
            autoComplete='off'
            placeholder='Material Description'
            className="update-control"
          />
        </div>
        <div className="update-form-group">
          <label htmlFor="cooking_time" className="update-label">Delivery Time</label>
          <input
            type="number"
            value={recipe.cooking_time}
            onChange={inputChangeHandler}
            id="cooking_time"
            name="cooking_time"
            autoComplete='off'
            placeholder='Delivery Time (in mins)'
            className="update-control"
          />
        </div>
        <div className="update-form-group">
          <label htmlFor="serving_size" className="update-label">No of Product</label>
          <input
            type="number"
            value={recipe.serving_size}
            onChange={inputChangeHandler}
            id="serving_size"
            name="serving_size"
            autoComplete='off'
            placeholder='No of Product'
            className="update-control"
          />
        </div>
        <div className="update-form-group">
          <button type="submit" className="update-button">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
