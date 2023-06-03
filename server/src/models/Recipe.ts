import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column('uuid')
    creatorId: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'creatorId' })
    creator: User

  @Column('varchar')
    name: string

  @Column('varchar')
    description: string

  @Column('text')
    preparationMethod: string

  @Column('int')
    preparationTime: number

  @Column('decimal')
    servings: number

  @Column('date')
    createdAt: Date
}
