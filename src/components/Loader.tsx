import React from 'react';

import loading from '../assets/img/loading.gif';

const Loader = () => {
    return (
        <div className="d-flex flex-column flex-center w-100 vh-100">
            <img src={loading} alt="Loading the page" />
        </div>
    )
}

export default Loader
