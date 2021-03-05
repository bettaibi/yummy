import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { register, findByEmail } from '../services/AuthService';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../models/app.model';

const Google: React.FC = () => {
    const GoogleClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const history = useHistory();

    const responseGoogle = async (response: any) => {
        try{
            if(response){
                console.log(response);
                const found: IUser = await findByEmail(response.profileObj.email);
                if(found){
                    localStorage.setItem('token', found.id);
                    setTimeout(()=>{
                        history.push('/');
                    },3000);
                }else{
                    const newUser: IUser = {
                        email: response.profileObj.email,
                        name: response.profileObj.name,
                        credential: 'Google',
                        id: uuidv4(),
                        avatar: response.profileObj.imageUrl
                    };
                    const created = await register(newUser);
                    if(created){
                        localStorage.setItem('token', newUser.id);
                        setTimeout(()=>{
                            history.push('/');
                        },3000);
                    }
                }
            }
        }
        catch(err){
            console.error(err);
        }
    }

    return (
        <GoogleLogin
        clientId={GoogleClientID || ''}
        render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-google raised" style={{ marginBottom: '0.5rem', width: '200px' }}>Login with Google</button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    )
}

export default Google
