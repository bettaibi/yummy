import React from 'react'

const Tags: React.FC = () => {
    return (
        <div className="shadow-sm tags" style={{height: '50px'}}>
            <div className="container d-flex flex-row h-100" style={{alignItems:'center', justifyContent:'flex-start'}}>
                <span className="tag">
                    Recently searched
                </span>
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
                <span className="tag">
                    Cake
                </span>
                <span className="tag">
                    Cake
                </span>
                <span className="tag">
                    Cake
                </span>
            </div>
        </div>
    )
}

export default Tags
