//AUTH CONTROLLERS
import loginController from './controllers/auth/login'
import registerController from './controllers/auth/register'

//PROFILE CONTROLLERS
import getMyProfilesController from './controllers/profiles/getMyProfiles'
import getMyUserProfileController from './controllers/profiles/getMyUserProfile'
import createProfileController from './controllers/profiles/createProfile'
import editProfileController from './controllers/profiles/editProfile'
import deleteProfileController from './controllers/profiles/delteProfile'

//OFFER CONTROLLERS
import getMyOffersController from './controllers/offers/getMyOffers'
import getOffersController from './controllers/offers/getOffers'
import createOfferController from './controllers/offers/createOffer'
 


export const resolvers = {
    Query: {
        login: loginController,
        getMyProfiles: getMyProfilesController,
        getMyUserProfile: getMyUserProfileController,
        getMyOffers: getMyOffersController,
        getOffers: getOffersController,
    },
    Mutation:{
        register: registerController,
        createProfile: createProfileController,
        editProfile: editProfileController,
        deleteProfile:deleteProfileController, 
        createOffer:createOfferController      
    }
}   