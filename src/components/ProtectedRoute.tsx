import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Authentification from '../Authentification';

interface Props{
    component: React.FC<any>,
    path: string
}

const ProtectedRoute: React.FC<Props> = ({component: Component, path: path, ...rest}) => {


    return (
        <Route path= {path} {...rest} render= {(props)=>{
                return Authentification.isAuthentificated() ? <Component {...props}/> : <Redirect to={{
                    pathname: '/auth/login',
                    state: props.location
                }} />
          }  
        }>
            
        </Route>
    )
}

export default ProtectedRoute;
