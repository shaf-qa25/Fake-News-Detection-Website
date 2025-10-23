import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserModel from "../Models/User.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Find or create user
      let user = await UserModel.findOne({ googleId: profile.id });
      if (!user) {
        user = await UserModel.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        });
      }

      // Generate JWT token for frontend
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      // Attach token to user object for route callback
      user.token = token;

      done(null, user); // Passport will pass user to callback route
    } catch (err) {
      done(err, null);
    }
  }
));
