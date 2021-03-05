import db from './db';

const updatefavorite = () =>{

};

const getCurrentUser = async(id: string) =>{
    try{
        const found = await db.collection('users').doc({id}).get();
        if(!found){
            return {success: false, message: 'No such user' ,data: {}};
        }
        return {success: true, message: 'The Current conncted user' , data: found};
    }
    catch(err){
        throw err;
    }
};

export { getCurrentUser, updatefavorite }