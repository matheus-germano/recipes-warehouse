import { type ICryptoAdapter } from '../protocols/ICryptoAdapter'
import bcrypt from 'bcrypt'

export class CryptoAdapter implements ICryptoAdapter {
  async encrypt (password: string): Promise<string> {
    const encryptedPassword = await bcrypt.hash(password, 8)

    return encryptedPassword
  }

  compare (password: string, hash: string): boolean {
    const passwordsMatch = bcrypt.compareSync(password, hash)

    return passwordsMatch
  }
}
