import React from 'react'
import recipe1 from '../assets/img/recipe1.jpg';

const Recipe = () => {
    return (
        <div className="card elevated recipe-card">
            <div className="recipe-cover">
                 <img src={recipe1} />
            </div>
            
        </div>
    )
}

export default Recipe
