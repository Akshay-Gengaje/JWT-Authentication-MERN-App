import mongoose from "mongoose";

// Retrieve MongoDB URL from environment variables with a fallback option
const mongo_url = process.env.MONGODB_URL || "mongodb://localhost:27017/myapp";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
