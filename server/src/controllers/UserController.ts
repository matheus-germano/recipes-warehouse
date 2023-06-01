import { Request, Response } from "express";
import { config } from "../../ormconfig";
import { User } from "../models/User";
import { ISignIn } from "../@types/signIn";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
require('dotenv').config();

const saltRounds = 8;

const usersRepository = config.getRepository(User);

class UserController {
  async signUp(req: Request<{}, {}, User>, res: Response): Promise<Response> {
    const { id, name, email, password, phone_number, profile_avatar } = req.body;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const userAlreadyExists = await usersRepository.findOne({ where: { email } });

    if (userAlreadyExists) {
      return res.status(400).json({ message: "There is already a user with this e-mail" });
    }

    const user = usersRepository.create({ id, name, email, password: encryptedPassword, phone_number, profile_avatar });
    usersRepository.save(user);

    return res.status(200).json({ message: "User created successfully" });
  }

  async signIn(req: Request<{}, {}, ISignIn>, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const userExists = await usersRepository.findOne({ where: { email } });

    if (!userExists) {
      return res.status(404).json({ message: "User with this e-mail or password not found" });
    }

    const passwordsMatch = bcrypt.compareSync(password, userExists.password);

    if (!passwordsMatch) {
      return res.status(404).json({ message: "User with this e-mail or password not found" });
    }

    const token = jwt.sign({ id: userExists.id?.toString(), name: userExists.name }, String(process.env.JWT_SECRET), {
      expiresIn: '2 days',
    });

    return res.status(200).json({ message: { token } })
  }
}

export { UserController }
