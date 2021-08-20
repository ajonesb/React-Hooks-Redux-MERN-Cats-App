import mongoose from "mongoose";

// Specify what each post will have
const postSchema = mongoose.Schema({
  breed: String,
  description: String,
  catName: String,
  tags: [String],
  selectedFile: String
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
