import {InputType, Field} from "type-graphql"

@InputType()
export class CreateRecipe {
    @Field()
    name: string

    @Field()
    completionTime: number

    @Field({nullable: true})
    link?: string

    @Field(() => [String], {nullable: true, defaultValue: []})
    ingredients?: string[]

    @Field(() => [String], {nullable: true, defaultValue: []})
    steps?: string[]
}

@InputType()
export class UpdateRecipe {
    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    completionTime?:string

    @Field({nullable: true})
    link?:string

    @Field(() => [String], {nullable: true})
    ingredients?: string[]

    @Field(() => [String], {nullable: true})
    steps?: string[]
}