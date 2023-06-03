import { type NextFunction, type Request, type Response } from 'express'
import { validate } from 'uuid'

class Uuid {
  verifyUuid (req: Request, res: Response, next: NextFunction): Response | void {
    const { id } = req.params

    if (!validate(id)) {
      return res.status(400).json({ error: 'Invalid UUID' })
    }

    next()
  }
}

export { Uuid }
