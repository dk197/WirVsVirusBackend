import { Profiles } from '../../models/profiles'
import { User } from '../../models/user'

import mongoose from 'mongoose'

const getMyUserProfileController = async (args, req, context) => {
    if(!context.isAuth){
        throw Error("You need to be authenticated for fetching your Offers!")
    }
    
    const myUserProfile = await User.find({_id:mongoose.Types.ObjectId(context.userId)})
    myUserProfile[0]['password'] = "hidden"

    return myUserProfile

}

export default getMyUserProfileController