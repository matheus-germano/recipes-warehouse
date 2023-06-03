import { type Request, type Response } from 'express'
import { config } from '../../ormconfig'
import { User } from '../models/User'
import { type ISignIn } from '../@types/signIn'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { config as env } from 'dotenv'

const saltRounds = 8

const usersRepository = config.getRepository(User)

class UserController {
  async signUp (req: Request<unknown, unknown, User>, res: Response): Promise<Response> {
    const { id, name, email, password, phoneNumber, profileAvatar } = req.body
    const encryptedPassword = await bcrypt.hash(password, saltRounds)

    const userAlreadyExists = await usersRepository.findOne({ where: { email } })

    if (userAlreadyExists !== null) {
      return res.status(400).json({ error: 'There is already a user with this e-mail' })
    }

    const user = usersRepository.create({ id, name, email, password: encryptedPassword, phoneNumber, profileAvatar })
    await usersRepository.save(user)

    return res.status(200).json({ result: 'User created successfully' })
  }

  async signIn (req: Request<unknown, unknown, ISignIn>, res: Response): Promise<Response> {
    const { email, password } = req.body

    const userExists = await usersRepository.findOne({ where: { email } })

    if (userExists === null) {
      return res.status(404).json({ error: 'User with this e-mail or password not found' })
    }

    const passwordsMatch = bcrypt.compareSync(password, userExists.password)

    if (!passwordsMatch) {
      return res.status(404).json({ error: 'User with this e-mail or password not found' })
    }

    const token = jwt.sign({ id: userExists.id?.toString(), name: userExists.name }, String(process.env.JWT_SECRET), {
      expiresIn: '2 days'
    })

    return res.status(200).json({ result: { token } })
  }
}

export { UserController }
