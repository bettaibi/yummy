import React from 'react'
import Login from '../../pages/Auth/Login';
import Register from '../../pages/Auth/Register';
import ResetPassword from '../../pages/Auth/ResetPassword';

import {Switch, Route } from 'react-router-dom';

const Auth: React.FC = () => {
    return (
        <React.Fragment>
            <div className="h-100 w-100">
                <Switch>
                    <Route path="/auth/register" component = {Register}/>
                    <Route path="/auth/login" component = {Login}/>
                    <Route path="/auth/rest-password" component = {ResetPassword}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default Auth
