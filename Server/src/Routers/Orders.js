import { Router } from "express";
import {
  getOrders,
  addOrder,
  searchOrder,
  updateOrder,
  deleteOrder,
} from "../Controller/Controller";
const router = Router();

router.get("/getorders", async (req, res) => {
  getOrders(req, res);
});

router.post("/addorder", async (req, res) => {
  addOrder(req, res);
});
router.post("/searchorder", async (req, res) => {
  searchOrder(req, res);
});
router.post("/updateorder", async (req, res) => {
  updateOrder(req, res);
});
router.post("/deleteorder", async (req, res) => {
  deleteOrder(req, res);
});

export default router;
