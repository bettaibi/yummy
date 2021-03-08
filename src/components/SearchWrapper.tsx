import React, { useContext, useState } from 'react';
import searchIcon from '../assets/icons/search.svg';
import arrowDown from '../assets/icons/arrow_down.svg';
import { Context } from '../store/Context';

const SearchWrapper: React.FC = () => {
    const { setQuery } = useContext(Context);

    const searchForNewRecipe = (val: string) =>{
        try{ 
            if(val)
            setQuery(val);
        }
        catch(err){
            throw err;
        }
    };

    return (
        <div className="w-100 search-wrapper d-flex flex-column text-center py-1">
            <div className="w-100 container d-flex flex-column px-1" style={{alignItems: 'center', marginTop: '3rem'}}>
                <h2 className="text-white">What would you like today?</h2>
                <span>let's cook something</span>
                <SearchInput onSearch={(val) => searchForNewRecipe(val)} />
            </div>

            <div className="container px-1" style={{marginTop:'2rem'}}>
                <h4 className="text-white">Today's recipe</h4>
                <img src={arrowDown} alt="scroll down" height="40" style={{filter: 'invert(1)'}} className="moveDown" />
            </div>
        </div>
    )
}

interface SearchInputProps{
    onSearch: (val: string) => void;
}

const SearchInput: React.FC<SearchInputProps>  = ({onSearch}) =>{
    const [ value, setValue ] = useState<string>('');

    return(
        <div className="search d-flex felx-row flex-center bg-white text-dark my-1 shadow-sm">
            <input type="text" placeholder="Find a recipe" autoComplete="off" onChange={(e)=> setValue(e.target.value)}/>
            <button className="btn mini-fab btn-primary" onClick = {(e)=> {e.stopPropagation(); onSearch(value)}}>
                <img src={searchIcon} alt="search icon"/>
            </button>
        </div>
    )
}

export default SearchWrapper