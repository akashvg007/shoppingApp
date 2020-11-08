import express from "express";
import mongoose from "mongoose";
import orders from "./Routers/Orders";
import users from "./Routers/Users";
import products from "./Routers/Product";
import cors from "cors";
const url = "mongodb://localhost/shopping";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("db connected...");
});

app.use(cors());
app.use(express.json());
app.use("/orders", orders);
app.use("/products", products);
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("welcome to server");
});

app.listen(3003, () => {
  console.log("Server is listening on port 3003");
});
