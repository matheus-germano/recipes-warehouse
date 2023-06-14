import { Column, PrimaryGeneratedColumn } from 'typeorm'

export abstract class Base {
  @PrimaryGeneratedColumn('uuid')
  private id: string

  @Column('varchar', { unique: true })
  private name: string

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
}
