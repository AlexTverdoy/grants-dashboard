import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity()
export class Grant {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  foundation!: string;

  @Field(() => Int)
  @Column()
  amount!: number;

  @Field()
  @Column()
  status!: string;

  @Field()
  @Column()
  deadline!: string;

  @Field()
  @Column()
  matchDate!: string;
}