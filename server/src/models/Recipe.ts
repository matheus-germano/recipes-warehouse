import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { User } from './User'
import { Base } from './Base'

@Entity()
export class Recipe extends Base {
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
