import express, { Router } from "express";
import user from "../../models/users";
import { getUser } from "../Controller/Controller";
const router = Router();

router.get("/getusers", async (req, res) => {
  getUser(req, res);
});

export default router;
