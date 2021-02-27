import React from 'react'

import Tags from '../components/Tags';
import SearchWrapper from '../components/SearchWrapper';
import Recipies from '../components/Recipies';

const Home: React.FC = () => {
    return (
        <main className="main w-100" style={{marginTop: '100px'}}>
            <Tags />
            <SearchWrapper />
            <Recipies />
        </main>
    )
}

export default Home
