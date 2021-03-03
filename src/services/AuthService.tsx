import db from './db';
import { Ilogin, IUser } from '../models/app.model';

import { v4 as uuidv4 } from 'uuid';

console.log('Auth service loaded');

const login = async (obj: Ilogin)=>{
    const found = await findByEmail(obj.email);

    if(found){

    }
    else{
        console.info('No such Account');
    }
}

const register = async (user: IUser): Promise<any> =>{
    try{
        const found = await findByEmail(user.email);
        if(!found){
            const uid = uuidv4();
            const newUser: IUser = {
                ...user,
                id: uid
            };
            const saved = await db.collection('users').add(newUser, uid);
            if (saved) return newUser;
            else return false;
        }
        else{
            console.log("User already has an account")
        }

    }
    catch(err){
        throw err;
    }
}

const facebookLogin = ()=>{

}

const googlelogin = async ()=>{

}

const resetPassword = ()=>{

}

const findByEmail = async (email: string) =>{
   try{
        const found = await db.collection('users').doc({email}).get();
        console.log(found);
        return found ? true : false;
   }
   catch(err){
       console.error(err.message)
   }
}

export { login, register, facebookLogin, googlelogin, resetPassword };