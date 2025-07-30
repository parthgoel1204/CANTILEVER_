import { JWT_SECRET } from "../config/env-config.js";
import jwt from "jsonwebtoken";
import errorResponse from "../lib/res/errorResponse.js";
import { StatusCodes } from "http-status-codes";
const authCheck = (req, res, next) => {
  try {
    const token = req.headers?.authorization;
    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json(
          errorResponse(
            "Access Denied: No token provided",
            StatusCodes.UNAUTHORIZED
          )
        );
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json(errorResponse("Invalid or expired token", StatusCodes.FORBIDDEN));
  }
};

export default authCheck;
