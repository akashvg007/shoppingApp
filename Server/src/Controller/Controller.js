import orderSchema from "../../models/orders";
import userSchema from "../../models/users";
import productSchema from "../../models/products";
import { makeResponse } from "../Response/Response";

export const getUser = async (req, res) => {
  try {
    const Orders = await userSchema.find();
    makeResponse(res, Orders);
  } catch (err) {
    makeResponse(res, [], true);
  }
};

export const addOrder = async (req, res) => {
  try {
    const {
      userName,
      userId,
      productId,
      productName,
      price,
      quantity,
      total,
    } = req.body;
    const date = new Date();
    const updateDate = new Date();
    const count = await orderSchema.count();
    const orderObj = new orderSchema({
      orderId: count,
      userId,
      userName,
      productId,
      productName,
      price,
      quantity,
      total,
      date,
      updateDate,
      deleted: false,
    });
    const Orders = await orderObj.save();
    makeResponse(res, Orders);
  } catch (err) {
    console.log("Controller::catch::error", err);
    makeResponse(res, [], true);
  }
};

export const searchOrder = async (req, res) => {
  try {
    const { searchText, option } = req.body;
    let dateStart = new Date();
    let dateEnd = new Date();
    if (option === 2) {
      dateStart.setHours(0, 0, 0);
    } else if (option === 3) {
      const currentDate = dateStart.getDate();
      dateStart.setDate(currentDate - 7);
      dateStart.setHours(0, 0, 0);
    }

    const Orders = await orderSchema
      .find({
        $text: { $search: searchText },
        deleted: { $ne: true },
        date: {
          $gte: dateStart,
          $lt: dateEnd,
        },
      })
      .sort({ date: "asc" });
    console.log("searchOrder::Order", Orders);
    makeResponse(res, Orders);
  } catch (err) {
    makeResponse(res, [], true);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    const updateDate = new Date();
    const Orders = await orderSchema.find({ orderId });
    for (const k in Orders) {
      if (req?.body[k]) Orders[k] = req.body[k];
    }
    Orders.updateDate = updateDate;
    const orderObj = new orderSchema({
      Orders,
    });
    const resp = await orderObj.save();
    makeResponse(res, resp);
  } catch (err) {
    makeResponse(res, [], true);
  }
};
export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    await orderSchema.update(
      { orderId },
      { deleted: true, updateDate: new Date() }
    );
    makeResponse(res, { status: "sucess" });
  } catch (err) {
    makeResponse(res, [], true);
  }
};

export const getOrders = async (req, res) => {
  try {
    const Orders = await orderSchema.find({ deleted: false });
    makeResponse(res, Orders);
  } catch (err) {
    makeResponse(res, [], true);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productSchema.find();
    makeResponse(res, products);
  } catch (err) {
    makeResponse(res, [], true);
  }
};
