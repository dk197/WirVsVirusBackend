import { Profiles } from '../../models/profiles'

import axios from 'axios'
import uid from 'uid'

const createProfileController = async (args, req, context) => {

    if(!context.isAuth){
        throw Error("Please authenticate to add a profile!")
    }

    const puid = uid(16)


    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=1b4a07e030a410&street=${req.strasse+" "+req.hausnummer}&city=${req.stadt}&country=${req.land}&postalcode=${req.plz}&format=json`)
    const latApi = response.data[0].lat
    const longApi = response.data[0].lon

       
    const profile = new Profiles({
        uid: context.userId ,
        pid: puid,
        vorname:req.vorname,
        nachname:req.nachname,
        strasse:req.strasse,
        hausnummer:req.hausnummer,
        adresszusatz:req.adresszusatz,
        stadt:req.stadt,
        plz:req.plz,
        land:req.land,
        long:longApi,
        lat:latApi,
    })

    const saveprofile = await profile.save()
    return saveprofile
}
export default createProfileController