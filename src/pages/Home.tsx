import React from 'react'

import Header from '../components/Header';
import Tags from '../components/Tags';
import MenuTab from '../components/MenuTab';
import SearchWrapper from '../components/SearchWrapper';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="main">
                 <Tags />
                 <SearchWrapper />
            </main>
            <MenuTab />
        </React.Fragment>
    )
}

export default Home
