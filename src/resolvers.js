import { User } from './models/user'
import { Profiles } from './models/profiles'
import jwt from  'jsonwebtoken'
import bcrypt from 'bcryptjs'
import uid from 'uid'

import context from './middleware/context'

const secret_key = "0tymjDYWji"

export const resolvers = {
    Query: {
        login: async (_,{ email, password }) => {

            const user = await User.findOne({ email: email })
            if (!user) {
              throw new Error('User with email does not exist!')
            } 
            const isEqual = await bcrypt.compare(password, user.password)
            if (!isEqual) {
              throw new Error('Password is incorrect!')
            }
            const token = jwt.sign(
              { userId: user.id, email: user.email },
              secret_key,
              {
                expiresIn: '1h'
              }
            );
            return { userId: user.id, token: token, tokenExpiration: 1 }
          },
        getMyProfiles: async (args, req, context) => {
            if(!context.isAuth){
                throw Error("You need to be authenticated to get your profiles")
            }
            const profilelist = Profiles.find({uid:context.userId})
            
            return profilelist
           
        }
    },
    Mutation:{
        register: async (_,{vorname,nachname,email,password}) =>{

            const existingUser = await User.findOne({email:email})
            if (existingUser){
                throw new Error('User with your email does allready exist')
            }

            const hasedPassword = await bcrypt.hash(password, 12) 
            const user = new User({
                vorname,
                nachname,
                email,
                password: hasedPassword,
            })

            const saveduser = await user.save()
            const registereduser = await User.findOne({ email: email })

            const token = jwt.sign(
                { userId: registereduser.id, email: registereduser.email },
                secret_key,
                {
                  expiresIn: '1h'
                }
              );
              return { userId: registereduser.id, token: token, tokenExpiration: 1 }
        },
        createProfile: async (args, req, context,{vorname,nachname,strasse,hausnummer,adresszusatz,stadt,plz,land,long,lat}) => {

            if(!context.isAuth){
                throw Error("Please authenticate to add a profile!")
            }

            const puid = uid(16)

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
                long:req.long,
                lat:req.lat,
            })

            const saveprofile = await profile.save()
            return saveprofile
        },
        deleteProfile:async(args, req, context) => {
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
    }
}   