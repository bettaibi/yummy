import React, {useContext} from 'react'
import Recipe from './Recipe'

import { Context } from '../store/Context';
import { v4 } from 'uuid';

const Recipies: React.FC = () => {
   const { state } = useContext(Context);
   const { recipies } = state;

   if(recipies.length === 0)  return null;

    return (
        <div className="recipe-container">
           <div className="container p1">
              <h4 className="fw-600" style={{marginBottom: '1rem'}}>
                 {`${state.results} results found`}
              </h4>
              <div className="grid">
                 {
                    recipies.map((item: any) => (
                     <Recipe key={v4()} recipe = {item.recipe} />
                    ))
                 }
              </div>
           </div>
        </div>
    )
}

export default Recipies
