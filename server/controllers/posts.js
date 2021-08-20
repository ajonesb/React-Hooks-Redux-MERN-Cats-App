import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";

const router = express.Router();

// Contains all handlers for Routes
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    // Retrieve all posts from Database
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Gets posts from database
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Creates posts to database
export const createPost = async (req, res) => {
  const { breed, description, selectedFile, catName, tags } = req.body;

  const newPostMessage = new PostMessage({
    breed,
    description,
    selectedFile,
    catName,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Updates Posts to database
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { breed, description, catName, selectedFile, tags } = req.body;
  // Make sure Id is valid
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { catName, breed, description, tags, selectedFile, _id: id };
  // https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

// Deletes Posts from database
export const deletePost = async (req, res) => {
  const { id } = req.params;
  // Make sure Id is valid
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  // https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
  await PostMessage.findByIdAndRemove(id);
  console.log("Deleted");
  res.json({ message: "Post deleted successfully." });
};

export default router;
