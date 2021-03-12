import React, { useContext, useState } from 'react';
import searchIcon from '../assets/icons/search.svg';
import arrowDown from '../assets/icons/arrow_down.svg';
import { Context } from '../store/Context';
import i18next from "i18next";

const SearchWrapper: React.FC = () => {
    const { setQuery, state } = useContext(Context);
    const { results, query } = state;

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
        <div className="w-100 h-100 search-wrapper d-flex flex-column text-center py-1" style={{alignItems: 'center', justifyContent:'center'}}>
            <div className="w-100 container d-flex flex-column px-1" style={{alignItems: 'center', justifyContent:'center'}}>
                <h2 className="text-white">{i18next.t('What would you like today?')}</h2>
                <span>let's cook something</span>
                <SearchInput onSearch={(val) => searchForNewRecipe(val)} initialValue={query} />
            </div>

           {results > 0 && <div className="container px-1" style={{marginTop:'1rem'}}>
                <h4 className="text-white">
                   {`We have found some results related to your search "${query}", scroll down to check them out.`}
                </h4>
                <img src={arrowDown} alt="scroll down" height="40" style={{filter: 'invert(1)'}} className="moveDown" />
            </div>}
        </div>
    )
}

interface SearchInputProps{
    onSearch: (val: string) => void;
    initialValue: string;
}

const SearchInput: React.FC<SearchInputProps>  = ({onSearch, initialValue}) =>{
    const [ value, setValue ] = useState<string>(initialValue);

    return(
        <div className="search d-flex felx-row flex-center bg-white text-dark my-1 shadow-sm">
            <input type="text" placeholder="Find a recipe" value={value}
            autoComplete="off" onChange={(e)=> setValue(e.target.value)}/>
            <button className="btn mini-fab btn-primary" onClick = {(e)=> {e.stopPropagation(); onSearch(value)}}>
                <img src={searchIcon} alt="search icon"/>
            </button>
        </div>
    )
}

export default SearchWrapper