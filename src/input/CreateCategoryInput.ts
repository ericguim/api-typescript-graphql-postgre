import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateBookInput {
    @Field()
    description: string;

    @Field()
    name: string;
}