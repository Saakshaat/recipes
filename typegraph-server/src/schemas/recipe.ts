import {InputType, Field} from "type-graphql"

@InputType()
export class CreateRecipe {
    @Field()
    name: string

    @Field()
    completionTime: number

    @Field({nullable: true})
    link?: string
}

@InputType()
export class UpdateRecipe {
    @Field({nullable: true})
    name?: string;

    @Field({nullable: true})
    completionTime?:string

    @Field({nullable: true})
    link?:string
}