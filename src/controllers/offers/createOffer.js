import { Offer } from '../../models/offer'

import uid from 'uid'

const createOfferController = async(args, req, context) =>{
    if(!context.isAuth){
        throw Error("Please authenticate in order to create an offfer")
    }
    const offerid = uid(16)
    chargeMoney = User.findOneAndUpdate({})
    const offer = new Offer({
        uid: context.userId,
        oid: offerid,
        offertype: req.offertype,
        jobtype: req.jobtype,
        date: req.date,
        title: req.title,
        description: req.description,
        vorname: req.vorname,
        nachname: req.nachname,
        cost: req.cost,
        tipp: req.tipp,
        shoppingList: req.shoppingList,
        long: req.long,
        lat: req.lat,
    })

    const saveoffer = await offer.save()
    return saveoffer
}        

export default createOfferController