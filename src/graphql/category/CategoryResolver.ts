import { Resolver, Query, Mutation, InputType, Arg, Field, } from 'type-graphql'
import { CategorySchema } from '../../model/CategorySchema';
import Category from './Category';

@InputType()
class CategoryInput {
   @Field() 
    name: string

   @Field()
    description: string
}
 

@Resolver(Category)
class CategoryResolver {
    
    @Query(() => [Category])
    async categories() {
        return await CategorySchema.find()
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        return  await CategorySchema.create(categoryInput)
    }
}

export default CategoryResolver;