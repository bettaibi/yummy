import React from 'react'
import searchIcon from '../assets/icons/search.svg';


const SearchWrapper: React.FC = () => {
    return (
        <div className="w-100 search-wrapper d-flex flex-column text-center py-1">
            <div className="w-100 container d-flex flex-column" style={{alignItems: 'center', marginTop: '3rem'}}>
                <h2 className="text-white">What would you like today?</h2>
                <span>let's cook something</span>
                <SearchInput />
            </div>
        </div>
    )
}

const SearchInput: React.FC  = () =>{

    return(
        <div className="search d-flex felx-row flex-center bg-white text-dark my-1 shadow-sm">
            <input type="text" placeholder="Find a recipe"/>
            <button className="btn mini-fab btn-primary">
                <img src={searchIcon} alt="search icon"/>
            </button>
        </div>
    )
}

export default SearchWrapper