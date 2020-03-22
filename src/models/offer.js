import mongoose from 'mongoose'

export const Offer = mongoose.model(
    "Offer",
    {  
       uid: String,
       oid: String,
       offertype: String,
       jobtype: String,
       date: String,
       title: String,
       description: String,
       vorname: String,
       nachame: String,
       cost: Number,
       tipp: Number,
       shoppingList: String,
       long: Number,
       lat: Number,
    }
)