import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar')
	name: string;

	@Column('varchar', { unique: true })
	email: string;

	@Column('varchar')
	password: string;

	@Column('varchar')
	phone_number: string;

	@Column('text')
	profile_avatar: string;
}
