import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column('varchar', { unique: true })
    name: string
}
