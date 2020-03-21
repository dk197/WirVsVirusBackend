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

    type Profiles{
        uid: String!
        pid: String!
        vorname: String!
        nachname: String!
        strasse: String!
        hausnummer: String!
        adresszusatz: String!
        stadt: String!
        plz: String!
        land: String!
        long: Float!
        lat: Float!
    }
    
    type Query{
        login(email: String!, password: String!):LoginResponse!
        getMyProfiles:[Profiles!]!  
    }

    type Mutation{
        register(vorname: String!, nachname:String!, email: String! password: String!):LoginResponse!
        createProfile(vorname: String!, nachname: String!, strasse: String!, hausnummer: String!, adresszusatz: String!, stadt: String!, plz: String!, land: String!, long: Float!, lat: Float!):Profiles!
        deleteProfile(pid:String!):Boolean!
    }
`