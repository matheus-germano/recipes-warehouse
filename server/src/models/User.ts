import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column('varchar', { unique: false })
    name: string

  @Column('varchar', { unique: true })
    email: string

  @Column('varchar')
    password: string

  @Column('varchar', { nullable: true })
    phoneNumber: string

  @Column('text', { nullable: true })
    profileAvatar: string
}
