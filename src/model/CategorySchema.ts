import { ObjectType, Field, Int } from 'type-graphql';
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
    @Field(() => Int)
    _id: string;
}