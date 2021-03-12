import React from 'react'
import favorite from '../assets/icons/favorite.svg';
import { IRecipe } from '../models/app.model';

import { addToFavourite, removeOne, findOne } from '../services/UserService';
import { Snackbar, useSnackbar, SnackbarType} from './Snackbar';

interface RecipeProps{
    recipe: IRecipe
}

const Recipe: React.FC<RecipeProps> = ({recipe}) => {
    const { showMsg, snackbarRef } = useSnackbar();
    const key = localStorage.getItem('token') || '';

    const saveToFavourite = async () =>{
      try{
         const found = await findOne(recipe.label);
         if(found){
             // remove it from favourite list
             const removed = await removeOne(recipe.label);
             if(removed.success) {
                showMsg(removed.message)
             }
             else{
                showMsg(removed.message, SnackbarType.ERROR)
             }
         }
         else{
             // Add it to your favourite list
             const saved = await addToFavourite({...recipe, userId: key});
             if(saved.success){
                 showMsg(saved.message)
             }
             else{
                showMsg(saved.message, SnackbarType.ERROR)
             }
         }
         
      }
      catch(err){
          console.error(err.message)
      }
    };

    return (
        <div>
            <div className="recipe-card">
                <div className="recipe-cover shadow-sm">
                    <img src={recipe.image} />
                </div>
                <div className="recipe-body bg-white">
                    <h4 className="fw-600">{recipe.label}</h4>
                   {recipe. cuisineType && <div className="text-muted">Cuisine Type: {recipe.cuisineType[0]}</div>}
                   {recipe.mealType && <div className="text-muted" style={{margin :' 0.4rem 0'}}>Meal Type: {recipe.mealType[0]}</div>}
                   {recipe.calories && <h5 className="text-secondary fw-600">Calories: {recipe.calories.toFixed(2)} </h5>}
                    <div className="d-flex flex-row flex-space-between w-100">
                        <a href="#" className="link">More details</a>
                        <span className="d-flex flex-center" style={{cursor: 'pointer'}} onClick={saveToFavourite}>
                            <img src={favorite} alt="Add to favorite" />
                        </span>
                    </div>
                </div>
            </div>
            <Snackbar ref= {snackbarRef} />
        </div>
    )
}

export default Recipe
