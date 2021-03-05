import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import MenuTab from '../../components/MenuTab';
import Loader from '../../components/Loader';

import Home from '../../pages/Home';
import { Provider } from '../../store/Context';

const Favorite = React.lazy(()=> import('../../pages/Favorite/Favorite'));
const Setting = React.lazy(()=> import('../../pages/Setting/Setting'));

const User: React.FC = () => {

    return (
        <Suspense fallback={<Loader />}>
            <Provider>
                <Router>
                    <Header />
                    <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/setting' component={Setting} />
                            <Route path='/favorite' component={Favorite} />
                    </Switch>
                    <MenuTab />
                </Router>
            </Provider>
        </Suspense>
    )
}

export default User
