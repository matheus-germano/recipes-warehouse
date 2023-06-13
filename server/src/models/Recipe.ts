import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column('varchar', { unique: false })
    name: string

  @Column('uuid')
    creatorId: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'creatorId' })
    creator: User

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
