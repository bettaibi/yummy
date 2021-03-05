import React, { Suspense } from 'react';
import {Switch, Route } from 'react-router-dom';

import Loader from '../../components/Loader';

const ResetPassword = React.lazy(()=> import('../../pages/Auth/ResetPassword'));
const Register = React.lazy(()=> import('../../pages/Auth/Register'));
const Login = React.lazy(() => import('../../pages/Auth/Login'));

const Auth: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className="h-100 w-100">
                <Switch>
                    <Route path="/auth/register" component = {Register}/>
                    <Route path="/auth/login" component = {Login}/>
                    <Route path="/auth/rest-password" component = {ResetPassword}/>
                </Switch>
            </div>
        </Suspense>
    )
}

export default Auth
