import { ObjectType, Field } from 'type-graphql';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class CategorySchema extends BaseEntity {
    @Column()
    @Field(() => String)
    description: string;

    @Column()
    @Field(() => String)
    name: string;

    @PrimaryGeneratedColumn()
    id: string;
}

/*
const Schema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Categories", Schema)

*/