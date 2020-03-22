import { Offer } from '../../models/offer'
import { getDistanceFromLatLonInKm } from '../../lib/calcDistance'
import axios from 'axios'
import mongoose from 'mongoose'

function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI * 1.609344;
    return dist;
}

const getOffersController = async (args, req, context) =>{
    /*if(!context.isAuth){
        throw Error("You need to be authenticated for fetching Offers!")
    }*/
    if(req.type ==="search"){
        
        if(req.fetchtype ==="bycity"){
            const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=1b4a07e030a410&city=${req.stadt}&country=${req.land}&format=json`)
            const latApi = response.data[0].lat 
            const longApi = response.data[0].lon
            console.log(getDistanceFromLatLonInKm(req.lat, req.long, latApi, longApi, "km"))
        }
        if(req.fetchtype ==="bycoordinates"){}
    }

}
export default getOffersController