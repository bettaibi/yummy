import React, { useState, useEffect } from 'react';
import SwiperCard from './SwiperCard';
import { IRecipe } from '../../models/app.model';
import { v4 } from "uuid";
import { removeOne, getFavourites } from '../../services/UserService';
import { Snackbar, SnackbarType, useSnackbar } from '../../components/Snackbar';

const Favorite: React.FC = () => {
    const [favouriteList, setFavouriteList] = useState<IRecipe[]>([]);
    const { showMsg, snackbarRef } = useSnackbar();


    useEffect(() => {
        getFavouriteRecipies();
    }, []);

    const readMore = () =>{
        try{

        }
        catch(err){
            throw err;
        }
    }

    const removeRecipe =  async (label: string) =>{
        try{
            const removed = await removeOne(label);
            if(removed.success) {
               showMsg(removed.message)
            }
            else{
               showMsg(removed.message, SnackbarType.ERROR)
            }
        }
        catch(err){
            throw err;
        }
    }

    const getFavouriteRecipies = async () =>{
        try{
            const found = await getFavourites();
            if(found.success){
                setFavouriteList(found.data);
            }
        }
        catch(err){
            throw err;
        }
    }

    return (
        <main className="main w-100 overflow-hidden" style={{marginTop: '50px'}}>

            <SwiperCard/>
            {favouriteList.length != 0 && 
             <div className="p1">
                <h4 className="fw-600 my-1">My Favorite recipies</h4>
                {
                    favouriteList.map((item: IRecipe) => (
                        <div key={v4()} className="shadow-sm d-flex flex-row mb1 bg-white" style={{borderRadius: '8px'}}>
                            <div className="img-container">
                              <img src={item.image} alt="recipe image"/>
                            </div>
                            <div className="content d-flex flex-column" style={{padding: '0.5rem', justifyContent:'space-between'}}>
                                <div>
                                    <h4 className="fw-600 m0">{item.label}</h4>
                                    <small>calories: {item.calories.toFixed(2)}</small><br/>
                                    {item.cuisineType && <small>Cuisine Type: {item.cuisineType[0]} <br/></small>}
                                    {item.mealType && <small>Meal Type: {item.mealType[0]}</small>}
                                </div>
                                <div>
                                    <a className="link text-right" onClick={readMore}>Read More</a>
                                    <a className="link text-right ml1" onClick={() => removeRecipe(item.label)}>Delete</a>
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
             </div>}

            {favouriteList.length == 0 && <div className="w-100 h-100 d-flex flex-center p1">
                <h5>No Favourite recipies to show</h5>
             </div>}
         <Snackbar ref={snackbarRef} />
        </main>
    )
}


export default Favorite
