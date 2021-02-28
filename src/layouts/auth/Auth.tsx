import React from 'react'
import Login from '../../pages/Auth/Login';
import Register from '../../pages/Auth/Register';
import ResetPassword from '../../pages/Auth/ResetPassword';

import RecipeDetails from '../../components/RecipeDetails';

const Auth: React.FC = () => {
    return (
        <div className="h-100 w-100">
            <ResetPassword />
        </div>
    )
}

export default Auth
