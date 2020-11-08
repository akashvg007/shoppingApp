import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  lastUpdate: {
    type: Date,
    required: false,
  },
});

export default mongoose.model("product", productSchema);
