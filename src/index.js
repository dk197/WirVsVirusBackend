import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'

import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'

import context from './middleware/context'

const Server = async () =>{
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context,

    });
    
    server.applyMiddleware({ app });
    
    await mongoose.connect('mongodb://localhost/app-db', {useNewUrlParser: true});

    app.listen({ port: 4000 }, () =>
        console.log(`Server ready at 95.217.162.151:4000${server.graphqlPath}`)
    );
}


Server()