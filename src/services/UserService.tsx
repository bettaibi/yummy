import { IRecipe, JSONResponse } from '../models/app.model';
import { toJsonResponse } from '../shared/util';

import db from './db';

const addToFavourite = async (item: IRecipe): Promise<JSONResponse> =>{
    try{
        const created = await db.collection('favourites').add(item);
        if(created){
            return toJsonResponse(true, `${item.label} has added to your favourite list`);
        }
        return toJsonResponse(false, "Oops, Failed to Add this dish to your favourite list");
    }
    catch(err){
        throw err;
    }
};

const findOne = async (label: string) : Promise<any> =>{
    try{
        return await db.collection('favourites').doc({label}).get();
    }
    catch(err){
        throw err;
    }
}

const removeOne = async (label: string) : Promise<JSONResponse> =>{
    try{
        const removed = await db.collection('favourites').doc({label}).delete();
        if(removed){
            return toJsonResponse(true, `${label} has been removed from your favourite list`);
        }
        return toJsonResponse(false, `Failed to remove ${label} from your favourite list`);
    }
    catch(err){
        throw err;
    }
}

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



export { getCurrentUser, addToFavourite, findOne, removeOne }