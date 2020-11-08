import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
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
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  updateDate: {
    type: Date,
    required: false,
  },
  deleted: {
    type: Boolean,
    required: false,
  },
});

export default mongoose.model("order", orderSchema);
