const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // traer el token del header
      token = req.headers.authorization.split(" ")[1];

      //verificar el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //traer el usuario del token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("No Autorizado");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No token");
  }
});

module.exports = { protect };
