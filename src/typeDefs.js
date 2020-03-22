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
        credit: Float
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
        long: Float
        lat: Float
    }

    type Offer{
        uid: String!
        oid: String!
        offertype: String!
        jobtype: String!
        date: String!
        title: String
        description: String!
        vorname: String!,
        nachname: String!,
        cost: Float!
        tipp: Float!
        shoppingList: String
        long: Float!
        lat: Float!
    }

    
    type Query{
        login(email: String!, password: String!):LoginResponse!
        getMyProfiles:[Profiles!]!
        getMyUserProfile:User!
        getMyOffers:[Offer!]!  
        getOffers(type: String!, fetchtype: String! lat: Float, long: Float, radius: Int, stadt: String, land: String):[Offer!]!
    }

    type Mutation{
        register(vorname: String!, nachname:String!, email: String! password: String! credit: Float):LoginResponse!
        createProfile(vorname: String!, nachname: String!, strasse: String!, hausnummer: String!, adresszusatz: String!, stadt: String!, plz: String!, land: String!, long: Float, lat: Float):Profiles!
        editProfile(pid:String!, vorname: String!, nachname: String!, strasse: String!, hausnummer: String!, adresszusatz: String!, stadt: String!, plz: String!, land: String!, long: Float, lat: Float):Profiles!
        deleteProfile(pid:String!):Boolean!
        createOffer(uid:String!, oid:String!, offertype:String!, jobtype:String!, date:String!, title:String!, description:String!, vorname:String!, nachname:String! cost:Float!, tipp:Float!, shoppingList:String, long:String!, lat:String!):Offer!
        
    }
`