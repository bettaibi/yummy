import db from './db';
import { Ilogin, IUser, JSONResponse } from '../models/app.model';
import { toJsonResponse } from '../shared/util';

console.log('Auth service loaded');



const login = async (obj: Ilogin): Promise<JSONResponse> =>{
 try{
    const found: IUser = await findByEmail(obj.email);
    if(found?.password){
        if(obj.password === found.password){
            return toJsonResponse(true, 'Welcome again');
        }
        else{
            return toJsonResponse(false, "Wrong password");
        }
    }
    else{
        return toJsonResponse(false, 'No such Account');
    }
 }
 catch(err){
     throw err;
 }
}

const register = async (user: IUser): Promise<JSONResponse> =>{
    try{
        const saved = await db.collection('users').add(user, user.id);
        if (saved) return toJsonResponse(true, 'A new User has been registred');
        else return toJsonResponse(false, 'Something Wrong!');
    }
    catch(err){
        throw err;
    }
}


const resetPassword = ()=>{

}

const findByEmail = async (email: string): Promise<any> => {
   try{
        return await db.collection('users').doc({email}).get();
   }
   catch(err){
       console.error(err.message)
   }
}



export { login, register, resetPassword, findByEmail };