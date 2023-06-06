import { type JwtPayload } from 'jsonwebtoken'

export interface IAuthAdapter {
  generateToken: (id: string, name: string, expiresIn: string) => string
  decodeToken: (token: string) => JwtPayload | string
}
