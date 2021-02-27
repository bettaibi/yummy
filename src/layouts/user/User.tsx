import React from 'react'
import Header from '../../components/Header';
import MenuTab from '../../components/MenuTab';
import Favorite from '../../pages/Favorite/Favorite';

import Home from '../../pages/Home';

const User: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
              {/* <Home /> */}
              <Favorite />
            <MenuTab />
        </React.Fragment>
    )
}

export default User
