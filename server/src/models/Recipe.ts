import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  private id: string

  @Column('varchar', { unique: false })
  private name: string

  @Column('uuid')
  private creatorId: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'creatorId' })
    creator: User

  @Column('varchar')
  private description: string

  @Column('text')
  private preparationMethod: string

  @Column('int')
  private preparationTime: number

  @Column('decimal')
  private servings: number

  @Column('date')
  private createdAt: Date

  public getId (): string {
    return this.id
  }

  public setId (id: string): void {
    this.id = id
  }

  public getName (): string {
    return this.name
  }

  public setName (name: string): void {
    this.name = name
  }

  public getCreatorId (): string {
    return this.creatorId
  }

  public setCreatorId (creatorId: string): void {
    this.creatorId = creatorId
  }

  public getDescription (): string {
    return this.description
  }

  public setDescription (description: string): void {
    this.description = description
  }

  public getPreparationMethod (): string {
    return this.preparationMethod
  }

  public setPreparationMethod (preparationMethod: string): void {
    this.preparationMethod = preparationMethod
  }

  public getPreparationTime (): number {
    return this.preparationTime
  }

  public setPreparationTime (preparationTime: number): void {
    this.preparationTime = preparationTime
  }

  public getServings (): number {
    return this.servings
  }

  public setServings (servings: number): void {
    this.servings = servings
  }

  public getCreatedAt (): Date {
    return this.createdAt
  }

  public setCreatedAt (createdAt: Date): void {
    this.createdAt = createdAt
  }
}
