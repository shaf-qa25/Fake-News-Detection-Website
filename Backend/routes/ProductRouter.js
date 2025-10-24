
import express from "express";
import ensureAuthenticated from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router.get("/", ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "Mobile",
      price: 10000,
    },
    {
      name: "TV",
      price: 20000,
    },
  ]);
});

export default router;
