import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
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
  link: string; // TODO: change type to URL

  // TODO: add [String] field for ingredients
  // TODO: add [String] field for Steps
}
