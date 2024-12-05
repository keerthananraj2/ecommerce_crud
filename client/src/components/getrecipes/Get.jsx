import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./get.css";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getall");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        toast.error("Failed to fetch recipes. Please try again later.", {
          position: "top-right",
        });
      }
    };

    fetchData();
  }, []);

  const deleteRecipe = async (recipeId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/delete/${recipeId}`
      );
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe._id !== recipeId)
      );
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error("Error deleting recipe:", error);
      toast.error("Failed to delete recipe.", { position: "top-right" });
    }
  };

  return (
    <div className="get-container">
      <Link to="/add" className="add-button">
        Add Product
      </Link>
      <table className="get-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Material Description</th>
            <th>Delivery Time</th>
            <th>No of Products</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={recipe._id}>
              <td>{index + 1}</td>
              <td>{recipe.dish_name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.cooking_time} mins</td>
              <td>{recipe.serving_size}</td>
              <td className="get-actions">
                <button
                  className="get-button get-delete"
                  onClick={() => deleteRecipe(recipe._id)}
                >
                  Delete
                </button>
                <Link className="get-button get-edit" to={`/edit/${recipe._id}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipe;
