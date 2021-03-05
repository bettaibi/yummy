import db from './db';
import { Ilogin, IUser } from '../models/app.model';

console.log('Auth service loaded');

const login = async (obj: Ilogin)=>{
 try{
    const found: IUser = await findByEmail(obj.email);
    if(found?.password){
        if(obj.password === found.password){
            return {success: true, message: 'Welcome again'};
        }
        else{
            return {success: false, message: 'Wrong password'};
        }
    }
    else{
        return {success: false, message: 'No such Account'};
    }
 }
 catch(err){
     throw err;
 }
}

const register = async (user: IUser): Promise<any> =>{
    try{
        const saved = await db.collection('users').add(user, user.id);
        if (saved) return user;
        else return false;
    }
    catch(err){
        throw err;
    }
}


const resetPassword = ()=>{

}

const findByEmail = async (email: string) =>{
   try{
        const found = await db.collection('users').doc({email}).get();
        console.log(found);
        return found;
   }
   catch(err){
       console.error(err.message)
   }
}


export { login, register, resetPassword, findByEmail };