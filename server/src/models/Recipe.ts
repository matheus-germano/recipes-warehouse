import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
	@PrimaryGeneratedColumn('uuid')
	recipeId: string;

	@Column('uuid')
	creatorId: string;

	@Column('varchar')
	name: string;

	@Column('varchar')
	description: string;

	@Column('text')
	preparationMethod: string;

	@Column('datetime')
	preparationTime: number;

	@Column('double')
	servings: number;

	@Column('date')
	createdAt: Date;
}
