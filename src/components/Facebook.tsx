import React from 'react'
import FacebookLogin from 'react-facebook-login';


const Facebook: React.FC = () => {
    const appID = process.env.REACT_FACEBOOK_APP_ID;

    const responseFacebook = (response: any) => {
        console.log(response);
    }

    return (
        <FacebookLogin
        appId= '258035875832051'
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    )
}

export default Facebook
