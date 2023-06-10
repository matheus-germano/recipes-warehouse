import { Column, PrimaryGeneratedColumn } from 'typeorm'

export abstract class Base {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column('varchar', { unique: true })
    name: string
}
