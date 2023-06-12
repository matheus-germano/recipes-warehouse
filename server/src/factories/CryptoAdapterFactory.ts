import { CryptoAdapter } from '../adapters/CryptoAdapter'
import { Factory } from './Factory'

export class CryptoAdapterFactory extends Factory {
  private static _instance: CryptoAdapter | null = null

  public static generate (): CryptoAdapter {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new CryptoAdapter()

      return this._instance
    }
  }
}
