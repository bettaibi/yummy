import React from 'react'
import Recipe from './Recipe'

const Recipies: React.FC = () => {
    return (
        <div className="recipe-container">
           <div className="container p1">
              <h4 className="fw-600" style={{marginBottom: '1rem'}}>Most popular</h4>
              <div className="grid">
                 <Recipe />
                 <Recipe />
                 <Recipe />
                 <Recipe />
                 <Recipe />
                 <Recipe />
              </div>
           </div>
        </div>
    )
}

export default Recipies
