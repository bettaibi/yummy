import React from 'react'

import SearchWrapper from '../components/SearchWrapper';
import Recipies from '../components/Recipies';

const Home: React.FC = () => {

    return (
        <main className="main w-100" style={{marginTop: '50px'}}>
            <SearchWrapper />
            <Recipies />
        </main>
    )
}

export default Home
