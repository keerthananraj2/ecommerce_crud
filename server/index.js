import express from "express";
import cors from "cors";// cors important for connection between frontend and backend
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";// bodyparser used to take data from the request made in body
import route from "./routes/recipesRoute.js";
dotenv.config(); // Load environment variables
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000; // Default to 8000 if not set in .env
const URL = process.env.MONGO_URL;
mongoose.connect(URL)  //if the connection of url get succeeded then it executes then() or catches the error
    .then(()=>{
    console.log("DB connected succcesfully!");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(error=>console.log(error));

app.use("/api",route)