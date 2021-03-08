import React, {useContext} from 'react'

import logoText from '../assets/img/logo-text.png';
import defaultProfileImg from '../assets/img/profile.jpg';
import { Context } from '../store/Context';

const Header = () => {
    console.log("*** header init ***")
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
            
            <div className="container p1 d-flex flex-row flex-space-between h-100">
                <a className="logo-text d-flex flex-center">
                    {/* <img src={logoText} alt="Text logo"/> */}
                    Yammy
                </a>

                <div className="user-avatar">
                    <img src={getAvatar()} alt="user-avatar"/>
                </div>
            </div>
          
        </header>
    )
}

export default Header
