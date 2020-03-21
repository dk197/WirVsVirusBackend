import { gql } from 'apollo-server-express'

export const typeDefs = gql` 
    type User{
        id: ID!
        vorname: String!
        nachname: String!
        email: String!
        password: String!
        picurl: String
        chargeid: String
    }

    type LoginResponse{
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type Query{
        hello:String!
        login(email: String!, password: String!):LoginResponse!    
    }

    type Mutation{
        register(vorname: String!, nachname:String!, email: String! password: String!):LoginResponse!
    }
`