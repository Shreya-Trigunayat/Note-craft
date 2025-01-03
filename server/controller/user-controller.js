import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../model/user.js';
import Token from '../model/token.js';

dotenv.config();

export const signupUser=async (request, response)=>{
    const { name, username, password } = request.body;

    if (!name || !username || !password) {
        return response.status(400).json({ msg: 'All fields are required' });
    }
    try{
        //const salt= await bcrypt.genSalt();
        const hashedPassword= await bcrypt.hash(password, 10);


        const user= { username, name, password: hashedPassword };

        const newUser=  new User(user);
        await newUser.save();

        return response.status(200).json({msg: 'signup successfull'})

    }catch(error){
        if (error.code === 11000) {
            return response.status(400).json({ msg: 'Username already exists' });
        }
        return response.status(500).json({ msg: 'Error while signing up the user' });
    }
}
export const loginUser=async (request, response)=>{
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({ msg: 'Username and password are required' });
    }
    const user= await User.findOne({username});
    if(!user){
        return response.status(400).json({msg: 'Username does not match'});
    }
    try{
        let match= await bcrypt.compare(password, user.password);
        if(match){
            const accessToken= jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
            const refreshToken= jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken= new Token({token: refreshToken});
            await newToken.save();

            return response.status(200).json({accessToken, refreshToken, name: user.name, username: user.username});
        }else{
            return response.status(400).json({msg: 'Password does not match'});
        }
    }catch(error){
        return response.status(500).json({msg: 'Error while login in user'})
    }
}