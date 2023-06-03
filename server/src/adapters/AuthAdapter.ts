import { type IAuthAdapter } from '../protocols/IAuthAdapter'
import jwt from 'jsonwebtoken'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { config as env } from 'dotenv'

export class AuthAdapter implements IAuthAdapter {
  generateToken (id: string, name: string, expiresIn: string): string {
    const token = jwt.sign({ id, name }, String(process.env.JWT_SECRET), {
      expiresIn
    })

    return token
  };
}
