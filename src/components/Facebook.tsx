import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { IUser } from '../models/app.model';
import { register, findByEmail } from '../services/AuthService';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Facebook: React.FC = () => {
    const appID = process.env.REACT_APP_FACEBOOK_APP_ID;
    const history = useHistory();

    const responseFacebook = async (response: any) => {
        try{
            if(response){
                console.log(response)
                const found: IUser = await findByEmail(response.email);
                if(found){
                    localStorage.setItem('token', found.id);
                    setTimeout(()=>{
                        history.push('/');
                    },3000);
                }else{
                    const newUser: IUser = {
                        email: response.email,
                        name: response.name,
                        credential: 'Facebook',
                        id: uuidv4(),
                        avatar: response.picture.data.url
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

    console.log(appID)

    return (
        <FacebookLogin
        appId= {appID || ''}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass= 'btn btn-facebook raised fa-200'
      />
    )
}

export default Facebook
