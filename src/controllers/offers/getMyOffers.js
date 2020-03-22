import { Offer } from '../../models/offer'

import mongoose from 'mongoose'


const getMyOffersController = async (args, req, context) => {
    if(!context.isAuth){
        throw Error("You need to be authenticated for fetching your Offers!")
    }
    
    const myOffers = await Offer.find({uid:context.userId})
    console.log(myOffers)
    return myOffers
}

export default getMyOffersController