import { User } from '../../models/user'

import jwt from  'jsonwebtoken'
import bcrypt from 'bcryptjs'

const secret_key = "0tymjDYWji"

const loginController = async (_,{ email, password }) => {

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
}

export default loginController;