import React from 'react'
import Header from '../../components/Header';
import MenuTab from '../../components/MenuTab';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Favorite from '../../pages/Favorite/Favorite';
import Home from '../../pages/Home';
import Setting from '../../pages/Setting/Setting';

const User: React.FC = () => {
    return (
        <Router>
            <Header />
               <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/setting' component={Setting} />
                    <Route path='/favorite' component={Favorite} />
               </Switch>
            <MenuTab />
        </Router>
    )
}

export default User
