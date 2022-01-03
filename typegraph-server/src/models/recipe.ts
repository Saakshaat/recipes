import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, TreeRepository } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Recipe extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Number)
  @Column({name: 'completion_time'})
  completionTime: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  link?: string; // TODO: change type to URL

  @Field(() => [String], {defaultValue: []})
  @Column("text", {array: true, default: []})
  ingredients?: string[]

  @Field(() => [String], {defaultValue: []})
  @Column("text", {array: true, default: []})
  steps?: string[]
}
