import { User } from './models/user'
import jwt from  'jsonwebtoken'
import bcrypt from 'bcryptjs'
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
        hello: (args, req, context) => {
            if(!context.isAuth){
                throw Error("unauth")
            }
            return "hello"
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
    }
}   