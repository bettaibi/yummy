import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Snackbar, useSnackbar, SnackbarType } from './Snackbar';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLogoutButton: React.FC = () => {
    const { showMsg, snackbarRef } = useSnackbar();
    
    const logout = () => {
        try{
            showMsg('User Logged out');
            localStorage.clear();
            window.location.reload();
        }
        catch(err){
            throw err;
        }
    };

    const failure = () =>{
        try{
            showMsg('Oops, something wrong!', SnackbarType.ERROR);
        }
        catch(err){
            throw err;
        }
    };

    return (
        <React.Fragment>
            <GoogleLogout
            clientId={googleClientId || ''}
            buttonText="Logout"
            onLogoutSuccess={logout}
            onFailure= {failure}
            render={renderProps => (
                <button onClick={renderProps.onClick}  className="btn btn-secondary raised">Logout</button>
            )}
            >
            </GoogleLogout>
            <Snackbar ref={snackbarRef} />
        </React.Fragment>
    )
}

export default GoogleLogoutButton
