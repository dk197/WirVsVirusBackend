import mongoose from 'mongoose'

export const Offer = mongoose.model(
    "Offer",
    {  
       offertype: String,
       jobtype: String,
       date: Date,
       title: String,
       description: String,
       cost: Number,
       tipp: Number,
       shoppingList: Array,
       long: String,
       lat: String,
    }
)