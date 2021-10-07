import { InputType, Field } from 'type-graphql';

@InputType()
export class CategoryInput {
    @Field()
    description: string;

    @Field()
    name: string;
}