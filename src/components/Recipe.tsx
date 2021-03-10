import React from 'react'
import recipe1 from '../assets/img/recipe1.jpg';
import favorite from '../assets/icons/favorite.svg';
import { IRecipe } from '../models/app.model';

interface RecipeProps{
    recipe: IRecipe
}

const Recipe: React.FC<RecipeProps> = ({recipe}) => {

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
                        <span className="d-flex flex-center" style={{cursor: 'pointer'}}>
                            <img src={favorite} alt="Add to favorite" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
