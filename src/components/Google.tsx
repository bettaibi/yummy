import React from 'react'
import { GoogleLogin } from 'react-google-login';


const Google: React.FC = () => {
    const GoogleClientID = process.env.REACT_GOOGLE_CLIENT_ID;

    const responseGoogle = (response:any) => {
        console.log(response);
    }

    return (
        <GoogleLogin
        clientId='151095742903-68jv62655rkq0sv1a0qk9o74cho05393.apps.googleusercontent.com'
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        // )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    )
}

export default Google
