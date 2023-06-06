import { type NextFunction, type Request, type Response } from 'express'
import { type JwtPayload } from 'jsonwebtoken'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { config } from 'dotenv'
import { type AuthAdapter } from '../adapters/AuthAdapter'

export interface CustomRequest extends Request {
  token: string | JwtPayload
}

export class Authentication {
  constructor (
    private readonly authAdapter: AuthAdapter
  ) { }

  isAuthenticated (req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token) {
        throw new Error()
      }

      const decoded = this.authAdapter.decodeToken(token);
      (req as CustomRequest).token = decoded

      next()
    } catch {
      return res.status(400).json({ error: 'Authentication failed' })
    }
  }
}
