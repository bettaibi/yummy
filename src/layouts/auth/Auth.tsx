import React from 'react'
import Login from '../../pages/Auth/Login';
import Register from '../../pages/Auth/Register';
import ResetPassword from '../../pages/Auth/ResetPassword';

const Auth: React.FC = () => {
    return (
        <div className="h-100 w-100">
            <Register />
        </div>
    )
}

export default Auth
