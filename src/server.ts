import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server';
import CategoryResolver from './graphql/category/CategoryResolver';
import { createConnection } from 'typeorm';
import { CategorySchema } from './model/CategorySchema';

async function boostrap() {

    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [CategorySchema],
        synchronize: true
    });

    const schema = await buildSchema({
        resolvers: [CategoryResolver]
    });

    const server = new ApolloServer({ schema });

    server.listen({port: 3001}, () => console.log('Server is running'))
}

boostrap()