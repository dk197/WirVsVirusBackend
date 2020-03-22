import { User } from '../../models/user'

import jwt from  'jsonwebtoken'
import bcrypt from 'bcryptjs'


const registerController =  async (_,{vorname,nachname,email,password}) =>{

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
        credit: 0
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
}

export default registerController