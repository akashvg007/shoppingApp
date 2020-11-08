import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("users", userSchema);
