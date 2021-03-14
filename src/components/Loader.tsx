import React from 'react';
import loading from '../assets/icons/pink_loader.svg';

const Loader: React.FC = () => {
    return (
        <div className="d-flex flex-column flex-center w-100 vh-100">
            <img src={loading} alt="Loading the page" />
        </div>
    )
}

export default Loader
