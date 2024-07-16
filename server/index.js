import express from "express";
import dotenv from "dotenv";
import connectDB from "./app/db/db.js";

dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json());

// Connect to Database
connectDB();

// Define the PORT
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
