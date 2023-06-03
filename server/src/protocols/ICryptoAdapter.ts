export interface ICryptoAdapter {
  encrypt: (password: string) => Promise<string>
  compare: (password: string, hash: string) => boolean
}
