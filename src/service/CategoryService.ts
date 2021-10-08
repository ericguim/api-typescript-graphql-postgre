import Category from '../graphql/category/Category';
import { CategoryInput } from '../input/CategoryInput';
import { CategorySchema } from '../model/CategorySchema';

class CategoryService {

    static async createCategory(categoryInput: CategoryInput): Promise<Category>{
        const category = await CategorySchema.create(categoryInput);
        return await CategorySchema.save(category);
    }

    static async findOne(_id: string){
        return await CategorySchema.findOne(_id);
    }

    static async find(){
        return await CategorySchema.find();
    }

}

export default CategoryService;