import React from 'react'

const Tags: React.FC = () => {
    return (
        <div className="d-flex flex-row flex-center shadow-sm bg-white tags" style={{height: '50px'}}>
            <span className="tag">
                Pizza
            </span>
            <span className="tag">
                Spaghetti
            </span>
            <span className="tag">
                Chicken
            </span>
            <span className="tag">
                Cake
            </span>
        </div>
    )
}

export default Tags
