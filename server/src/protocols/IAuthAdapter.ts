export interface IAuthAdapter {
  generateToken: (id: string, name: string, expiresIn: string) => string
}
