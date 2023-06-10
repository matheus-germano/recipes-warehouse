import { Entity, Column } from 'typeorm'
import { Base } from './Base'

@Entity()
export class User extends Base {
  @Column('varchar', { unique: true })
    email: string

  @Column('varchar')
    password: string

  @Column('varchar', { nullable: true })
    phoneNumber: string

  @Column('text', { nullable: true })
    profileAvatar: string
}
