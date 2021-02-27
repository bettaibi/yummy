import React from 'react'
import recipe1 from '../assets/img/recipe1.jpg';
import favorite from '../assets/icons/favorite.svg';

const Recipe: React.FC = () => {
    return (
        <div>
            <div className="card elevated recipe-card">
                <div className="recipe-cover">
                    <img src={recipe1} />
                </div>
                <div className="recipe-body bg-white">
                    <h4 className="fw-600">Recipe title</h4>
                    <p className="text-secondary">
                        {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores sunt. Esse architecto, non voluptatum odit placeat vero dolorum consectetur itaque.'.substr(0, 80) + '...'}
                    </p>
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
