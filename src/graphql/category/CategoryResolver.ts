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

    @Query(() => Category)
    async category(@Arg("_id") _id: string){
        return await CategorySchema.findOne(_id);
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        const category = await CategorySchema.create(categoryInput);
        return await CategorySchema.save(category);
    }
}

export default CategoryResolver;