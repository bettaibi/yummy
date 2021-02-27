import React from 'react';
import searchIcon from '../assets/icons/search.svg';
import arrowDown from '../assets/icons/arrow_down.svg';

const SearchWrapper: React.FC = () => {
    return (
        <div className="w-100 search-wrapper d-flex flex-column text-center py-1">
            <div className="w-100 container d-flex flex-column px-1" style={{alignItems: 'center', marginTop: '3rem'}}>
                <h2 className="text-white">What would you like today?</h2>
                <span>let's cook something</span>
                <SearchInput />
            </div>

            <div className="container px-1" style={{marginTop:'2rem'}}>
                <h4 className="text-white">Today's recipe</h4>
                <img src={arrowDown} alt="scroll down" height="40" style={{filter: 'invert(1)'}} className="moveDown" />
            </div>
        </div>
    )
}

const SearchInput: React.FC  = () =>{

    return(
        <div className="search d-flex felx-row flex-center bg-white text-dark my-1 shadow-sm">
            <input type="text" placeholder="Find a recipe" autoComplete="off"/>
            <button className="btn mini-fab btn-primary">
                <img src={searchIcon} alt="search icon"/>
            </button>
        </div>
    )
}

export default SearchWrapper