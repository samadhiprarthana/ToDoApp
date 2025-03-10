import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Route Imports
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";  // Import userRoutes

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
app.get("/", (req, res) => res.send("API is running..."));

// Use Routes
app.use("/api/todos", todoRoutes);     // Todo routes
app.use("/api/users", userRoutes);      // User routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
