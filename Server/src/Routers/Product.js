import { Router } from "express";
import product from "../../models/products";
import { getProducts } from "../Controller/Controller";
const router = Router();

router.get("/getproducts", async (req, res) => {
  getProducts(req, res);
});

// router.get("/add", async (req, res) => {
//   try {
//     const products = [];
//     const prdtArr = [
//       "Coca Cola",
//       "Pepsi Cola",
//       "Sprite",
//       "Seven Up",
//       "french fries",
//     ];
//     const priceList = [1.8, 2, 1.2, 1, 1.5, 3, 2, 3];
//     for (let i = 0; i < 5; i++) {
//       const productObj = new product({
//         productId: i,
//         productName: prdtArr[i],
//         price: priceList[i],
//         quantity: 10,
//         lastUpdate: new Date(),
//       });
//       const result = await productObj.save();
//       products.push(result);
//     }
//     console.log("products==>", result);
//     res.json(result);
//   } catch (err) {
//     res.send("error", err);
//   }
// });

export default router;
