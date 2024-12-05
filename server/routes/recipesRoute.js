//ROUTES CODES///

import express from "express";
//import { createrecipes, getallrecipes, getonerecipes, updaterecipes } from "../controllers/recipesController.js";
import {createrecipes} from "../controllers/recipesController.js"
import {getallrecipes} from "../controllers/recipesController.js"
import {getonerecipes} from "../controllers/recipesController.js"
import {updaterecipes} from "../controllers/recipesController.js";
import {deleterecipes} from "../controllers/recipesController.js"

const route = express.Router();
route.post("/create", createrecipes);
route.get("/getAll",getallrecipes);
route.get("/getone/:id",getonerecipes);
route.put("/update/:id", updaterecipes); // Update a recipe by ID
route.delete("/delete/:id",deleterecipes); 


export default route;