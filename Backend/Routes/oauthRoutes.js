import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import "../config/googleStrategy.js"; // Passport Google Strategy

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    // Generate JWT for frontend
    const token = jwt.sign({ _id: req.user._id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: "24h" });
    // Redirect frontend with token (or send as JSON)
    res.redirect(`http://localhost:3000/oauth?token=${token}`);
  }
);

export default router;
