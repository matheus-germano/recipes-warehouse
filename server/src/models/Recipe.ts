import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  creator_id: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @Column('text')
  preparation_method: string;

  @Column('int')
  preparation_time: number;

  @Column('decimal')
  servings: number;

  @Column('date')
  created_at: Date;
}
