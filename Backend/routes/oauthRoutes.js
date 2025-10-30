import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import "../config/googleStrategy.js"; 

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {

    const token = jwt.sign({ _id: req.user._id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.redirect(`http://localhost:3000/oauth?token=${token}`);
  }
);

export default router;
