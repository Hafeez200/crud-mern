import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/test";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));
  
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
  });
  
  const User = mongoose.model("User", userSchema);
  const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/api/users", async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from MongoDB
      res.status(200).json({ message: "Fetching all users", data: users });
    } catch (error) {
      res.status(500).json({ message: "An error occurred", error: error.message });
    }
  });