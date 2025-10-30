import jwt from "jsonwebtoken";

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      message: "Authentication failed. JWT token is required",
    });
  }

  const token = authHeader.split(" ")[1]; // Expected format: "Bearer <token>"

  if (!token) {
    return res.status(401).json({
      message: "Authentication failed. Token missing",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { _id: decoded._id, email: decoded.email };
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(403).json({
      message: "Invalid token. Please log in again.",
    });
  }
};

export default ensureAuthenticated;
