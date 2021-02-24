import React from 'react'
import searchIcon from '../assets/icons/search.svg';


const SearchWrapper: React.FC = () => {
    return (
        <div className="w-100 h-100 search-wrapper d-flex flex-column text-center py-1">
            <div className="w-100 h-100 container" style={{marginTop: '6rem'}}>
                <h2 className="text-white">What would you like today?</h2>
                <span>let's cook something</span>
                <SearchInput />
                <button className="btn btn-primary raised" style={{width: '120px'}}>Search</button>
            </div>
        </div>
    )
}

export default SearchWrapper


const SearchInput: React.FC  = () =>{

    return(
        <div className="search d-flex felx-row flex-center bg-white text-dark my-1 shadow-sm">
            <input type="text" placeholder="Find a recipe"/>
            <img src={searchIcon} alt="search icon"/>
        </div>
    )
}