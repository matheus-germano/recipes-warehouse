import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
require('dotenv').config();

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

class Authentication {
  isAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');

      if (!token) {
        throw new Error();
      }

      const decoded = jwt.verify(token, String(process.env.JWT_SECRET));
      (req as CustomRequest).token = decoded;

      next();
    } catch {
      return res.status(400).json({ message: "Authentication failed" });
    }
  }
}

export { Authentication }
