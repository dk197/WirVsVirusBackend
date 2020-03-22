import { Profiles } from '../../models/profiles'

const getMyProfilesController = async (args, req, context) => {
    if(!context.isAuth){
        throw Error("You need to be authenticated to get your profiles")
    }
    const profilelist = await Profiles.find({uid:context.userId})
    return profilelist
}


export default getMyProfilesController;