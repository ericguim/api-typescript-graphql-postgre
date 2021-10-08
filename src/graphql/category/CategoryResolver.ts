import { Resolver, Query, Mutation, InputType, Arg, Field, } from 'type-graphql';
import CategoryService from '../../service/CategoryService';
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
        return await CategoryService.find();
    }

    @Query(() => Category)
    async category(@Arg("_id") _id: string){
        return await CategoryService.findOne(_id);
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        
        return CategoryService.createCategory(categoryInput);
    }
}

export default CategoryResolver;