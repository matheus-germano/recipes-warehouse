import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  private id: string

  @Column('varchar', { unique: false })
  private name: string

  @Column('varchar', { unique: true })
  private email: string

  @Column('varchar')
  private password: string

  @Column('varchar', { nullable: true })
  private phoneNumber: string

  @Column('text', { nullable: true })
  private profileAvatar: string

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

  public getEmail (): string {
    return this.email
  }

  public setEmail (email: string): void {
    this.email = email
  }

  public getPassword (): string {
    return this.password
  }

  public setPassword (password: string): void {
    this.password = password
  }

  public getPhoneNumber (): string {
    return this.phoneNumber
  }

  public setPhoneNumber (phoneNumber: string): void {
    this.phoneNumber = phoneNumber
  }

  public getProfileAvatar (): string {
    return this.profileAvatar
  }

  public setProfileAvatar (profileAvatar: string): void {
    this.profileAvatar = profileAvatar
  }
}
