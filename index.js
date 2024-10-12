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