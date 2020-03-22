import { Profiles } from '../../models/profiles'

const deleteProfileController = async(args, req, context) => {
    if(!context.isAuth){
        throw Error("Please authenticate to remove a profile!")
    }
try{
    await Profiles.deleteOne({uid:context.userId, pid: req.pid})
}catch(err){
    throw err
}
return true
}
export default deleteProfileController