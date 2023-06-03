import { CryptoAdapter } from '../adapters/CryptoAdapter'

export class CryptoAdapterFactory {
  private static _instance: CryptoAdapter | null = null

  public static generate () {
    if (this._instance !== null) {
      return this._instance
    } else {
      this._instance = new CryptoAdapter()

      return this._instance
    }
  }
}
