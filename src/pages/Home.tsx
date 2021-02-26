import React from 'react'

import Header from '../components/Header';
import Tags from '../components/Tags';
import MenuTab from '../components/MenuTab';
import SearchWrapper from '../components/SearchWrapper';
import Recipies from '../components/Recipies';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="main w-100">
                 <Tags />
                 <SearchWrapper />
                 <Recipies />
            </main>
            <MenuTab />
        </React.Fragment>
    )
}

export default Home
