import React, {useContext} from 'react'

import logoText from '../assets/img/text-logo.png';

import defaultProfileImg from '../assets/img/profile.jpg';
import { Context } from '../store/Context';

const Header: React.FC = () => {
    const {state} = useContext(Context);

    const getAvatar = () =>{
        const {currentUser} = state;
        if(currentUser?.avatar){
            return currentUser.avatar;
        }else{
            return defaultProfileImg;
        }
    }

    return (
        <header className="bg-white border-bottom navbar" style={{height: '50px'}}>
            
            <div className="container pr1 d-flex flex-row flex-space-between h-100">
                <a className="logo-text d-flex flex-center" style={{height: '40px', width:'100px'}}>
                   <img src={logoText} alt=""/>
                </a>

                <div className="user-avatar">
                    <img src={getAvatar()} alt="user-avatar"/>
                </div>
            </div>
          
        </header>
    )
}

export default Header
