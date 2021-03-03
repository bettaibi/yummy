import React from 'react'

import logoText from '../assets/img/logo-text.png';
import profileImg from '../assets/img/profile.jpg';

const Header = () => {
    console.log("*** header init ***")
    return (
        <header className="bg-white border-bottom navbar" style={{height: '50px'}}>
            
            <div className="container p1 d-flex flex-row flex-space-between h-100">
                <a className="logo-text d-flex flex-center">
                    {/* <img src={logoText} alt="Text logo"/> */}
                    Yammy
                </a>

                <div className="user-avatar">
                    <img src={profileImg} alt="user-avatar"/>
                </div>
            </div>
          
        </header>
    )
}

export default Header
